import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AVAILABLE_TEMPLATES } from "../../../constant";
import { saveTempId } from "../../../slice/templateIDSlice";
import tempbg1 from "../../../assets/templatebg.png";
import tempbg2 from "../../../assets/tempbg-2.png";
const Creative = () => {
  const [tempid, setTempId] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((state) => state?.templates?.list?.results);
  const userExp = useSelector((state) => state?.askExp?.selectedExp);
  const [showImg, setShowImg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAll, setIsOpenAll] = useState(false);
  const ExpTemp = AVAILABLE_TEMPLATES.filter((Data) =>
    Data.type.includes(userExp)
  );

  const openModal = () => {
    setIsOpen(true);
  };
  const openAllModal = () => {
    setIsOpenAll(true);
  };

  const closeAllModal = () => {
    setIsOpenAll(false);
  };
  const handleNavigate = (tempId) => {
    dispatch(saveTempId(tempId));
    navigate("/resume-build");
  };

  return (
    <>
      <div className=" mt-5    justify-center  w-[44rem] sm:w-full flex flex-col items-center mb-8  ">
        <div className="relative flex justify-center w-[27rem] sm:w-full ">
          {/* <img className="absolute left-0 top-0 -z-20 " src={tempbg1} alt="" /> */}
          <div>
            <h3 className="flex flex-col text-center flex-wrap text-4xl font-semibold font-poppins items-center mx-auto justify-center">
              Choose from Our Premium Resume Templates Collection
            </h3>
            <h3 className="flex flex-col mb-6 pt-2 text-center flex-wrap text-xl font-medium font-poppins items-center mx-auto justify-center">
              To Kickstart Your Professional Career Journey with JotCV !
            </h3>
          </div>
        </div>
        {/* <img className="absolute right-0 top-0  -z-20" src={tempbg2} alt="" /> */}

        <div className="flex flex-wrap gap-8 px-10 justify-center items-center ">
          {userExp ? (
            <>
              {" "}
              {ExpTemp && ExpTemp?.length !== 0 ? (
                <>
                  {ExpTemp?.map((item, index) => {
                    return (
                      <>
                        <div
                          className="resume-template relative cursor-pointer mt-10 w-[24rem]"
                          key={index}
                        >
                          <div className="relative">
                            <img
                              className="shadow-xl rounded-lg  transition-all delay-100"
                              src={item?.thumbnail}
                              alt=""
                            />
                            <div className="flex justify-evenly">
                              <button
                                className=" bg-sky-500/75 text-white absolute font-poppins rounded-l-full rounded-r-full  bottom-5 p-1.5 left-2  w-fit mx-auto font-medium"
                                onClick={() => {
                                  openAllModal();
                                  setShowImg(item?.thumbnail);
                                  setTempId(item?.id);
                                }}
                              >
                                Preview
                              </button>{" "}
                              <button
                                onClick={() => handleNavigate(item?.id)}
                                className="bg-sky-500/75 text-white absolute font-poppins rounded-l-full rounded-r-full  bottom-5 p-1.5  right-2  w-fit mx-auto font-medium"
                              >
                                Choose Template
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  {isOpen && (
                    <>
                      <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-5 mx-auto  ">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[28%] mx-auto h-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-xl font-semibold">
                                Resume Preview
                              </h3>
                              <button
                                onClick={() => handleNavigate(tempid)}
                                className=" font-bold border-2 text-sm  md:text-xs  m-4
         border-black text-white bg-sky-500  p-1 px-2 rounded-full"
                              >
                                CHOOSE THIS TEMPLATE
                              </button>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={closeAllModal}
                              >
                                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className=" modal-content h-[35rem] bg-sky-300  overflow-auto">
                              <img
                                src={showImg}
                                alt="Single Image"
                                className="w-full h-full mx-auto"
                              />
                            </div>
                            {/*footer*/}
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              {" "}
              {AVAILABLE_TEMPLATES && AVAILABLE_TEMPLATES?.length !== 0 ? (
                <>
                  {AVAILABLE_TEMPLATES?.map((item, index) => {
                    return (
                      <>
                        <div
                          className="resume-template relative cursor-pointer transition-all delay-100 hover:scale-105  mt-10 w-[24rem]   "
                          key={index}
                        >
                          <div className="relative">
                            <img
                              className=" drop-shadow-2xl rounded-[16px ]  "
                              src={item?.thumbnail}
                              alt=""
                            />
                            <div className="flex justify-evenly">
                              <button
                                className=" bg-sky-500/90 text-white absolute font-poppins rounded-l-full rounded-r-full  bottom-5 p-1.5 left-2  w-fit mx-auto font-medium"
                                onClick={() => {
                                  openAllModal();
                                  setShowImg(item?.thumbnail);
                                  setTempId(item?.id);
                                }}
                              >
                                Preview
                              </button>{" "}
                              <button
                                onClick={() => handleNavigate(item?.id)}
                                className="bg-sky-500/75 text-white absolute font-poppins rounded-l-full rounded-r-full  bottom-5 p-1.5  right-2  w-fit mx-auto font-medium"
                              >
                                Choose Template
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
      {isOpenAll && (
        <>
          <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-5 mx-auto  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[28%] mx-auto h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Resume Preview</h3>
                  <button
                    onClick={() => handleNavigate(tempid)}
                    className=" font-bold border-2 text-sm  md:text-xs  m-4
         border-black text-white bg-sky-500  p-1 px-2 rounded-full"
                  >
                    CHOOSE THIS TEMPLATE
                  </button>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeAllModal}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" modal-content h-[35rem] bg-sky-300  overflow-auto">
                  <img
                    src={showImg}
                    alt="Single Image"
                    className="w-full h-full mx-auto"
                  />
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Creative;
