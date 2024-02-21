import React from "react";
import images from "../../../images";
import MoneyCard from "../../../NewComponent/MoneyCard/MoneyCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import temp2 from "../../../templates/novatemp-24/nova24.png";
import temp1 from "../../../templates/novatemp-17/nova17.png";
import temp27 from "../../../templates/novatemp-27/nova27.png";
import temp3 from "../../../templates/novatemp-29/nova29.webp";
import temp4 from "../../../templates/novatemp-12/nova12.png";
import temp5 from "../../../assets/fb.webp";
import temp6 from "../../../assets/google.webp";
import temp7 from "../../../assets/apple.webp";
import temp8 from "../../../assets/ICIIC.webp";
import temp9 from "../../../assets/axis.webp";
import temp10 from "../../../assets/axis-1.webp";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const styles = {
  container: {
    backgroundColor: "#f0f0f0",
  },
};

const Money = ({ LoginClick }) => {
  return (
    <div>
      <div className="bg-sky-50 p-3 font-poppins ">
        <div className="pb-7 text-center ">
          <h1 className="text-2xl md:text-4xl p-2 font-medium font-poppins">
            Explore Templates
          </h1>
          <p className="text-base font-poppins">
            Pick a resume template and build your resume in minutes!
          </p>
        </div>
        <div className="flex justify-center">
          <div className="p-4 transition-all hover:scale-105 delay-75">
            <img
              onClick={LoginClick}
              className="rounded-[18px]  shadow-md w-[550px] sm:w-[450px]  "
              src={temp5}
              alt=""
            />
          </div>

          <div className="p-4  transition-all hover:scale-105 delay-75">
            <img
              onClick={LoginClick}
              className="rounded-[18px]  shadow-md w-[550px] sm:w-[450px]  "
              src={temp7}
              alt=""
            />
          </div>
          <div className="p-4  transition-all hover:scale-105 delay-75">
            <img
              onClick={LoginClick}
              className="rounded-[18px]  shadow-md w-[550px] sm:w-[450px]  "
              src={temp2}
              alt=""
            />
          </div>
         
          
          <div className="p-4  transition-all hover:scale-105 delay-75">
            <img
              onClick={LoginClick}
              className="rounded-[18px]  shadow-md w-[550px] sm:w-[450px]  "
              src={temp9}
              alt=""
            />
          </div>
    
          <div className="p-4  transition-all hover:scale-105 delay-75">
            <img
              onClick={LoginClick}
              className="rounded-[18px]  shadow-md w-[550px] sm:w-[450px]  "
              src={temp10}
              alt=""
            />
          </div>
        </div>
        <div className="text-center m-2">
          <button
            onClick={LoginClick}
            className="bg-gradient-to-r from-sky-400 to-sky-600 rounded-l-full text-lg font-poppins rounded-r-full font-semibold p-2 px-5 text-white font-poppins"
          >
            Explore Templates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Money;
