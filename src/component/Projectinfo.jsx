import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import showNotification from "../services/NotificationService";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  getProjectInfoApi,
  resetProject,
  updateFormData,
} from "../slice/projectSlice";
import {
  createProject,
  getSingleProjectById,
  updateProjectById,
} from "../services/ApiServices";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { resetForm } from "../slice/showContentSlice";
import { getFull } from "../actions/allProfieAction";
import Tipsbar from "./Tipsbar";
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

const Projectinfo = () => {
  const [open, SetOpen] = useState(false);
  const HandlecloseDrawer = () => SetOpen(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  let projectId = new URLSearchParams(location.search).get("project");
  const initialValues = useSelector((state) => state.project);
  useEffect(() => {
    getProjectData();
  }, [projectId]);

  const getProjectData = async () => {
    if (projectId !== null) {
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
      }
    }
  };

  const handleSubmit = async (values) => {
    let formData = new FormData();
    formData.append("profile", resumeData?.id);
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
          navigate("/resume-build");
          dispatch(getFull(resumeData?.id));
          dispatch(resetProject());
          dispatch(resetForm());
        }
      } else {
        let response = await createProject(formData);
        if (response?.data?.status == 201) {
          dispatch(getFull(resumeData?.id));
          dispatch(resetForm());
          dispatch(resetProject());
        }
      }
    } catch (error) {}
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={ProjectSchema}
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
              <label className="text-[16px] pb-1">Project Name</label>

              <Field
                type="text"
                name="projectName"
                value={values.projectName}
                onChange={(e) => {
                  setFieldValue("projectName", e.target.value);
                  dispatch(updateFormData({ projectName: e.target.value }));
                }}
                placeholder="Project name"
                className=" outline-none border  rounded-[6px] p-3 "
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col text-left   mt-2 ">
              <label className="text-[16px] pb-1">Project Link</label>
              <Field
                type="text"
                name="projectLink"
                value={values.projectLink}
                onChange={(e) => {
                  setFieldValue("projectLink", e.target.value);
                  dispatch(updateFormData({ projectLink: e.target.value }));
                }}
                placeholder="Project link"
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

            <div className="flex flex-col   mt-2">
              <label className="text-[16px] ">Description</label>
              <ReactQuill
                theme="snow"
                name="description"
                value={values.description}
                onChange={(e) => {
                  setFieldValue("description", e);
                  dispatch(updateFormData({ description: e }));
                }}
                placeholder="I developed brad AI  system Design...."
                className="outline-none rounded-md "
              />

              <ErrorMessage
                name="jobDescription"
                component="div"
                className="error-message text-red-500"
              />
            </div>
          </div>
          <div className="flex justify-end gap-5">
            <button onClick={() => dispatch(resetForm())}>Cancel</button>
            <button
              // onClick={() => handleSubmit(values)}
              type="submit"
              className="bg-blue-600 text-[20px] rounded-full text-white px-[20px] py-[10px] "
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Projectinfo;
