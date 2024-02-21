import React from "react";
import ResumePreview from "../ResumeForm/ResumePreview/ResumePreview";
import { useLocation, useNavigate } from "react-router-dom";
import ResumeTemoImg from "../../component/resume/ResumeTemoImg";
const AskSkills = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let id = new URLSearchParams(location.search).get("profile");
  const handleSubmit = () => {
    navigate(`/skill?profile=${id}`);
  };
  return (
    <div className="bg-gray-100 w-[54rem] md:w-full min-h-screen">
      <div className="main flex w-[44rem] mx-auto sm:w-full justify-evenly items-start flex-col md:flex-row mt-0 p-4">
        <div className="left  mx-auto   md: mt-10   ">
          <h2 className=" text-2xl text-center md:text-left font-light mb-8 text-sky-500">
            Next, let’s take care of your skills
          </h2>
          <p className="font-bold text-lg text-center md:text-left">
            Here’s what you need to know:
          </p>
          <p className=" text-base  font-light  text-center md:text-start">
            Employers scan skills for relevant keywords.
            <br />
            We’ll help you choose the best ones.
          </p>
        </div>
        <div className="flex mt-12 sm:mt-0 justify-center mx-auto items-center ">
          <ResumeTemoImg />
        </div>
      </div>
      <div className=" flex mt-28 sm:mt-14 md:mt-10 mb-52 sm:mb-28 w-[54rem] sm:w-full h-screen sm:h-0  justify-evenly sm:justify-around text-right ">
        <div>
          <button
            onClick={() => navigate(`/education-history?profile=${id}`)}
            className="p-2 mt-1 mb-9 m-2 text-base rounded-md transition-all ease-in-out duration-200
       border-black border-2 font-light rounded-r-full rounded-l-full"
          >
            BACK
          </button>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => handleSubmit()}
            className="p-2 mt-1 mb-9 m-2 text-base rounded-md text-white bg-sky-500 rounded-r-full rounded-l-full
           border-double border-2 font-light"
          >
            Next:Skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskSkills;
