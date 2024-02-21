import React, { useEffect } from "react";

import ResumePreview from "../ResumeForm/ResumePreview/ResumePreview";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkExp } from "../../actions/workExperienceAction";
import ResumeTemoImg from "../../component/resume/ResumeTemoImg";

const Worktips = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  let id = new URLSearchParams(location.search).get("profile");
  const list = useSelector((state) => state?.workHistory?.list?.data);

  useEffect(() => {
    dispatch(getAllWorkExp(id));
  }, []);

  const handleSubmit = () => {
    if (list?.length !== 0) {
      navigate(`/work-history?profile=${id}`);
    } else {
      navigate(`/workexp?profile=${id}`);
    }
  };
  return (
    <div className="min-h-screen w-[54rem] sm:w-full bg-gray-100">
      <div className="main flex w-[54rem] bg-gray-100 sm:w-full justify-evenly items-start flex-col md:flex-row md:justify-center md:gap-x-52 md:pt-20  p-4">
        <div className="left mx-auto md:mx-0 text-left md: mt-10 ">
          <h2 className=" text-2xl text-center md:text-left font-light mb-8 text-sky-500">
            Now, let’s fill out your work history
          </h2>
          <p className="font-bold text-lg text-center md:text-left">
            Here’s what you need to know:
          </p>
          <p className=" text-base  font-light  text-center md:text-start">
            Employers scan your resume to see if you're a match.
            <br />
            We'll suggest bullet points that make a great impression.
          </p>
        </div>
        <div className="flex justify-center mt-12 md:mt-0 mx-auto md:mx-0  items-center ">
          <ResumeTemoImg />
        </div>
      </div>
      <div className=" flex  bg-gray-100 h-screen   w-[54rem] sm:w-full justify-evenly sm:justify-around text-right ">
      <div>

        <button
          onClick={() => navigate(`/personal-info?profile=${id}`)}
          className="p-2 mt-1 mb-9 m-2 px-4 text-base rounded-md transition-all ease-in-out duration-20 rounded-r-full rounded-l-full border-black  border-2 font-light"
        >
          Back
        </button>
      </div>
      <div>

        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="p-2 mt-1 mb-9 m-2 text-base rounded-md text-white bg-sky-500 rounded-r-full rounded-l-full border-double border-2 font-light"
        >
          Next:Work Experience
        </button>
      </div>
      </div>
    </div>
  );
};

export default Worktips;
