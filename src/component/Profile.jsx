import { ErrorMessage, Formik, useFormik } from "formik";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { getProfileData, getProfileUpdate } from "../services/ApiServices";
import { setProfileData } from "../slice/userDetail";
import showNotification from "../services/NotificationService";
import NoImg from "../assets/NoImage.jpg";
import { isNumberKey } from "../constant";

function Profile() {
  const { profileData } = useSelector((state) => state.userDetail);
  const [profilePic, setProfilePic] = useState(null);
  const { profile_picture } = profileData;
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    fname: profileData?.first_name,
    lname: profileData?.last_name,
    designation: profileData?.designation,
    phoneNumber: profileData?.mobile_no,
    dob: profileData?.dob,
    gender: profileData?.gender,
  });
  const PersonalInfoSchema = Yup.object().shape({
    fname: Yup.string()
      .max(15, "Max 15 character or less")
      .required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    dob: Yup.string().required("DOB is required"),
    gender: Yup.string().required("Gender is required"),
    designation: Yup.string().required("Profession is required"),
    phoneNumber: Yup.string()
      .min(10, "minimum 10 digit number")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: profile,
    validationSchema: PersonalInfoSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    let formData = new FormData();
    formData.append("first_name", values.fname);
    formData.append("last_name", values.lname);
    formData.append("designation", values.designation);
    formData.append("gender", values.gender);
    formData.append("mobile_no", values.phoneNumber);
    formData.append("dob", values.dob);
    {
      profilePic !== null && formData.append("profile_picture", profilePic);
    }

    try {
      let response = await getProfileUpdate(formData);
      if (response?.status == 200) {
        showNotification("success", "Profile updated successfully");
        getUserProfileData();
      }
    } catch (error) {}
  };

  const getUserProfileData = async () => {
    try {
      let response = await getProfileData();
      if (response?.status == 200) {
        dispatch(setProfileData(response.data));
      }
    } catch (error) {}
  };



  return (
    <>
      {" "}
      <div className="main container w-[44rem] sm:w-full mx-auto  mt-8 mb-4">
        {/*     @if (session('alert'))
  <p>{{ session('alert') }}</p>
  @endif */}
        <h1 className="text-2xl text-center font-bold text-gray-700 mx-auto md:px-0">
          Your Profile
        </h1>

        {/* @csrf */}
        <div className=" w-[44rem] sm:w-full bg-white rounded-lg mx-auto mt-8 flex flex-col md:flex-row justify-center items-center overflow-hidden rounded-b-none">
          <div className="w-[20rem] mb-[3.6rem] md:w-[29rem] bg-gray-100 p-8  ">
            <div className="py-2 px-6 md:px-14 clearfix flex flex-col justify-center items-center">
              {profile_picture != null || !profilePic != null ? (
                <img
                  className="rounded-full w-20 h-20 border-4 mt-2 border-gray-200 float-left"
                  id="photo"
                  src={
                    profilePic != null
                      ? URL?.createObjectURL(profilePic)
                      : profile_picture
                  }
                  alt="photo"
                />
              ) : (
                <img
                  className="rounded-full w-20 h-20 border-4 mt-2 border-gray-200 float-left"
                  id="photo"
                  src={NoImg}
                  alt="photo"
                />
              )}

              <div className="bg-gray-200 text-gray-500 text-xs mt-5 ml-3 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  name="photo"
                  onChange={(e) => setProfilePic(e.target.files[0])}
                  className="absolute inset-0 w-full h-full mr-3 opacity-0 cursor-pointer"
                />{" "}
                Change Photo
              </div>
            </div>
          </div>
          <form
            className="w-10/12  max-w-xxl ml-3 "
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="fname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fname}
                />
                {formik.touched.fname && formik.errors.fname ? (
                  <span className="error-message text-red-500 p-0">
                    {formik.errors.fname}
                  </span>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="lname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lname}
                />
                {formik.touched.lname && formik.errors.lname ? (
                  <span className="error-message text-red-500 p-0">
                    {formik.errors.lname}
                  </span>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Date of birth
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="date"
                  name="dob"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <span className="error-message text-red-500 p-0">
                    {formik.errors.dob}
                  </span>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <>
                  <label
                    htmlFor="countries"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Select an option
                  </label>
                  <select
                    name="gender"
                    id="countries"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gender}
                    className="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected="">Select</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Others</option>
                  </select>
                </>

                {formik.touched.gender && formik.errors.gender ? (
                  <span className="error-message text-red-500 p-0">
                    {formik.errors.gender}
                  </span>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Designation
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="designation"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.designation}
                />
                {formik.touched.designation && formik.errors.designation ? (
                  <span className="error-message text-red-500 p-0">
                    {formik.errors.designation}
                  </span>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onKeyPress={isNumberKey}
                  value={formik.values.phoneNumber}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <span className="error-message text-red-500 p-0">
                    {formik.errors.phoneNumber}
                  </span>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white text-sm font-medium px-6 py-2 rounded float-right uppercase cursor-pointer mb-3"
              defaultValue="Save"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
