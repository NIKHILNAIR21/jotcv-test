import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getTemplates } from "../../actions/templateAction";
import menu from "../../assets/dots.png";
import search from "../../assets/search.png";
import { getFull } from "../../actions/allProfieAction";
import { AVAILABLE_TEMPLATES } from "../../constant";
import { saveTempId } from "../../slice/templateIDSlice";
import ResumeLayout from "../../templates/ResumeLayout";
import { useLocation } from "react-router";

function ResumeTemoImg() {
  const location = useLocation();
  let id = new URLSearchParams(location.search).get("profile");
  const tempId = useSelector((state) => state?.templateID?.tempId);
  const [img, setImg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState();
  const [selectedId, setSelectedId] = React.useState();
  const [showDrop, setShowDrop] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTemplates());
  // }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getThumbnailById();
  }, [tempId]);

  function getThumbnailById() {
    const template = AVAILABLE_TEMPLATES?.find((temp) => temp?.id == tempId);

    setImg(template?.thumbnail);
  }

  const handleSelectImage = (data) => {
    setSelectedImg(data?.thumbnail);
    setSelectedId(data?.id);
  };
  const handleChangeTemplate = () => {
    dispatch(saveTempId(selectedId));

    setShowModal(false);
    setSelectedImg("");
    setSelectedId("");
  };

  return (
    <>
      <div className="max-w-[21rem]  max-h-screen mb-4">
        <div className="relative  ">
          <img src={img} className="rounded-md" />
          <div
            onClick={() => setShowDrop(!showDrop)}
            className="absolute top-0.5 right-1.5 bg-sky-200 rounded-full"
          >
            <img className="w-6" src={menu} alt="" />
          </div>
          {showDrop && (
            <div
              className="absolute top-7 right-1 z-10  origin-top-right rounded-md  bg-gray-100 shadow-md   focus:outline-none"
              role="menu"
            >
              <div className="py-1" role="none">
                <ul>
                  <li>
                    <div
                      className=" z-30 relative  "
                      onClick={() => setShowModal(true)}
                    >
                      <span className=" p-2 rounded-lg font-medium  text-sky-700 cursor-pointer hover:scale-110 transition ease-out duration-150 delay-75">
                        Change Template
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div>
            {id ? (
              <button
                className="absolute bottom-1.5 right-1.5 bg-sky-500/75 p-0.5 flex justify-center
           items-center text-white font-medium rounded-md"
                onClick={() => {
                  openModal();
                  dispatch(getFull(id));
                }}
              >
                <img width="20px" src={search} alt="" />
                Preview
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={closeModal}
          >
            <div className="relative my-5 mx-auto w-[90%] md:w-[55%]  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Resume Preview</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="  md:mx-auto h-[55rem] sm:h-[35rem] w-[100%]  overflow-auto">
                  <ResumeLayout />
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-5 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Change template</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="modal-content p-4">
                    <div className="grid grid-cols-2 gap-5">
                      {/* Left Column for Single Image */}
                      <div className="col-span-1 h-80 overflow-y-scroll">
                        <img
                          src={selectedImg ? selectedImg : img}
                          alt="Single Image"
                          className="w-full h-auto"
                        />
                      </div>
                      {/* Right Column for Multiple Images */}
                      <div className="col-span-1 h-80 overflow-y-scroll">
                        <div className="flex flex-wrap gap-4 ">
                          {/* Image 1 (First Row) */}
                          {AVAILABLE_TEMPLATES?.length !== 0 && (
                            <>
                              {AVAILABLE_TEMPLATES?.map((data, index) => {
                                return (
                                  <div
                                    className="resume-template mt-10 w-[93%] md:w-[21%] md:mx-10 rounded-md border-2 hover:border-red-600 hover:shadow-lg hover:shadow-red-600"
                                    key={index}
                                    onClick={() => handleSelectImage(data)}
                                  >
                                    <img
                                      src={data?.thumbnail}
                                      className="w-full h-auto"
                                    />
                                  </div>
                                );
                              })}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleChangeTemplate()}
                  >
                    SELECT THIS TEMPLATE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ResumeTemoImg;
