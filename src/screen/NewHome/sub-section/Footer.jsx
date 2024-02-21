import React from "react";
import images from "../../../images";
import { Link } from "react-router-dom";
// import Logo from "../../../assets/newlogo.png";
import play from "../../../assets/playstore.webp";
import logo from "../../../assets/fotter_logo.png";

import fb from "../../../assets/fb.png";
import linkedin from "../../../assets/linkedin.png";
import insta from "../../../assets/insta.png";
const Footer = ({ onLoginClick }) => {
  return (
    <footer>
      <main
        className=" p-5 flex flex-wrap gap-10 w-full font-poppins bg-[#0064FF] py-14  justify-around
        "
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <img className=" w-[150px] " src={logo} alt="jotcv logo" />
          </div>

          <div className="flex mt-4  ">
            <a
              href="https://play.google.com/store/apps/details?id=com.resume_build"
              target="_blank"
            >
              <img className="w-40" src={play} alt="playstore link" />
            </a>
          </div>

          <div className="flex gap-3  pt-3">
            <a
              href="https://www.facebook.com/jotcv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-10" src={fb} alt="facebook-profile" />
            </a>
            <a
              href="https://www.instagram.com/jotcv.india/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-10" src={insta} alt="instagram-profile" />
            </a>
            <a
              href="https://www.linkedin.com/company/jotcv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-10" src={linkedin} alt="linkedin-profile" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center  gap-20">
          <div>
            <h2 className="text-lg font-poppins font-semibold text-white">Job Seekers</h2>
            <div>
              <p
                className="text-sm py-2 font-poppins text-gray-100 cursor-pointer"
                onClick={onLoginClick}
              >
                Create a Resume{" "}
              </p>
              <p
                onClick={onLoginClick}
                className="text-sm py-2 font-poppins text-gray-100 cursor-pointer"
              >
                Resume Examples
              </p>
              <Link to="/our-templates">
                <p className="text-sm py-2 font-poppins text-gray-100 cursor-pointer">
                  Resume Templates
                </p>
              </Link>

              <p
                onClick={onLoginClick}
                className="text-sm py-2 font-poppins text-gray-100 cursor-pointer"
              >
                Cover Letter Templates
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-poppins font-semibold text-white">Career Resources</h2>
            <div>
              <p
                onClick={onLoginClick}
                className="text-sm py-2 font-poppins text-gray-100 cursor-pointer"
              >
                Resume Help{" "}
              </p>
              <p
                onClick={onLoginClick}
                className="text-sm py-2 font-poppins text-gray-100 cursor-pointer"
              >
                Job Interview
              </p>
              <Link
                to="https://www.linkedin.com/company/buildairesume/"
                target="_blank"
              >
                <p className="text-sm py-2 text-gray-100">Career</p>
              </Link>
              <p className="text-sm py-2 text-gray-100">
                <Link to="https://blog.resumebuild.in/" target="_blank">
                  Blog
                </Link>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-poppins font-semibold text-white">Company</h2>
            <div>
              <Link to="/about-us">
                <p className="text-sm py-2  font-poppins text-gray-100">
                  About Us{" "}
                </p>
              </Link>
              <Link to="/pricing-plans">
                <p className="text-sm py-2 font-poppins text-gray-100">
                  Pricing
                </p>
              </Link>

              <p
                onClick={onLoginClick}
                className="text-sm font-poppins  py-2 text-gray-100"
              >
                Product Updates
              </p>
              <p
                onClick={onLoginClick}
                className="text-sm font-poppins  py-2 text-gray-100"
              >
                Review
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-poppins font-semibold text-white">Support</h2>
            <div>
              <Link to="/contact-us">
                <p className="text-sm py-2 font-poppins text-gray-100">
                  Contact Us
                </p>
              </Link>
              <Link to="/terms-and-conditions">
                <p className="text-sm py-2 font-poppins text-gray-100">
                  Term & Conditions
                </p>
              </Link>
              <Link to="privacy-policy">
                <p className="text-sm py-2 font-poppins text-gray-100">
                  Privacy Policy
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
