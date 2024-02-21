import React from "react";
import quotes from "../../assets/Frame.svg";
const Reviewcard = ({ review,user }) => {
  return (
    <div className=" w-96 sm:w-[90%] h-80  px-6  scale-50 sm:scale-100 bg-gradient-to-b from-sky-200 p-2 to-yellow-50   rounded-3xl">
      <img className="w-8 h-8 py-1" src={quotes} alt="" />
      <p className="text-justify text-lg font-poppins sm:text-lg ">"{review}"</p>
      <p className="text-base  font-poppins font-semibold mt-1">-{user}</p>
    </div>
  );
};

export default Reviewcard;
