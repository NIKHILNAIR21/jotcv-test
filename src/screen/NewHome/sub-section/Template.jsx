import React, { useState, useMemo, useCallback } from "react";
import { AVAILABLE_TEMPLATES } from "../../../constant";
import tempbg1 from "../../../assets/templatebg.png";
import tempbg2 from "../../../assets/tempbg-2.png";
import all from "../../../assets/alltemp.png";
import Footer from "./Footer";
const Template = ({ loginclick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showImg, setShowImg] = useState("");
  const renderTemplates = useCallback(() => {
    return AVAILABLE_TEMPLATES.map((item, index) => (
      <div
        key={index}
        className="resume-template relative scale-95 hover:scale-100 transition-all delay-75 cursor-pointer mt-10 w-[24rem] "
      >
        <img
          className=" drop-shadow-2xl  rounded-[16px] "
          src={item?.thumbnail}
          onClick={() => {
            setIsOpen(true);
            setShowImg(item?.thumbnail);
          }}
          alt="tempImg"
        />
      </div>
    ));
  }, [loginclick]);
  const memoizedTemplates = useMemo(renderTemplates, [renderTemplates]);
  return (
    <div className="w-[27rem] sm:w-full">
      <div className="flex justify-center relative">
        <img className="absolute left-0 top-0 -z-20" src={tempbg1} alt="" />
        <div className="block">
          <h1 className="text-3xl  font-semibold p-1 font-poppins text-center mt-10">
            Resume Templates
          </h1>
          <p className="text-base w-[70%] mx-auto font-poppins  p-3 text-center mt-1">
            Start by creating a resume using one of our free templates. Create a
            professional CV in minutes with our AI Features. Get a head start on
            crafting your CV today.
          </p>
          <ul className="flex justify-center gap-4">
            <li className="flex justify-center gap-1 p-2.5  cursor-pointer  font-poppins rounded-[16px]   border-2 items-center">
              <img src={all} alt="" />
              All Templates
            </li>
            <li className="flex justify-center gap-1 p-2.5 cursor-pointer  font-poppins rounded-[16px]  border-2 items-center">
              <img src={all} alt="" />
              Modern
            </li>
            <li className="flex justify-center gap-1 p-2.5 cursor-pointer  font-poppins  rounded-[16px]   border-2 items-center">
              <img src={all} alt="" />
              Classic
            </li>
          </ul>
        </div>

        <img className="absolute right-0  -z-20" src={tempbg2} alt="" />
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-32 w-full mb-28">
        {memoizedTemplates}
      </div>
      {isOpen && (
        <>
          <div className=" justify-center items-center flex fixed inset-0 z-50 outline-none bg-black/25 focus:outline-none">
            <div className="relative w-full my-5 mx-auto  ">
              <div className="border-0 rounded-lg  relative flex flex-col w-[95%] sm:w-[80%] md:w-[30%] h-full  mx-auto   outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5   ">
                  <h3 className="text-xl font-semibold text-white p-2 bg-blue-600 rounded-full">
                    Resume Preview
                  </h3>
                  <button
                    onClick={loginclick}
                    className=" font-bold transition-all hover:scale-105 delay-75  text-sm  md:text-xs  m-4
border-black bg-white text-sky-500  p-1 px-2 rounded-full"
                  >
                    Login
                  </button>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-white bg-red-500 rounded-full flex items-center h-7 w-7 text-2xl  justify-center outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" h-[39rem]   p-2 overflow-auto ">
                  <img
                    src={showImg}
                    alt="Single Image"
                    className="h-full w-[32rem] rounded-md  mx-auto"
                  />
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Template;
