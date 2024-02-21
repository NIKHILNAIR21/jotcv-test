import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEducationInfoApi,
  resetEdu,
  toggleCurrentlyStudying,
  toggleDescriptionInput,
  updateFormData,
} from "../../slice/educationSlice";

import "./editor.css";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createEducationProfile,
  getSingleEduById,
  upDateEduById,
} from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import { getAllEducation } from "../../actions/educationAction";
import Sidebar from "../../component/Sidebar";
import { markEduAsCompleted } from "../../slice/allProfileComplitionSlice";

const EducationSchema = Yup.object().shape({
  schoolName: Yup.string()
    .min(5, "Minimum 5 Character")
    .required("School name is required"),
  // schoolLocation: Yup.string().required("School location is required"),
  degree: Yup.string().required("Degree is required"),
  // fieldOfStudy: Yup.string().required("Field of study is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().when("currentlyStudying", {
    is: false,
    then: () =>
      Yup.date()
        .required("End Date is required")
        .min(Yup.ref("startDate"), "End Date must be after Start Date"),
  }),
  description: Yup.string(),
});

const Education = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const educationState = useSelector(
    (state) => state.education?.currentlyStudying
  );
  const formValue = useSelector((state) => state.education.formData);
  const intialValues = { ...formValue, currentlyStudying: educationState };

  const location = useLocation();
  let id = new URLSearchParams(location.search).get("profile");
  let eduid = new URLSearchParams(location.search).get("edu");
  let fromPreview = new URLSearchParams(location.search).get("preview");

  const list = useSelector((state) => state?.eduHistory?.list?.data);

  useEffect(() => {
    dispatch(getAllEducation(id));
  }, []);

  useEffect(() => {
    getEducationProfile();
  }, [eduid]);

  const getEducationProfile = async () => {
    if (eduid !== null) {
      let response = await getSingleEduById(eduid);
      if (response?.data?.status == 200) {
        const {
          course,
          university,
          start_date,
          end_date,
          description,
          is_current,
        } = response?.data?.data;
        dispatch(
          getEducationInfoApi({
            currentlyStudying: is_current,
            showDescriptionInput: false,
            formData: {
              schoolName: university,
              schoolLocation: "",
              degree: course,
              fieldOfStudy: "",
              startDate: start_date,
              endDate: is_current ? "" : end_date,
              description: description,
            },
          })
        );
      }
    }
  };

  const handleSubmit = async (values) => {
    let body = {
      profile: id,
      course: values?.degree,
      university: values.schoolName,
      start_date: values.startDate,
      end_date: values.endDate,
      description: values?.description,
      is_current: values?.currentlyStudying ? values?.currentlyStudying : false,
    };

    try {
      if (eduid) {
        let response = await upDateEduById(eduid, body);
        if (response?.data?.status == 200) {
          showNotification("success", "Education updated successfully");
          navigate(`/education-history?profile=${id}&preview`);
          dispatch(resetEdu());
        }
      } else {
        let response = await createEducationProfile(body);
        if (response?.data?.status == 201) {
          navigate(
            fromPreview !== null
              ? `/education-history?profile=${id}&preview`
              : `/education-history?profile=${id}`
          );
          dispatch(resetEdu());
          dispatch(markEduAsCompleted());
        }
      }
    } catch (error) {}
  };

  return (
    <div className=" main flex flex-col bg-gray-100 justify-center items-center  w-[54rem] sm:w-[60rem] md:w-full ">
      <div className="md:mb-10  mt-16 sm:mt-12 ">
        {fromPreview == null ? (
          <Sidebar />
        ) : (
          <>
            <h2 className="text-2xl font-light text-sky-500 m-2 text-center  mt-8 ">
              Tell us about your education
            </h2>
            <p className="text-center text-xl  text-gray-500 font-light   mb-4">
              Include every school, even if you're still there or didn't
              graduate.
            </p>
          </>
        )}
      </div>
      <div>
        <div className=" form-div flex flex-col md:flex-row  justify-center ">
          <div className="mt-0  text-center   ">
            <Formik
              enableReinitialize
              initialValues={intialValues}
              validationSchema={EducationSchema}
              onSubmit={(values) => {
                handleSubmit(values);
                // navigate("/askskills");
              }}
            >
              {({ values, setFieldValue }) => (
                <Form className="mt-[0rem] flex flex-col   justify-center items-center">
                  <div className="flex flex-col justify-center items-center text-left">
                    <div className="flex flex-col mx-0 md:mx-1 pr-1 ">
                      <label className="text-xl  pb-1">School/University</label>
                      <Field
                        type="text"
                        name="Anytown University"
                        value={values.schoolName}
                        onChange={(e) => {
                          setFieldValue("schoolName", e.target.value);
                          dispatch(
                            updateFormData({ schoolName: e.target.value })
                          );
                        }}
                        placeholder="Anytown University"
                        className="w-[34rem] sm:w-[34rem]  md:w-[44rem]  outline-none rounded-md mb-3 p-[0.4rem] "
                      />
                      <ErrorMessage
                        name="schoolName"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                    {/* <div className="flex flex-col mx-1">
                    <label className="text-base text-left pb-1">
                      School location
                    </label>
                    <Field
                      type="text"
                      name="schoolLocation"
                      value={values.schoolLocation}
                      onChange={(e) => {
                        setFieldValue("schoolLocation", e.target.value);
                        dispatch(  
                        );
                      }}
                      placeholder="e.g Mumbai"
                      className="w-[17rem] sm:w-[20rem] md:w-[28rem]   outline outline-1 mb-3 p-[0.4rem]"
                    />
                    <ErrorMessage
                      name="schoolLocation"
                      component="div"
                      className="error-message text-red-500"
                    />
                  </div> */}
                    <div className="flex flex-col">
                      <label className="text-xl  pb-1">Degree</label>
                      <Field
                        type="text"
                        name="degree"
                        value={values.degree}
                        onChange={(e) => {
                          setFieldValue("degree", e.target.value);
                          dispatch(updateFormData({ degree: e.target.value }));
                        }}
                        placeholder="Bachelor of Business Administration"
                        className="w-[34rem] sm:w-[34rem] md:w-[44rem]  bg-white  outline-none rounded-md mb-3 p-[0.4rem]"
                      />
                      <ErrorMessage
                        name="degree"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center items-center text-left ">
                    <div className="flex flex-col pt-2 pr-3">
                      <label className="text-xl  pb-1">Start Date</label>
                      <input
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
                        className="error-message text-red-500"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label className="text-xl ">End Date</label>
                      <input
                        type="date"
                        name="endDate"
                        max={new Date()?.toISOString()?.split("T")[0]}
                        onChange={(e) => {
                          setFieldValue("endDate", e.target.value);
                          dispatch(updateFormData({ endDate: e.target.value }));
                        }}
                        disabled={values.currentlyStudying}
                        value={values.currentlyStudying ? "" : values.endDate}
                        className="w-[16.4rem] sm:w-[16.6rem] md:w-[21.5rem] outline-none rounded-md  p-[0.4rem]"
                      />
                      <ErrorMessage
                        name="endDate"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                  </div>
                  <div className=" flex mt-2  md:w-[44rem] md:pl-[20rem] ml-[19rem] pr-[6rem] md:mr-0 sm:pr-[0rem] sm:ml-[14rem] md:ml-[5rem]">
                    <Field
                      type="checkbox"
                      id="currentlyStudying"
                      checked={values.currentlyStudying}
                      onChange={() => {
                        setFieldValue(
                          "currentlyStudying",
                          !values.currentlyStudying
                        );
                        dispatch(toggleCurrentlyStudying());
                        if (!values.currentlyStudying) {
                          dispatch(updateFormData({ endDate: "" }));
                        }
                      }}
                    />
                    <label
                      htmlFor="currentlyStudying"
                      className="pl-1 text-base text-sky-500"
                    >
                      I am currently studying here
                    </label>
                  </div>

                  {/* <div className="flex pt-2 justify-normal ml-16 mt-0 sm:ml-16 md:ml-0 md:justify-normal   text-left ">
                  <div className="flex flex-col pr-3 ">
                    <label className="text-base  pb-1">Field Of Study</label>
                    <Field
                      type="text"
                      name="fieldOfStudy"
                      value={values.fieldOfStudy}
                      onChange={(e) => {
                        setFieldValue("fieldOfStudy", e.target.value);
                        dispatch(
                          updateFormData({ fieldOfStudy: e.target.value })
                        );
                      }}
                      placeholder="e.g Computer science"
                      className="w-[11.3rem] sm:w-[19rem] md:w-[28rem]   outline outline-1 mb-3 p-[0.4rem]"
                    />
                    <ErrorMessage
                      name="fieldOfStudy"
                      component="div"
                      className="error-message text-red-500"
                    />
                  </div>
                </div> */}

                  {/*Description component*/}
                  <div className="mt-2 text-start ">
                    <div className="flex flex-col   mt-2 ">
                      <label className="text-xl pb-1">Description</label>
                      <Field
                        as="textarea"
                        name="description"
                        value={values?.description}
                        onChange={(e) => {
                          setFieldValue("description", e.target.value);
                          dispatch(updateFormData({ description: data }));
                        }}
                        placeholder="Developed and executed comprehensive marketing strategies, resulting in a 20% increase in customer engagement."
                        className="w-[34rem] sm:w-[34rem] md:w-[44rem]  outline-none rounded-md mb-3 p-[0.45rem]"
                      />
                    </div>
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="error-message text-red-500"
                    />
                  </div>
                  <div className=" flex mt-20 md:mt-10 mb-72 sm:mb-32 w-full h-screen sm:h-0   justify-between   text-center  ">
                    <div>
                      <button
                        onClick={() =>
                          navigate(
                            list?.length != 0
                              ? fromPreview !== null
                                ? `/education-history?profile=${id}&preview`
                                : `/education-history?profile=${id}`
                              : `/edutips?profile=${id}`
                          )
                        }
                        type="button"
                        className="p-2 mt-1 mb-9 m-2 px-4 text-base rounded-md transition-all ease-in-out duration-20 rounded-r-full rounded-l-full border-black  border-2 font-light"
                      >
                        Back
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="p-2 mt-1 mb-9 m-2 text-base rounded-md text-white bg-sky-500 rounded-r-full rounded-l-full border-double border-2 font-light"
                      >
                        {fromPreview !== null ? "Save Changes" : "Next:Skills"}
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

export default Education;
