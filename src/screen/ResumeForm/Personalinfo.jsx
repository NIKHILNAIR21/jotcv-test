import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import NoImg from "../../assets/NoImage.jpg";
import {
  createCVProfile,
  getCVProfile,
  updateCVProfile
} from "../../services/ApiServices";
import { markProfileAsCompleted } from "../../slice/allProfileComplitionSlice";
import {
  getPersonalInfoApi,
  updatePersonalInfo,
  updatePhoto,
} from "../../slice/personalInfo";
import Sidebar from "../../component/Sidebar";
import ResumeTemoImg from "../../component/resume/ResumeTemoImg";
import { isNumberKey } from "../../constant";

const PersonalInfoSchema = Yup.object().shape({
  FullName: Yup.string()
    .max(25, "Max 25 character or less")
    .required("Full name is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),
  profession: Yup.string().required("Profession is required"),
  city: Yup.string().required("Address  is required"),
  phoneNumber: Yup.string()
    .min(10, "minimum 10 digit number")
    .required("Phone number is required"),
});
const Personalinfo = () => {
  const [selectedPic, setSelectedPic] = useState(null);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.personalInfo);
  const initialValues = useSelector((state) => state.personalInfo);
  const location = useLocation();
  let id = new URLSearchParams(location.search).get("profile");
  let fromPreview = new URLSearchParams(location.search).get("preview");
  const tempId = useSelector((state) => state?.templateID?.tempId);

  useEffect(() => {
    if (id) {
      getResumeProfile();
    }
  }, []);

  const getResumeProfile = async () => {
    let response = await getCVProfile(id);
    if (response?.data?.status == 200) {
      const {
        full_name,
        position,
        summary,
        address,
        email,
        profile_picture,
        mobile_no,
      } = response?.data?.data;
      dispatch(
        getPersonalInfoApi({
          FullName: full_name,
          profession: position,
          city: address,
          summary: summary,
          phoneNumber: mobile_no,
          email: email,
          photo: profile_picture,
        })
      );
      // showNotification("success","Profile updated successfully")
      // localStorage.setItem("resume_profile",JSON.stringify(response?.data))
    }
  };

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setSelectedPic(selectedPhoto);

    dispatch(updatePhoto(URL?.createObjectURL(selectedPhoto)));
  };
  

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    let formData = new FormData();
    formData.append("email", values.email);
    formData.append("full_name", values.FullName);
    formData.append("position", values.profession);
    formData.append("mobile_no", values.phoneNumber);
    formData.append("address", values.city);
    formData.append("summary", values?.summary);
    formData.append("template", tempId);

    {
      selectedPic !== null && formData.append("profile_picture", selectedPic);
    }

    try {
      if (id) {
        let response = await updateCVProfile(id, formData);
        if (response?.status == 200) {
          navigate(
            fromPreview !== null
              ? `/preview?profile=${id}`
              : `/worktips?profile=${response?.data?.data?.id}`
          );
        }
      } else {
        let response = await createCVProfile(formData);
        if (response?.status == 201) {
          dispatch(markProfileAsCompleted());
          navigate(`/worktips?profile=${response?.data?.data?.id}`);
        }
      }
    } catch (error) {}
  };

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showprofession, setshowprofession] = useState(false);

  const [showDescription, setShowDescription] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showMobileNo, setShowMobileNo] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="bg-gray-100 main mx-auto flex w-[54rem] sm:w-[60rem] md:w-full flex-col md:flex-row items-center md:items-start overflow-x-hidden md:min-h-screen justify-center pt-4">
      <div className="flex flex-col  items-center  justify-start">
        <div className="mt-16 sm:mt-0">
          {/* <Sidebar/> */}
          {fromPreview == null ? (
            <Sidebar />
          ) : (
            <>
              {" "}
              <h2 className="text-2xl w-[44rem] sm:w-full  font-normal text-sky-500  mt-0 text-center   ">
                What’s the best way for employers to contact you?
              </h2>
              <p className=" text-center text-base w-[44rem] sm:w-full   mb-4">
                We suggest including an email and phone number.
              </p>
            </>
          )}
        </div>
        {/* <h2 className="text-2xl w-[44rem] sm:w-full  font-normal text-sky-500  mt-0 text-center   ">
          What’s the best way for employers to contact you?
        </h2>
        <p className=" text-center text-base w-[44rem] sm:w-full   mb-4">
          We suggest including an email and phone number.
        </p> */}

        <div className=" form-div flex flex-col md:flex-row py-10 sm:py-0   justify-center md:items-center ">
          <div className="mt-16 md:mt-0 md:mb-72  text-center ml-64 md:ml-0 w-[16rem] sm:w-[9.9rem] md:w-[11rem] sm:mx-auto ">
            <div className="mb-2 ">
              {formData?.photo ? (
                <img
                  src={formData?.photo}
                  alt="Preview"
                  className="mb-2 w-40 h-40 rounded-md"
                />
              ) : (
                <img
                  src={NoImg}
                  alt="Preview"
                  className="mb-2 w-40 h-40 rounded-md"
                />
              )}
            </div>

            <input
              type="file"
              onChange={handlePhotoChange}
              accept="image/*"
              id="fileInput"
              className="absolute left-64 top-[40rem] z-[-100] pb-3 opacity-0 w-0 h-0 cursor-pointer"
            />
            <label
              htmlFor="fileInput"
              className="mt-1 flex py-2  rounded-md ml-[0.4%] sm:ml-0 mb-4 md:mb-0  w-40 md:w-40 justify-center cursor-pointer  text-white bg-sky-500 transition-all ease-in-out duration-200"
            >
              Choose Photo
            </label>
          </div>
          <div className="mt-0  text-center w-[44rem] mx-auto  sm:w-full md:w-[38rem]   ">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={PersonalInfoSchema}
              onSubmit={(values) => {
                handleSubmit(values);
                // navigate("/edutips");
              }}
            >
              {({ values, setFieldValue }) => (
                <Form className="mt-[0rem]" id="personalinfoID">
                  <div className="flex relative justify-normal md:justify-normal text-left ml-16 md:ml-0">
                    <div className="flex  flex-col mx-0 md:mx-1 pr-1 ">
                      <label htmlFor="FullName">Full Name</label>
                      <div className="flex  items-start">
                        <Field
                          type="text"
                          name="FullName"
                          de
                          placeholder="John Doe"
                          value={values.FullName}
                          onChange={(e) => {
                            setFieldValue("FullName", e.target.value);
                            dispatch(
                              updatePersonalInfo({ FullName: e.target.value })
                            );
                          }}
                          className="w-[34.5rem]   sm:w-[40.5rem] md:w-[35.8rem]  rounded-l-md  outline-none  mb-3 p-[0.4rem]"
                        />
                        {/* <span className=" rounded-r-md   w-fit ">
                          <span className=" cursor-pointer ">
                            <img
                              src={idea}
                              width={20}
                              height={20}
                              alt=""
                              onMouseEnter={() => setShowSuggestions(true)}
                              onMouseLeave={() => setShowSuggestions(false)}
                            />
                          </span>
                        </span> */}
                      </div>

                      <ErrorMessage
                        name="FullName"
                        component="div"
                        className="error-message text-red-500"
                      />
                    </div>
                    {/* {showSuggestions && (
                      <div className="absolute mt-1 p-0.5 bg-white border right-3  -top-4 rounded shadow-md">
                       

                        <div className="text-sm hover:bg-gray-200 p-1 rounded">
                          e.g "John Doe"
                        </div>
                      </div>
                    )} */}
                  </div>

                  <div className="flex relative flex-col text-left ml-16 sm:ml-16 md:ml-0  mt-2 ">
                    <label htmlFor="profession">Profession</label>
                    <div className="flex item-center">
                      <Field
                        type="text"
                        name="profession"
                        placeholder="Software Developer"
                        value={values.profession}
                        onChange={(e) => {
                          setFieldValue("profession", e.target.value);
                          dispatch(
                            updatePersonalInfo({ profession: e.target.value })
                          );
                        }}
                        className="w-[34.5rem]  sm:w-[40.5rem] md:w-[35.8rem] rounded-md outline-none mb-3 p-[0.4rem]"
                      />
                      {/* <span className=" rounded-r-md   w-fit ">
                        <span className=" cursor-pointer ">
                          <img
                            src={idea}
                            width={20}
                            height={20}
                            alt=""
                            onMouseEnter={() => setshowprofession(true)}
                            onMouseLeave={() => setshowprofession(false)}
                          />
                        </span>
                      </span> */}
                    </div>

                    <ErrorMessage
                      name="profession"
                      component="div"
                      className="error-message text-red-500"
                    />
                    {/* {showprofession && (
                      <div className="absolute mt-1 p-0.5 bg-white border right-3 z-50  -top-4 rounded shadow-md">
                       

                        <div className="text-xs hover:bg-gray-200 p-1 rounded">
                          e.g "Business Manager , Software engineer"
                        </div>
                      </div>
                    )} */}
                  </div>
                  <div className="flex relative flex-col text-left ml-16 sm:ml-16 md:ml-0  mt-2 ">
                    <label htmlFor="country">Summary (min 200 words)</label>
                    <div className="flex">
                      <textarea
                       minLength={200}
                        maxLength={400}
                        type="text"
                        name="summary"
                        placeholder="Dedicated and results-driven professional with a proven track record in marketing and project management...."
                        value={values.summary}
                        onChange={(e) => {
                          setFieldValue("summary", e.target.value);
                          dispatch(
                            updatePersonalInfo({ summary: e.target.value })
                          );
                        }}
                        className="w-[34.5rem]  sm:w-[40.5rem] md:w-[35.8rem]  outline-none rounded-md mb-3 p-[0.4rem]"
                      />
                      {/* <span className=" rounded-r-md   w-fit ">
                        <span className=" cursor-pointer ">
                          <img
                            src={idea}
                            width={20}
                            height={20}
                            alt=""
                            onMouseEnter={() => setShowDescription(true)}
                            onMouseLeave={() => setShowDescription(false)}
                          />
                        </span>
                      </span> */}
                    </div>
                    {/* {showDescription && (
                      <div className="absolute mt-1 p-0.5 bg-white border right-3 z-50  -top-4 rounded shadow-md">
                        

                        <div className="text-xs hover:bg-gray-200 p-1 rounded">
                          A good Summary should be between 200 to 400 words
                        </div>
                      </div>
                    )} */}
                  </div>

                  <div className="flex pt-2 relative justify-normal ml-16 sm:ml-16 md:ml-0 md:justify-normal   text-left ">
                    <div className="flex flex-col pr-3 ">
                      <label htmlFor="city">City, Country</label>
                      <div className="flex">
                        <Field
                          type="text"
                          name="city"
                          placeholder="Mumbai, India"
                          value={values.city}
                          onChange={(e) => {
                            setFieldValue("city", e.target.value);
                            dispatch(
                              updatePersonalInfo({ city: e.target.value })
                            );
                          }}
                          className="w-[34.5rem] sm:w-[40.5rem] md:w-[35.8rem]  outline-none rounded-md mb-3 p-[0.4rem]"
                        />
                        {/* <span className=" rounded-r-md   w-fit ">
                          <span className=" cursor-pointer ">
                            <img
                              src={idea}
                              width={20}
                              height={20}
                              alt=""
                              onMouseEnter={() => setShowCountry(true)}
                              onMouseLeave={() => setShowCountry(false)}
                            />
                          </span>
                        </span> */}
                      </div>

                      <ErrorMessage
                        name="city"
                        component="div"
                        className="error-message text-red-500"
                      />
                      {/* {showCountry && (
                        <div className="absolute mt-1 p-0.5 bg-white border right-3 z-50  -top-4 rounded shadow-md">
                          

                          <div className="text-xs hover:bg-gray-200 p-1 rounded">
                            e.g "New York,USA"
                          </div>
                        </div>
                      )} */}
                    </div>
                    {/* Country */}

                    {/* PinCode */}
                  </div>

                  <div className="flex pt-2  justify-normal ml-16 md:ml-0 md:justify-normal text-left  ">
                    <div className="flex relative flex-col pr-3  ">
                      <label htmlFor="phoneNumber">Mobile No</label>
                      <div className="flex">
                        <Field
                          type="tel"
                          name="phoneNumber"
                          maxLength={10}
                          placeholder="91456-78902"
                          value={values.phoneNumber}
                          onKeyPress={isNumberKey}
                          onChange={(e) => {
                            setFieldValue("phoneNumber", e.target.value);
                            dispatch(
                              updatePersonalInfo({
                                phoneNumber: e.target.value,
                              })
                            );
                          }}
                          className="w-[15.9rem]  sm:w-[20rem] md:w-[17rem] outline-none rounded-mdw mb-3 p-[0.4rem]"
                        />
                        {/* <span className=" rounded-r-md   w-fit ">
                          <span className=" cursor-pointer ">
                            <img
                              src={idea}
                              width={20}
                              height={20}
                              alt=""
                              onMouseEnter={() => setShowMobileNo(true)}
                              onMouseLeave={() => setShowMobileNo(false)}
                            />
                          </span>
                        </span> */}
                      </div>

                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="error-message text-red-500"
                      />
                      {/* {showMobileNo && (
                        <div className="absolute mt-1 p-0.5 bg-white border right-3 z-50  -top-4 rounded shadow-md">
                        

                          <div className="text-xs hover:bg-gray-200 p-1 rounded">
                            e.g "9999999999"
                          </div>
                        </div>
                      )} */}
                    </div>
                    {/* Email */}
                    <div className="flex relative flex-col ">
                      <label htmlFor="email">Email</label>
                      <div className="flex">
                        <Field
                          type="email"
                          name="email"
                          placeholder="john.doe@email.com"
                          value={values.email}
                          onChange={(e) => {
                            setFieldValue("email", e.target.value);
                            dispatch(
                              updatePersonalInfo({ email: e.target.value })
                            );
                          }}
                          className="w-[18rem] sm:w-[20rem]  md:w-[16.5rem] outline-none rounded-md mb-3 p-[0.4rem]"
                        />
                        {/* <span className=" rounded-r-md   w-fit ">
                          <span className=" cursor-pointer ">
                            <img
                              src={idea}
                              width={20}
                              height={20}
                              alt=""
                              onMouseEnter={() => setShowEmail(true)}
                              onMouseLeave={() => setShowEmail(false)}
                            />
                          </span>
                        </span> */}
                      </div>

                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-message text-red-500 p-0"
                      />
                      {/* {showEmail && (
                        <div className="absolute mt-1 p-0.5 bg-white border right-3 z-50  -top-4 rounded shadow-md">
                          

                          <div className="text-xs hover:bg-gray-200 p-1 rounded">
                            e.g "abcd@gmail.com"
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div className="flex mt-4 mb-4 w-[35rem] mx-auto sm:w-full  justify-between sm:justify-around text-right ">
                    <div>
                      <button
                        onClick={() => navigate(-1)}
                        className=" mt-1 mb-9  text-sm font-semibold p-2 px-3 rounded-r-full rounded-l-full transition-all ease-in-out duration-200
                      border-black border-2 "
                        type="button"
                      >
                        Back
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="p-2 mt-1 mb-9 m-2 text-sm  rounded-r-full rounded-l-full text-white bg-sky-500 border-double border-2 
                    font-semibold"
                      >
                        {fromPreview != null
                          ? "Save Changes"
                          : "Next : Work Experience"}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex flex-col justify-center items-center h-screen md:h-auto ">
            <ResumeTemoImg />
          </div>
          {/* resume preview */}
        </div>
      </div>
    </div>
  );
};

export default Personalinfo;
