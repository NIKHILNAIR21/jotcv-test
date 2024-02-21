import React from "react";
import { Fade} from "react-awesome-reveal";
const CommonSection = ({ heading, subPara, img, bg, reverse, login }) => {
  const dynamicBackgroundColor = { backgroundColor: bg };
  return (
    <div
      className={
        reverse
          ? `flex flex-row-reverse flex-wrap justify-evenly items-center p-7`
          : `flex  flex-wrap justify-evenly items-center p-7`
      }
      style={dynamicBackgroundColor}
    >
      <div className="flex flex-col items-center md:items-start">
        <Fade
          fraction={0.5}
          direction="down"
          duration={1200}
          className="transition-all delay-75 "
          onVisibilityChange={true}
        >
          <h2 className="text-[40px] text-center sm:text-left md:text-[60px] font-bold py-4 font-poppins">
            {heading}
          </h2>{" "}
        </Fade>
        <p className="font-poppins py-2 w-[27rem] md:w-[673px] text-[#5A5A5A] text-[18px] text-center sm:text-justify    md:text-[22px]">
          {subPara}
        </p>
        <Fade
          fraction={0.5}
          direction="up"
          duration={1200}
          className="transition-all delay-100 "
        >
          <button
            onClick={() => login()}
            className="p-2.5 mt-2 hover:bg-blue-600 bg-blue-200 hover:text-white w-fit hover:border-white transition-all delay-100 hover:scale-105 text-center  border-[1px] border-black rounded-full"
          >
            Get Started!
          </button>
        </Fade>
      </div>
      <Fade
          fraction={0}
          direction="up"
          duration={1200}
          className="transition-all delay-0 scale-90 "
        >
      <div>
        <img className="w-96" src={img} alt="" />
      </div>
      </Fade>
    </div>
  );
};

export default CommonSection;
