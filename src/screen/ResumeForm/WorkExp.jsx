import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getWorkExpInfoApi,
  resetWork,
  toggleCurrentlyWorking,
  toggleDescriptionInput,
  updateFormData,
} from "../../slice/workExperienceSlice";


import "./editor.css";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createWorkExp,
  getSingleWorkExpById,
  upDateWorkExpById,
} from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import { getAllWorkExp } from "../../actions/workExperienceAction";
import Sidebar from "../../component/Sidebar";
import { markWorkAsCompleted } from "../../slice/allProfileComplitionSlice";

const WorkExpSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(5, "Minimum 5 Character")
    .required("Company name is required"),
  // location: Yup.string()
  //   .min(5, "Minimum 5 Character")
  //   .required("Company Location is required"),
  jobPosition: Yup.string().required("Job Position is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().when("currentlyWorking", {
    is: false,
    then: () =>
      Yup.date()
        .required("End Date is required")
        .min(Yup.ref("startDate"), "End Date must be after Start Date"),
  }),
  jobDescription: Yup.string().required("description is required"),
});

const WorkExp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentlyWorking, showDescriptionInput, formData } = useSelector(
    (state) => state.workExperience
  );

  const intialValues = { ...formData, currentlyWorking };
  const location = useLocation();
  let id = new URLSearchParams(location.search).get("profile");
  let workid = new URLSearchParams(location.search).get("work");
  let fromPreview = new URLSearchParams(location.search).get("preview");

  useEffect(() => {
    if (workid) {
      getWorkProfile();
    }
  }, []);
  const list = useSelector((state) => state?.workHistory?.list?.data);

  useEffect(() => {
    dispatch(getAllWorkExp(id));
  }, []);

  const getWorkProfile = async () => {
    let response = await getSingleWorkExpById(workid);
    if (response?.data?.status == 200) {
      const {
        company_name,
        designation,
        start_date,
        end_date,
        description,
        is_current,
      } = response?.data?.data;
      dispatch(
        getWorkExpInfoApi({
          currentlyWorking: is_current,
          showDescriptionInput: false,
          formData: {
            companyName: company_name,
            location: "",
            jobPosition: designation,
            startDate: start_date,
            endDate: is_current ? "" : end_date,
            jobDescription: description,
          },
        })
      );
      // showNotification("success","Profile updated successfully")
      // localStorage.setItem("resume_profile",JSON.stringify(response?.data))
    }
  };
  const handleSubmit = async (values) => {
    let body = {
      profile: id,
      company_name: values?.companyName,
      designation: values.jobPosition,
      start_date: values.startDate,
      end_date: values.endDate,
      description: values?.jobDescription,
      is_current: values?.currentlyWorking ? values?.currentlyWorking : false,
    };

    try {
      if (workid) {
        let response = await upDateWorkExpById(workid, body);
        if (response?.data?.status == 200) {
          showNotification("success", "Work updated successfully");
          navigate(`/work-history?profile=${id}&preview`);
          dispatch(resetWork());
        }
      } else {
        let response = await createWorkExp(body);
        if (response?.data?.status == 201) {
          navigate(
            fromPreview != null
              ? `/work-history?profile=${id}&preview`
              : `/work-history?profile=${id}`
          );
          dispatch(resetWork());
          dispatch(markWorkAsCompleted());
        }
      }
    } catch (error) {}
  };

  return (
    <div className=" main flex  bg-gray-100 justify-start items-center flex-col w-[54rem] sm:w-full pt-4 ">
      <div className="md:mb-7  mt-16 sm:mt-0   ">
        {fromPreview == null ? (
          <Sidebar />
        ) : (
          <>
            {" "}
            <h2 className="text-3xl  font-light text-center text-sky-500  mt-8   ">
              Tell us about your experience
            </h2>
            <p className=" text-center text-xl  text-gray-500 font-light   mb-4">
              Start with your most recent experience and work backward.
            </p>
          </>
        )}
      </div>
      <div>
        <div className=" form-div flex flex-col md:flex-row md:items-center justify-center  ">
          <div className="mt-0 md:mx-auto text-center  ">
            <Formik
              enableReinitialize
              initialValues={intialValues}
              validationSchema={WorkExpSchema}
              onSubmit={(values) => {
                handleSubmit(values);
             
              }}
            >
              {({ values, setFieldValue, errors }) => (
                <Form className="mt-[0rem] flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center text-left ">
                    <div className="flex flex-col mx-0 md:mx-1 pr-1 ">
                      <label className="text-xl  pb-1">Company Name</label>
                    
                      <Field
                        type="text"
                        name="companyName"
                        value={values.companyName}
                        onChange={(e) => {
                          setFieldValue("companyName", e.target.value);
                          dispatch(
                            updateFormData({ companyName: e.target.value })
                          );
                        }}
                        placeholder="Google "
                        className="w-[34rem]   sm:w-[34rem] md:w-[44rem]  outline-none rounded-md mb-3 p-[0.4rem] "
                      />
                      <ErrorMessage
                        name="companyName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
            
                  </div>

                  <div className="flex">
                    <div className="flex flex-col text-left   mt-2 ">
                      <label className="text-xl  pb-1">Job Title</label>
                      <Field
                        type="text"
                        name="jobPosition"
                        value={values.jobPosition}
                        onChange={(e) => {
                          setFieldValue("jobPosition", e.target.value);
                          dispatch(
                            updateFormData({ jobPosition: e.target.value })
                          );
                        }}
                        placeholder="Software Developer"
                        className="w-[34rem]   sm:w-[34rem] md:w-[44rem]  outline-none rounded-md mb-3 p-[0.45rem]"
                      />
                      <ErrorMessage
                        name="jobPosition"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex pt-2   text-left ">
                      <div className="flex flex-col pr-3">
                        <label className="text-xl  pb-1">Start Date</label>
                        <Field
                          type="date"
                          name="startDate"
                          max={new Date()?.toISOString()?.split("T")[0]}
                          value={values.startDate}
                          onChange={(e) => {
                            setFieldValue("startDate", e.target.value);
                            dispatch(
                              updateFormData({ startDate: e.target.value })
                            );
                          }}
                          className="w-[16.4rem] sm:w-[16.6rem] md:w-[21.5rem]   outline-none rounded-md mb-3 p-[0.4rem]"
                        />
                        <ErrorMessage
                          name="startDate"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label className="text-xl  pb-1">End Date</label>
                        <Field
                          type="date"
                          name="endDate"
                          max={new Date()?.toISOString()?.split("T")[0]}
                          onChange={(e) => {
                            setFieldValue("endDate", e.target.value);
                            dispatch(
                              updateFormData({ endDate: e.target.value })
                            );
                          }}
                          disabled={values.currentlyWorking}
                          value={values.currentlyWorking ? "" : values?.endDate}
                          className="w-[16.4rem] sm:w-[16.6rem] md:w-[21.5rem]   outline-none rounded-md mb-3 p-[0.4rem]"
                        />
                        <ErrorMessage
                          name="endDate"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-2  md:w-[44rem] md:pl-[20rem] ml-[19rem] pr-[6rem]  md:mr-0 sm:pr-[0rem] sm:ml-[14rem] md:ml-[5rem]">
                    <Field
                      type="checkbox"
                      id="currentlyWorking"
                      className="outline-none rounded-md "
                      checked={values.currentlyWorking}
                      onChange={() => {
                        setFieldValue(
                          "currentlyWorking",
                          !values.currentlyWorking
                        );
                        dispatch(toggleCurrentlyWorking());
                        if (!values.currentlyWorking) {
                          dispatch(updateFormData({ endDate: "" }));
                        }
                      }}
                    />
                    <label
                      htmlFor="currentlyWorking"
                      className="ml-1 text-base text-sky-500"
                    >
                      I am currently Working
                    </label>
                  </div>

                  {/*Description component*/}
                  <div className="mt-2 text-start ">
                    <div className="flex flex-col   mt-2">
                      <label className="text-xl pb-1">Job Description</label>
                      <Field
                        as="textarea"
                        name="jobDescription"
                        value={values?.jobDescription}
                        onChange={(e) => {
                          setFieldValue("jobDescription", e.target.value);
                          dispatch(
                            updateFormData({ jobDescription: e.target.value })
                          );
                        }}
                        placeholder="I developed brad AI  system Design...."
                        className="w-[34rem]   sm:w-[34rem] md:w-[44rem] outline-none rounded-md mb-3 p-[0.45rem]"
                      />

                      <ErrorMessage
                        name="jobDescription"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                  </div>
                  <div className="  flex mt-28 sm:mt-14 md:mt-10  sm:mb-28 w-[44rem] pb-10 sm:w-full mx-auto h-screen sm:h-0  justify-evenly sm:justify-around text-right">
                    <div>
                      <button
                        onClick={() =>
                          navigate(
                            list?.length != 0
                              ? fromPreview !== null
                                ? `/work-history?profile=${id}&preview`
                                : `/work-history?profile=${id}`
                              : `/worktips?profile=${id}`
                          )
                        }
                        type="button"
                        className="p-2 mt-1 mb-9 m-2 text-base rounded-md transition-all h-fit rounded-r-full rounded-l-full ease-in-out duration-200
                   border-black border-2 font-light"
                      >
                        BACK
                      </button>
                    </div>
                    <div>
                      {!workid && fromPreview == null && (
                        <button
                          type="button"
                          className="p-2 mt-1 mb-9 m-2 px-3 text-base rounded-md text-white bg-sky-500 rounded-r-full rounded-l-full border-double border-2 
                      font-light"
                          onClick={() => {
                            navigate(`/education?profie=${id}`);
                            dispatch(markWorkAsCompleted());
                          }}
                        >
                          Skip
                        </button>
                      )}

                      <button
                        type="submit"
                        className="p-2 mt-1 mb-9 m-2 text-base rounded-md text-white bg-sky-500 rounded-r-full rounded-l-full border-double border-2 
                    font-light"
                      >
                        {fromPreview != null
                          ? "Save Changes"
                          : "Next:Education"}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
