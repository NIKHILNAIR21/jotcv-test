import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setExp } from "../../slice/askExpSlice";
const AskExp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = (experience) => {
    dispatch(setExp(experience));
    navigate("/templates");
  };
  return (
    <div className="flex flex-col justify-center  items-center w-[44rem] sm:w-full text-center">
      <h1 className="text-blue-500 text-3xl font-light">
        What's your Experience ?
      </h1>
      <div className="flex flex-wrap mt-14 justify-evenly w-[60%] items-center mb-[10.5rem]">
        <p className="p-4 border-2 border-blue-600 text-xl m-6 hover:bg-blue-700 hover:text-white
         transition-all duration-150 delay-75" onClick={()=>handleNavigate("Fresher")}>
          Fresher
        </p>
        <p className="p-4 border-2 border-blue-600 text-xl m-6 hover:bg-blue-700 hover:text-white
         transition-all duration-150 delay-75" onClick={()=>handleNavigate("0-3")}>
          0-3 years</p>
        <p className="p-4 border-2 border-blue-600 text-xl m-6 hover:bg-blue-700 hover:text-white
         transition-all duration-150 delay-75" onClick={()=>handleNavigate("3-5")}>
          3-5 years
        </p>
        <p className="p-4 border-2 border-blue-600 text-xl m-6 hover:bg-blue-700 hover:text-white
         transition-all duration-150 delay-75" onClick={()=>handleNavigate("5-10")}>
          5-10 years+
        </p>
      </div>
    </div>
  );
};

export default AskExp;
