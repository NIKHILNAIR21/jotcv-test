import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  getProjectInfoApi,
  resetProject,
  updateFormData,
} from "../../slice/projectSlice";
import {
  createProject,
  getSingleProjectById,
  updateProjectById,
} from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import { getAllProjects } from "../../actions/projectAction";
import Sidebar from "../../component/Sidebar";
import { markProjectAsCompleted } from "../../slice/allProfileComplitionSlice";

const ProjectSchema = Yup.object().shape({
  projectName: Yup.string()
    .min(5, "Minimum 5 Character")
    .required("Project name is required"),
  description: Yup.string().required("Description  is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .required("End Date is required")
    .min(Yup.ref("startDate"), "End Date must be after Start Date"),
});

const AddProjectForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const educationState = useSelector((state) => state.project);
  const initialValues = useSelector((state) => state.project);
  const location = useLocation();
  let id = new URLSearchParams(location.search).get("profile");
  let projectId = new URLSearchParams(location.search).get("project");
  const list = useSelector((state) => state?.projectHistory?.list?.data);
  const isLoading = useSelector((state) => state?.projectHistory?.loading);
  let preview = new URLSearchParams(location.search).get("preview");

  useEffect(() => {
    dispatch(getAllProjects(id));
  }, []);

  useEffect(() => {
    getProjectData();
  }, [projectId]);

  const getProjectData = async () => {
    if(projectId!==null){
      let response = await getSingleProjectById(projectId);
      if (response?.data?.status == 200) {
        const { title, link, start_date, end_date, description } =
          response?.data?.data;
        dispatch(
          getProjectInfoApi({
            projectName: title,
            startDate: start_date,
            endDate: end_date,
            description: description,
            projectLink: link,
          })
        );
        // showNotification("success","Profile updated successfully")
        // localStorage.setItem("resume_profile",JSON.stringify(response?.data))
      }
    }
  };

  const handleSubmit = async (values) => {
    let formData = new FormData();
    formData.append("profile", id);
    formData.append("title", values.projectName);
    formData.append("link", values.projectLink);
    formData.append("start_date", values.startDate);
    formData.append("end_date", values.endDate);
    formData.append("description", values?.description);

    try {
      if (projectId) {
        let response = await updateProjectById(projectId, formData);
        if (response?.data?.status == 200) {
          showNotification("success", "Project updated successfully");
          navigate(`/project-history?profile=${id}&preview`);
          dispatch(resetProject());
        }
      } else {
        let response = await createProject(formData);
        if (response?.data?.status == 201) {
          navigate(
            preview != null
              ? `/project-history?profile=${id}&preview`
              : `/project-history?profile=${id}`
          );
          dispatch(resetProject());
          dispatch(markProjectAsCompleted());
        }
      }
    } catch (error) {}
  };

  return (
    <div className=" main flex flex-col bg-gray-100  w-[54rem] sm:w-full justify-start items-center  ">
      <div className="md:mb-10  mt-16 sm:mt-12
       ">
        {preview == null ? (
          <Sidebar />
        ) : (
          <>
            {" "}
            <h2 className="text-2xl text-center   font-light text-sky-500  mt-8 mb-3   ">
              Tell us about your Project
            </h2>
            <p className=" text-center text-xl  text-gray-500 font-light   mb-4">
              Include every project, to show recruiter your abilities
            </p>
          </>
        )}
      </div>
      <div>
        <div className=" form-div flex flex-col md:flex-row  justify-center  ">
          <div className="mt-0 mx-10 text-center">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={ProjectSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ values, setFieldValue }) => (
                <Form className="mt-[0rem] flex flex-col   justify-center items-center">
                  <div className="flex justify-center items-center text-left">
                    <div className="flex flex-col  pr-1 ">
                      <label className="text-lg  pb-1">Project Name</label>
                      <Field
                        type="text"
                        name="projectName"
                        value={values.projectName}
                        onChange={(e) => {
                          setFieldValue("projectName", e.target.value);
                          dispatch(
                            updateFormData({ projectName: e.target.value })
                          );
                        }}
                        placeholder="e.g xyz Project "
                        className="w-[34rem] sm:w-[34rem] rounded-md md:w-[44rem] outline-none mb-3 p-[0.4rem] "
                      />
                      <ErrorMessage
                        name="projectName"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-left  ">
                    <div className="flex flex-col ">
                      <label className="text-lg text-left pb-1">
                        Description
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        value={values.description}
                        onChange={(e) => {
                          setFieldValue("description", e.target.value);
                          dispatch(
                            updateFormData({ description: e.target.value })
                          );
                        }}
                        placeholder="e.g Description about your project"
                        className="w-[34rem]  rounded-md sm:w-[34rem] md:w-[44rem] outline-none mb-3 p-[0.4rem]"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center sm:flex-row text-left  mt-2 ">
                    <div className="flex flex-col  sm:pr-3">
                      <label className="text-lg  pb-1">Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={values.startDate}
                        max = {new Date()?.toISOString()?.split('T')[0]}
                        onChange={(e) => {
                          setFieldValue("startDate", e.target.value);
                          dispatch(
                            updateFormData({ startDate: e.target.value })
                          );
                        }}
                        className="w-[34rem] sm:w-[16.6rem] md:w-[21.5rem] rounded-md outline-none mb-3 p-[0.4rem]"
                      />
                      <ErrorMessage
                        name="startDate"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                    <div className="flex flex-col  text-left ">
                      <label className="text-lg  pb-1">End Date</label>
                      <input
                        type="date"
                        name="endDate"
                        max = {new Date()?.toISOString()?.split('T')[0]}
                        onChange={(e) => {
                          setFieldValue("endDate", e.target.value);
                          dispatch(updateFormData({ endDate: e.target.value }));
                        }}
                        value={values.endDate}
                        className="w-[34rem] sm:w-[16.6rem] md:w-[21.5rem] rounded   outline-none mb-3 p-[0.4rem]"
                      />
                      <ErrorMessage
                        name="endDate"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center items-center text-left ">
                    <div className="flex flex-col  ">
                      <label className="text-lg  pb-1">Project Link</label>
                      <Field
                        type="text"
                        name="projectLink"
                        value={values.projectLink}
                        onChange={(e) => {
                          setFieldValue("projectLink", e.target.value);
                          dispatch(
                            updateFormData({ projectLink: e.target.value })
                          );
                        }}
                        placeholder="e.g www.projectUrl.com"
                        className="w-[34rem] sm:w-[34rem] md:w-[44rem] rounded-md outline-none mb-3 p-[0.4rem]"
                      />
                      <ErrorMessage
                        name="projectLink"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                  </div>

                  <div className=" flex mt-20 mb-72 sm:mb-32 w-full h-screen sm:h-0 justify-between text-center  ">
                  <div>
                  <button
                      onClick={() =>
                        navigate(
                          list?.length !== 0
                            ? `/project-history?profile=${id}&preview`
                            : `/skill?profile=${id}`
                        )
                      }
                      type="button"
                      className="p-2 mt-1 mb-9 m-2 text-base rounded-r-full rounded-l-full transition-all ease-in-out duration-200
                     border-black border-2 font-light"
                    >
                      Back
                    </button>
                  </div>
                <div>
                <button
                      type="submit"
                      className="p-2 mt-1 mb-9 m-2 text-base  rounded-r-full rounded-l-full text-white bg-sky-500
                  border-double border-2 font-light"
                    >
                      {preview !== null ? "Save Changes" : "Next:Interests"}
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

export default AddProjectForm;
