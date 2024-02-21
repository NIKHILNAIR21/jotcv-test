import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import {
  updateFormData,
  toggleCurrentlyWorking,
} from "../slice/workExperienceSlice";
import showNotification from "../services/NotificationService";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  upDateWorkExpById,
  createWorkExp,
  getSingleWorkExpById,
} from "../services/ApiServices";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { resetForm } from "../slice/showContentSlice";
import { getFull } from "../actions/allProfieAction";
import { resetWork } from "../slice/workExperienceSlice";
import { markWorkAsCompleted } from "../slice/allProfileComplitionSlice";
import { resetSection } from "../slice/sectionSlice";
import { getWorkExpInfoApi } from "../slice/workExperienceSlice";
import Tipsbar from "./Tipsbar";
const WorkExpSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Minimum 2 Character")
    .required("Company name is required"),
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
const WorkInfo = () => {
  const [open, SetOpen] = useState(false);
  const HandlecloseDrawer = () => SetOpen(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentlyWorking, showDescriptionInput, formData } = useSelector(
    (state) => state.workExperience
  );
  let workid = new URLSearchParams(location.search).get("workId");
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const intialValues = { ...formData, currentlyWorking };
  useEffect(() => {
    getWorkProfile();
  }, [workid]);

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
          isEdit: true,
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
    }
  };
  const handleSubmit = async (values) => {
    let body = {
      profile: resumeData?.id,
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
          navigate("/resume-build");
          showNotification("success", "Work updated successfully");
          dispatch(resetWork());
          dispatch(resetForm());
          dispatch(getFull(resumeData?.id));
        }
      } else {
        let response = await createWorkExp(body);

        if (response?.data?.status == 201) {
          dispatch(resetWork());
          dispatch(resetForm());
          dispatch(getFull(resumeData?.id));
        }
      }
    } catch (error) {}
  };

  return (
    <div className=" ">
      <Formik
        enableReinitialize
        initialValues={intialValues}
        validationSchema={WorkExpSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, setFieldValue, errors }) => (
          <Form>
            <div className="bg-white rounded-[6px] p-4 w-[33rem] relative">
              <div
                className="absolute top-1 right-2 cursor-pointer font-bold"
                onClick={() => SetOpen(!open)}
              >
                Need Help ?
              </div>
              {open && <Tipsbar open={open} onClose={HandlecloseDrawer} />}
              <div className="flex flex-col">
                <label className="text-[16px] pb-1">Company Name</label>

                <Field
                  type="text"
                  name="companyName"
                  value={values.companyName}
                  onChange={(e) => {
                    setFieldValue("companyName", e.target.value);
                    dispatch(updateFormData({ companyName: e.target.value }));
                  }}
                  placeholder="Google "
                  className=" outline-none border  rounded-[6px] p-3 "
                />
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col text-left   mt-2 ">
                <label className="text-[16px] pb-1">Job Title</label>
                <Field
                  type="text"
                  name="jobPosition"
                  value={values.jobPosition}
                  onChange={(e) => {
                    setFieldValue("jobPosition", e.target.value);
                    dispatch(updateFormData({ jobPosition: e.target.value }));
                  }}
                  placeholder="Software Developer"
                  className="  outline-none border p-3 rounded-[6px] "
                />
                <ErrorMessage
                  name="jobPosition"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="flex pt-2 gap-4 w-full  text-left ">
                  <div className="flex flex-col w-full">
                    <label className="text-[16px]  pb-1">Start Date</label>
                    <Field
                      type="date"
                      name="startDate"
                      max={new Date()?.toISOString()?.split("T")[0]}
                      value={values.startDate}
                      onChange={(e) => {
                        setFieldValue("startDate", e.target.value);
                        dispatch(updateFormData({ startDate: e.target.value }));
                      }}
                      className=" outline-none border w-full p-3 rounded-[6px] "
                    />
                    <ErrorMessage
                      name="startDate"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-[16px]  pb-1">End Date</label>
                    <Field
                      type="date"
                      name="endDate"
                      max={new Date()?.toISOString()?.split("T")[0]}
                      onChange={(e) => {
                        setFieldValue("endDate", e.target.value);
                        dispatch(updateFormData({ endDate: e.target.value }));
                      }}
                      disabled={values.currentlyWorking}
                      value={values.currentlyWorking ? "" : values?.endDate}
                      className=" outline-none w-full border p-3 rounded-[6px]"
                    />
                    <ErrorMessage
                      name="endDate"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex mt-2  justify-end">
                <Field
                  type="checkbox"
                  id="currentlyWorking"
                  className="outline-none rounded-md "
                  checked={values.currentlyWorking}
                  onChange={() => {
                    setFieldValue("currentlyWorking", !values.currentlyWorking);
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
              <div className="flex flex-col   mt-2">
                <label className="text-[16px] ">Job Description</label>
                <ReactQuill
                  theme="snow"
                  name="jobDescription"
                  value={values?.jobDescription}
                  onChange={(e) => {
                    setFieldValue("jobDescription", e);
                    dispatch(updateFormData({ jobDescription: e }));
                  }}
                  //   placeholder="I developed brad AI  system Design...."
                  className="outline-none rounded-md "
                />

                <ErrorMessage
                  name="jobDescription"
                  component="div"
                  className="error-message text-red-500"
                />
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-2">
              <button onClick={() => dispatch(resetForm())}>Cancel</button>
              <button
                // onClick={() => handleSubmit(values)}
                type="submit"
                className="bg-blue-600 text-[20px] rounded-full text-white px-[20px] py-[6px] "
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WorkInfo;
