import React, { useState } from "react";
import newJotcv from "../assets/newjotcv.png";
import add from "../assets/add.png";
import change from "../assets/change.png";
import { useDispatch, useSelector } from "react-redux";
import { AVAILABLE_TEMPLATES } from "../constant";
import { saveTempId } from "../slice/templateIDSlice";
import { setSectionActive } from "../slice/sectionSlice";
import { setActiveForm } from "../slice/showContentSlice";
import { getFull } from "../actions/allProfieAction";
import { updateCVProfile } from "../services/ApiServices";
const SideNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTemplates, setshowTemplates] = useState(false);
  const tempId = useSelector((state) => state?.templateID?.tempId);
  const [selectedImg, setSelectedImg] = useState();
  const [img, setImg] = useState("");
  const [selectedId, setSelectedId] = useState();
  const dispatch = useDispatch();

  const sectionArray = [
    {
      name: "Education",
      description:
        "Show off your primary education, college degrees & exchange semesters.",
      form: "EducationInfoFormShow",
    },
    {
      name: "Professional",
      description:
        "A place to highlight your professional experience - including internships.",
      form: "ExperienceInfoFormShow",
    },
    {
      name: "Language",
      description:
        " You speak more than one language? Make sure to list them here.",
      form: "LanguageInfoFormShow",
    },
    {
      name: "Certificate",
      description:
        "Drivers licenses and other industry-specific certificates you have belong here.",
      form: "CertificateInfoFormShow",
    },
    {
      name: "Interest",
      description:
        "Do you have interests that align with your career aspiration?",
      form: "interestInfoFormShow",
    },
    {
      name: "Skills",
      description:
        "List your technical, managerial or soft skills in this section.",
      form: "SkillInfoFormShow",
    },
    {
      name: "Projects",
      description:
        "Worked on a particular challenging project in the past? Mention it here.",
      form: "ProjectInfoFormShow",
    },
  ];
  React.useEffect(() => {
    getThumbnailById();
    if (resumeData?.id) {
      dispatch(getFull(resumeData?.id));
    }
  }, [tempId]);
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const handleClick = () => {
    if (resumeData) {
      setShowModal(true);
    }
  };

  function getThumbnailById() {
    const template = AVAILABLE_TEMPLATES?.find((temp) => temp?.id == tempId);

    setImg(template?.thumbnail);
  }

  const handleSelectImage = (data) => {
    setSelectedImg(data?.thumbnail);
    setSelectedId(data?.id);
  };
  const handleChangeTemplate = async () => {
    try {
      let formData = new FormData();
      formData.append("template", selectedId);
      if (resumeData?.id) {
        let response = await updateCVProfile(resumeData?.id, formData);
        if (response?.status == 200) {
          dispatch(getFull(resumeData?.id));
          dispatch(saveTempId(selectedId));
          setshowTemplates(false);
          setSelectedImg("");
          setSelectedId("");
        }
      } else {
        dispatch(saveTempId(selectedId));
        setshowTemplates(false);
        setSelectedImg("");
        setSelectedId("");
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="bg-gradient-to-b  from-blue-600 via-blue-400 to-sky-400 flex flex-col items-center my-3  gap-5  rounded-md">
        <div className="bg-white w-full p-3 rounded-t-md">
          <img className=" mx-auto" src={newJotcv} alt="" />
        </div>
        <button
          onClick={() => handleClick()}
          className="text-center p-3 m-3 flex flex-col items-center text-[#404145] hover:bg-blue-50  gap-3 transition-all delay-75  rounded-md text-sm  bg-white"
        >
          <div>
            <img src={add} alt="" />
          </div>
          <div className="text-[14px] font-semibold ">Content</div>
        </button>
        <button
          onClick={() => setshowTemplates(true)}
          className="text-center m-3 p-3 flex flex-col text-[#404145] hover:bg-blue-50  items-center gap-3 transition-all delay-75  rounded-md text-sm  bg-white"
        >
          <div>
            <img src={change} alt="" />
          </div>
          <div className="text-[14px] font-semibold ">Template</div>
        </button>
      </div>
      {showModal && (
        <div className="absolute transition-all delay-100 top-56 drop-shadow-2xl z-50 rounded-lg p-5 left-0 right-0 bg-gradient-to-r from-purple-500/50 via-pink-400/50 to-blue-500/50 w-[54rem] mx-auto">
          <div className="relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute z-50 text-blue-600 bg-white px-3  py-1 rounded-full right-0 text-base"
            >
              X
            </button>
          </div>
          <h2 className="text-2xl font-bold text-white">Add Content</h2>
          <div className="flex flex-wrap w-full py-3 gap-4">
            {sectionArray?.map((item, index) => {
              return (
                <>
                  <p
                    className="p-4 bg-white w-64 hover:border-r-4 hover:border-b-4 border-blue-600 transition-all delay-100 hover:scale-105 hover:shadow-md rounded-[6px] text-xl font-poppins text-blue-600 font-semibold cursor-pointer"
                    key={index}
                    onClick={() => {
                      dispatch(setSectionActive(item?.name));
                      dispatch(setActiveForm(item?.form));
                      setShowModal(false);
                    }}
                  >
                    {item?.name}
                    <p className="text-xs  font-poppins text-black font-normal">
                      {item?.description}
                    </p>{" "}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      )}
      {showTemplates ? (
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
                    onClick={() => setshowTemplates(false)}
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
                    onClick={() => setshowTemplates(false)}
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
};

export default SideNav;
