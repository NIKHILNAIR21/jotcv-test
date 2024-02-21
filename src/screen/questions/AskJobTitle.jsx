import React from "react";
import { useNavigate } from "react-router-dom";
const AskJobTitle = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col my-10 w-[33rem] justify-center md:w-full mx-[5rem] md:mx-0 sm:mx-4 mb-[25rem] sm:ml-[9rem]  sm:mb-[15rem] ">
        <h2 className="text-blue-500 text-3xl  text-center font-light">
          How do you want to start?
        </h2>
        <p className="text-base text-center font-light">
          We'll show you a personalized experience based on your response.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 mb-16 ">
          <div
            className="left text-center md:mx-3 hover:bg-blue-500/10  mx-0 mt-3 p-6 w-[26rem] md:w-[18rem] border-2 border-blue-500 flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/worktips")}
          >
            <h3 className="uppercase text-base text-blue-500">job seeking</h3>
          </div>
          <div
            className="right text-center  cursor-pointer md:mx-3  hover:bg-blue-500/10 mx-0 mt-3 w-[26rem] md:w-[18rem] border-blue-500 p-6 border-2 flex flex-col items-center justify-center"
            onClick={() => navigate("/worktips")}
          >
            <label htmlFor="fileInput" className="cursor-pointer">
              <h3 className="uppercase text-base text-blue-500">
                a different reason
              </h3>
            </label>
          </div>
        </div>
        <div className=" flex justify-evenly text-center my-3">
          <button
            className="p-2 mt-1 mb-9 m-2 text-xl rounded-md transition-all ease-in-out duration-200 hover:text-white hover:bg-red-500 border-red-500 border-2 font-light"
            onClick={() => navigate("/education")}
          >
            BACK
          </button>
          <button
            className="p-2 mt-1 mb-9 m-2 text-xl rounded-md text-white bg-blue-500 border-double border-2 font-light"
            onClick={() => navigate("/worktips")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskJobTitle;
