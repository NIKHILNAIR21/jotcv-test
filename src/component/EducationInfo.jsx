import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Tipsbar from "./Tipsbar";
import {
  updateFormData,
  toggleCurrentlyStudying,
  resetEdu,
  getEducationInfoApi,
} from "../slice/educationSlice";
import { resetForm } from "../slice/showContentSlice";
import {
  createEducationProfile,
  getSingleEduById,
  upDateEduById,
} from "../services/ApiServices";
import { getFull } from "../actions/allProfieAction";
import showNotification from "../services/NotificationService";
const EducationSchema = Yup.object().shape({
  schoolName: Yup.string()
    .min(3, "Minimum 3 Character")
    .required("School name is required"),

  degree: Yup.string().required("Degree is required"),

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

const EducationInfo = () => {
  const [open, SetOpen] = useState(false);
  const HandlecloseDrawer = () => SetOpen(false);
  const location = useLocation();
  const navigate = useNavigate();
  let resumeData = useSelector((state) => state?.fullProfile?.resumeData?.data);
  let eduid = new URLSearchParams(location.search).get("edu");
  const dispatch = useDispatch();
  const educationState = useSelector(
    (state) => state.education?.currentlyStudying
  );
  const formValue = useSelector((state) => state.education.formData);
  const intialValues = { ...formValue, currentlyStudying: educationState };

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
            isEdit: true,
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
      profile: resumeData?.id,
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
        if (response?.status == 200) {
          showNotification("success", "Education updated successfully");
          dispatch(getFull(resumeData?.id));
          dispatch(resetForm());
          dispatch(resetEdu());
          navigate("/resume-build");
        }
      } else {
        let response = await createEducationProfile(body);
        if (response?.data?.status == 201) {
          dispatch(resetEdu());
          dispatch(resetForm());
          dispatch(getFull(resumeData?.id));
        }
      }
    } catch (error) {}
  };
  return (
    <div className="">
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
          <Form className=" flex flex-col  relative ">
            <div
              className="absolute top-1 right-2 cursor-pointer font-bold"
              onClick={() => SetOpen(!open)}
            >
              Need Help ?
            </div>
            {open && <Tipsbar open={open} onClose={HandlecloseDrawer} />}
            <div className="bg-white rounded-[6px] p-4 w-[33rem]">
              <div className="flex flex-col">
                <label className="text-[16px] pb-1">School/University</label>
                <Field
                  type="text"
                  name="Anytown University"
                  value={values.schoolName}
                  onChange={(e) => {
                    setFieldValue("schoolName", e.target.value);
                    dispatch(updateFormData({ schoolName: e.target.value }));
                  }}
                  placeholder="Anytown University"
                  className="p-3  border outline-none rounded-[6px]"
                />
                <ErrorMessage
                  name="schoolName"
                  component="div"
                  className="error-message text-red-500"
                />
              </div>
              <div className="flex flex-col mt-[12px] w-full">
                <label className="text-[16px]  pb-1">Degree</label>
                <Field
                  type="text"
                  name="degree"
                  value={values.degree}
                  onChange={(e) => {
                    setFieldValue("degree", e.target.value);
                    dispatch(updateFormData({ degree: e.target.value }));
                  }}
                  placeholder="Bachelor of Business Administration"
                  className="p-3  border outline-none rounded-[6px]"
                />
                <ErrorMessage
                  name="degree"
                  component="div"
                  className="error-message text-red-500"
                />
              </div>

              <div className="flex justify-center gap-10 items-center  mt-[12px] w-full ">
                <div className="flex flex-col w-full">
                  <label className="text-[16px]  pb-1">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    max={new Date()?.toISOString()?.split("T")[0]}
                    value={values.startDate}
                    onChange={(e) => {
                      setFieldValue("startDate", e.target.value);
                      dispatch(updateFormData({ startDate: e.target.value }));
                    }}
                    className="   p-3  border outline-none rounded-[6px]"
                  />
                  <ErrorMessage
                    name="startDate"
                    component="div"
                    className="error-message text-red-500"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="text-[16px] ">End Date</label>
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
                    className=" p-3  border outline-none rounded-[6px]"
                  />
                  <ErrorMessage
                    name="endDate"
                    component="div"
                    className="error-message text-red-500"
                  />
                </div>
              </div>
              <div className=" flex mt-2  w-full justify-end">
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
                  className="p-1d"
                />
                <label
                  htmlFor="currentlyStudying"
                  className="pl-1 text-base text-sky-500"
                >
                  I am currently studying here
                </label>
              </div>
            </div>

            <div className="flex  justify-end mt-2 gap-5">
              <button
                onClick={() => {
                  dispatch(resetForm());
                  navigate("/resume-build");
                }}
                type="button"
              >
                Cancel
              </button>
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
    </div>
  );
};

export default EducationInfo;
