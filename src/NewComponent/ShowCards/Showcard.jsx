import React from "react";
import bullet from "../../assets/bullet.png";

const Showcard = ({ heading, img, bulletpt, bg }) => {
  const gradientStyle = {
    background: `linear-gradient(to bottom, #${bg} 10%, transparent)`,
  };
  return (
    <div>
      <div
        className={`w-[230px] sm:w-[400px] relative  flex flex-col  justify-start  h-[290px] sm:h-[440px] border rounded-[20px] drop-shadow-xl  bg-size-10`}
      style={gradientStyle}
      >
        <h1 className="text-xs sm:text-lg p-6 font-poppins pb-3 font-semibold w-[80%]">
          {heading}
        </h1>
    
          <span
            className="flex gap-3 p-6 font-poppins justify-start items-start py-2 text-[10.4px] sm:text-[15.4px] font-light"
           
          >
            {bulletpt}
          </span>
    
        <img className="absolute w-[85%] right-0 bottom-0 " src={img} alt="" />
      </div>
    </div>
  );
};

export default Showcard;
