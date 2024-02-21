import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import close from "../../assets/close.png";
import login from "../../assets/login.png";
import Logo from "../../assets/newlogo.png";
import { getProfileData, googleLogin } from "../../services/ApiServices";
import { setSession } from "../../session";
import { setProfileData } from "../../slice/userDetail";

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firstlogin = useSelector(
    (state) => state?.userDetail?.profileData?.is_first_login
  );
  const modalStyle = isOpen
    ? "fixed inset-0 flex items-center  justify-center"
    : "hidden";
  const overlayStyle = isOpen
    ? "fixed inset-0 bg-blue-800 bg-opacity-50 z-[7000] backdrop-filter backdrop-blur"
    : "hidden";

  const closeModal = () => {
    onClose();
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const postData = new FormData();
      postData.append("access_token", credentialResponse.credential);
      const response = await googleLogin(postData);
      if (response.status === 200) {
        closeModal();
        navigate("/resumes");
        setSession(response?.data?.access);
        getUserProfileData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getUserProfileData = async () => {
    try {
      let response = await getProfileData();
      dispatch(setProfileData(response.data));
    } catch (error) {}
  };

  return (
    <div className={overlayStyle} onClick={closeModal}>
      <div className={modalStyle}>
        <div className="modal-content w-[30rem] h-[33rem] bg-white justify-start flex flex-col p-10 shadow-md rounded-l-xl">
          <div className="flex justify-between items-start around relative ">
            <div>
              <h2 className="text-3xl font-medium text-center mb-5 text-white">
                <img src={Logo} width="150px" alt="" />
              </h2>
            </div>
            <button onClick={closeModal} className=" md:hidden font-bold absolute right-0 top-0 ">
              <img src={close} alt="close button w-2" />
            </button>
            
          </div>
          <p className="text-2xl p-2 font-poppins mt-1 mb-3 text-[#1583FF] font-semibold">
            1 Click Away From Starting Your
            <br />
            <span className="text-[#1583FF] font-poppins">Career Journey</span>
          </p>
          <div className="points p-2 mt-1">
            <div className="pb-6">
              <h6 className="text-lg text-black font-poppins font-semibold ">
                Easy Signup
              </h6>
              <p className="text-base font-poppins font-medium">
                No extra info required, just one click and get started!
              </p>
            </div>
            <div className="">
              <h6 className="text-lg font-poppins font-semibold ">
                No Spams, we promise
              </h6>
              <p className="text-base  font-poppins font-medium">
                Don't worry we will not spam you with marketing emails
              </p>
            </div>
          </div>
          <div className="text-center p-2 mt-2">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
              text="continue_with"
              size="large"
              shape="square"
              theme="filled_blue"
            />
          </div>
        </div>
        <div className="relative">
        <button onClick={closeModal} className=" font-bold absolute right-5 top-6 ">
              <img src={close} alt="close button w-2" />
            </button>
          <img className="w-[30rem] h-[33rem] hidden sm:block" src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
