import React, { useState } from "react";
import Logo from "../../assets/newlogo.png";
import { Link } from "react-router-dom";
import Login from "../../assets/login.webp";

const NavBar = ({ onLoginClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="">
        <div className="main  hidden md:flex justify-evenly relative z-50  w-full bg-white  rounded-xl  ">
          <div className="flex items-center justify-between p-0.5 xl:px-32  lg:w-full ">
            <div className="  ">
              <Link to="/">
                <img
                  className=" w-[60px] md:w-[150px] mt-2"
                  src={Logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex gap-10">
              {/* <Link to="/">
                <div className="cursor-pointer   text-[12px] lg:text-base font-semibold font-poppins text-slate-600 transition ease-in-out duration-200 delay-200 hover:text-sky-500">
                  Home
                </div>
              </Link> */}
              <Link to="/about-us">
                <div className="cursor-pointer   text-[12px] lg:text-base font-semibold font-poppins text-slate-600 transition ease-in-out duration-200 delay-200 hover:text-sky-500">
                  About Us
                </div>
              </Link>
              <Link to="/pricing-plans">
                <div className="cursor-pointer    text-[12px] lg:text-base font-semibold font-poppins text-slate-600 transition ease-in-out duration-200 delay-200 hover:text-sky-500">
                  Pricing
                </div>
              </Link>
              <Link to="/our-templates">
                <div className="cursor-pointer   text-[12px] lg:text-base font-semibold font-poppins text-slate-600 transition ease-in-out duration-200 delay-200 hover:text-sky-500">
                  Templates
                </div>
              </Link>
              <Link to="/company-list">
                <div className="cursor-pointer  text-[12px] lg:text-base font-semibold font-poppins text-slate-600 transition ease-in-out duration-200 delay-200 hover:text-sky-500">
                  Jobs
                </div>
              </Link>
              <div className="cursur-pointer   text-[12px] lg:text-base font-semibold font-poppins text-slate-600 transition ease-in-out duration-200 delay-200 hover:text-sky-500">
                <a
                  href="https://www.linkedin.com/company/buildairesume/jobs/"
                  target="_blank"
                >
                  {" "}
                  Careers
                </a>
              </div>
              <div className="cursor-pointer  text-[12px] lg:text-base font-semibold font-poppins text-slate-600 transition ease-in-out duration-200 delay-200 hover:text-sky-500">
                <a href="https://blog.jotcv.com" target="_blank">
                  Blogs
                </a>
              </div>
            </div>

            <div
              className="cursor-pointer hover:bg-blue-300 hover:text-white  transition-all flex gap-2 p-2 md:px-10 lg:px-5 items-center font-poppins  text-xs md:text-sm lg:text-lg text-sky-500 font-semibold border-2 border-sky-500
             rounded-r-full rounded-l-full"
              onClick={onLoginClick}
            >
              Log in <img className=" w-[12px] lg:w-[16px] lg:h-[15px]" src={Login} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}

      <div className="main md:hidden z-50 relative w-[27rem]  flex justify-between items-center sm:w-full p-5 mx-auto">
        <div className="w-[60%] flex justify-start">
          <Link to="/">
            <img className="w-[140px]" src={Logo} alt="" />
          </Link>
        </div>
        <div
          className="w-[25%] p-2 flex flex-col justify-end items-end"
          onClick={toggleMobileMenu}
        >
          <span className="w-5 h-[3.5px] my-[1.5px] bg-black"></span>
          <span className="w-5 h-[3.5px] my-[1.5px] bg-black"></span>
          <span className="w-5 h-[3.5px] my-[1.5px] bg-black"></span>
        </div>
      </div>
      {/* mob-nav */}
      {isMobileMenuOpen && (
        <div className="flex z-50 absolute bg-blue-500/90  md:hidden  animate-fade-down animate-once animate-duration-500 animate-delay-100 animate-ease-in-out  border-sky-500 flex-col w-[27rem] mx-auto  shadow-2xl items-start py-2 px-4">
          <Link to="/about-us">
            <div
              onClick={toggleMobileMenu}
              className="cursor-pointer py-0.5 text-white px-1 sm:px-9  text-[19px] lg:text-base font-semibold font-sans  transition ease-in-out duration-200 delay-200 hover:text-sky-500"
            >
              About us
            </div>
          </Link>
          <Link to="/jobs-list">
            <div className="cursor-pointer py-0.5 text-white  px-1 sm:px-9  text-[19px] lg:text-base font-semibold font-sans  transition ease-in-out duration-200 delay-200 hover:text-sky-500">
              Jobs
            </div>
          </Link>
          <Link to="/pricing-plans">
            <div className="cursor-pointer py-0.5 text-white px-1 sm:px-9  text-[19px] lg:text-base font-semibold font-sans  transition ease-in-out duration-200 delay-200 hover:text-sky-500">
              Pricing
            </div>
          </Link>
          <Link to="/our-templates">
            <div className="cursor-pointer py-0.5 text-white  px-1 sm:px-9  text-[19px] lg:text-base font-semibold font-sans  transition ease-in-out duration-200 delay-200 hover:text-sky-500">
              Templates
            </div>
          </Link>
          <div
            onClick={toggleMobileMenu}
            className="cursur-pointer py-0.5 text-white px-1 sm:px-9  text-[19px] lg:text-base font-semibold font-sans  transition ease-in-out duration-200 delay-200 hover:text-sky-500"
          >
            <a href="https://www.linkedin.com/company/jobspri/" target="_blank">
              {" "}
              careers
            </a>
          </div>
          <div className="cursor-pointer text-white py-0.5 px-1   sm:px-9 text-[19px] lg:text-base font-semibold font-sans transition ease-in-out duration-200 delay-200 hover:text-sky-500">
            <a href="https://blog.jotcv.com" target="_blank">
              Blogs
            </a>
          </div>
          <div
            onClick={() => {
              toggleMobileMenu();
              onLoginClick();
            }}
            className="cursor-pointer  px-2 sm:px-6 py-2.5 text-base lg:text-lg font-semibold bg-sky-500 text-white rounded-md"
          >
            Log in
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
