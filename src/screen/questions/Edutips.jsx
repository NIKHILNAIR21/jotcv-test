import React, { useEffect } from "react";
import ResumePreview from "../ResumeForm/ResumePreview/ResumePreview";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllEducation } from "../../actions/educationAction";
import ResumeTemoImg from "../../component/resume/ResumeTemoImg";

const Edutips = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  let id = new URLSearchParams(location.search).get("profile");

  const list = useSelector((state) => state?.eduHistory?.list?.data);

  useEffect(() => {
    dispatch(getAllEducation(id));
  }, []);
  const handleSubmit = () => {
    if (list?.length !== 0) {
      navigate(`/education-history?profile=${id}`);
    } else {
      navigate(`/education?profile=${id}`);
    }
  };
  return (
    <div className=" bg-gray-100 min-h-screen w-[54rem] sm:w-full">
      <div className="main flex w-[54rem] sm:w-full justify-evenly items-start flex-col md:flex-row mt-0 p-4">
        <div className="left mx-auto   md: mt-10  ">
          <h2 className="text-2xl text-center md:text-left font-light mb-8 text-sky-500">
            Great, let’s work on your education
          </h2>
          <p className="font-bold text-lg text-center md:text-left">
            Here’s what you need to know:
          </p>
          <p className=" text-base  font-light  text-center md:text-start">
            Employers quickly scan the education section.
            <br /> We’ll take care of the formatting so it’s easy to find.
          </p>
        </div>
        <div className="flex justify-center mt-12 md:mt-0 mx-auto items-center ">
          <ResumeTemoImg />
        </div>
      </div>
      <div className=" flex mt-28 sm:mt-14 md:mt-10 mb-52 sm:mb-28 w-[44rem] sm:w-full mx-auto h-screen sm:h-0  justify-evenly sm:justify-around text-right ">
        <div>
          <button
            onClick={() => navigate(`/work-history?profile=${id}`)}
            className="p-2 mt-1 mb-9 m-2 px-4 text-base rounded-md transition-all ease-in-out duration-20 rounded-r-full rounded-l-full border-black  border-2 font-light"
          >
            Back
          </button>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => handleSubmit()}
            className="p-2 mt-1 mb-9 m-2 text-base rounded-md text-white bg-sky-500 rounded-r-full rounded-l-full border-double border-2 font-light"
          >
            Next:Education
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edutips;
