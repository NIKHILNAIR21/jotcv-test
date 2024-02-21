import React from "react";
import point from "../../../assets/points.png";
import benifit from "../../../assets/benifit.png";
import { Slide, Fade } from "react-awesome-reveal";
const BenifitSection = ({ points }) => {
  return (
    <div className="flex justify-evenly flex-wrap">
      <div>
        <Fade direction="up" fraction={0.7} className="transition-all">
          <h2 className="font-poppins font-semibold text-[40px] text-center md:text-justify md:text-[50px]">
            What Benefit Will <br /> You Get
          </h2>
        </Fade>

        {points.map((items, index) => (
          <Fade
            duration={2000}
            fraction={1}
            direction="right"
          
            delay={(index + 1) * 2000}
            className="transition-all my-2.5"
          >
            <p className="text-base flex gap-2 p-1.5">
              <img className=" w-6 h-6" src={point} alt="" />
              {items}
            </p>
          </Fade>
        ))}
      </div>
      <div>
        <img
          className="w-[80%] md:w-full mx-auto p-3 md:p-0"
          src={benifit}
          alt=""
        />
      </div>
    </div>
  );
};

export default BenifitSection;
