import React from "react";
import Choose from "../assets/choose.png";
const AboutCard = ({ img, heading, subtext }) => {
  return (
    <div className="w-[370px] h-[384px] rounded-xl  border bg-white  drop-shadow-2xl">
      <div className="py-[40px] px-[30px]">
        <img className="mb-[30px]  mx-auto" src={img} alt="about-icon" />
        <div className="">
          <h2 className="font-poppins font-bold text-xl text-center" >{heading}</h2>
          <p className="font-poppins text-gray-600 font-normal text-center text-[15px]">
            {subtext}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
