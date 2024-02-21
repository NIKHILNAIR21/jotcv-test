import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  deleteResumeByid,
  getAllResume,
  getFullProfile,
  getProfileData,
  getProfileUpdate,
  getTemplatePreview,
  // getUserProfileData,
  savePortfolio,
  EditName,
  getSubscription,
} from "../services/ApiServices";
import showNotification from "../services/NotificationService";
import { Link, useNavigate } from "react-router-dom";
import { reset } from "../slice/personalInfo";
import select from "../../src/assets/select.png";
import check from "../../src/assets/check.png";
import edit from "../../src/assets/edit_blue.png";
// import Loader from "./loader";
import { resetWork } from "../slice/workExperienceSlice";
import { resetEdu } from "../slice/educationSlice";
import { resetProject } from "../slice/projectSlice";
import { resetSkil } from "../slice/skillSlice";
import { resetSummary } from "../slice/summarySlice";
import { resetResumeData } from "../slice/fullProfileSlice";
import NoImg from "../assets/NoImage.jpg";
import { saveTempId } from "../slice/templateIDSlice";

import Loader from "../component/loader";
import menu from "../assets/dots.png";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProfile } from "../slice/selectedProfileSlice";
import axios from "axios";
import { getFull } from "../actions/allProfieAction";
import { getTemplateImage } from "../constant";
import { saveAs } from "file-saver";
import { setPortfolioProfile } from "../slice/portfolioProfile";
import { markProfileAsIncomplete } from "../slice/allProfileComplitionSlice";

import ResumeLayout from "../templates/ResumeLayout";
import { allSectionActive, resetSection } from "../slice/sectionSlice";
import { resetSocial } from "../slice/SocialLInksSlice";

const ResumeContainer = () => {
  const [profileCount, setProfileCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [viewType, setViewType] = useState("grid"); // Initial view type is grid
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profileData } = useSelector((state) => state.userDetail);
  const selectedProfile = useSelector((state) => state.portfolioSelction);
  const [userdetail, setUserdetail] = useState({});
  // const [selectedProfile,setSelectedProfile]=useState("")
  const [downloadInProgress, setDownloadInProgress] = useState(false);
  const tempId = useSelector((state) => state?.templateID?.tempId);
  const [showModal, setShowModal] = React.useState(false);
  const [selectProfile, setSelectProfile] = useState(null);
  const [subs, setSubs] = useState(null);
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const [showDrop, setShowDrop] = useState(false);
  const [selectedProfileName, setSelectedProfileName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [webLoading, setWebLoading] = useState(false);
  const [editedName, setEditedName] = useState("");

  const handleEditName = async (id) => {
    if (selectedProfile === id) {
      try {
        if (editedName !== "") {
          await EditName(id, { profile_name: editedName });
          showNotification("success", "Profile name updated successfully");
        } else {
          showNotification("danger", "Cannot be empty");
        }

        // Refresh profiles after editing name
        getAllProfile();

        setIsEditing(false); // Switch back to non-editing mode
        setEditedName(""); // Clear the edited name state after updating
      } catch (error) {
        console.error("Error updating profile name:", error);
        showNotification("error", "Error updating profile name");
      }
    } else {
      showNotification("warning", "Please select a profile to edit");
    }
  };

  useEffect(() => {
    getAllProfile();
    getUserProfileData();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };
  const getUserProfileData = async () => {
    try {
      let response = await getProfileData();
      if (response?.status == 200) {
        setUserdetail(response?.data?.data);
      }
    } catch (error) {}
  };

  const getAllProfile = useCallback(async () => {
    try {
      let response = await getAllResume();
      if (response?.data?.status === 200) {
        setIsLoading(false);
        setSubs(response?.data?.subscription?.subscription);
        setProfiles(response?.data?.data);
        setProfileCount(response?.data?.total_profiles_count);
      } else {
        setIsLoading(false);
        setProfiles([]);
      }
    } catch (error) {
      setProfiles([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleDelete = useCallback(
    async (id) => {
      setIsLoading(true);
      try {
        let resp = await deleteResumeByid(id);
        if (resp?.data?.status === 200) {
          setIsLoading(false);
          showNotification("success", "Profile deleted successfully");
          getAllProfile();
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    },
    [getAllProfile]
  );

  const handleNavigate = async () => {
    if (subs === "15 Days" && profileCount === 1) {
      showNotification(
        "danger",
        "You Have Reached Your Limit For Profile Creation"
      );
      return;
    } else if (subs === "1 Month" && profileCount === 3) {
      showNotification(
        "danger",
        "You Have Reached Your Limit For Profile Creation"
      );
      return;
    } else if (subs === "3 Months" && profileCount === 5) {
      showNotification(
        "danger",
        "You Have Reached Your Limit For Profile Creation"
      );
      return;
    } else {
      navigate("/experience-level");
      dispatch(reset());
      dispatch(resetSocial());
      dispatch(resetSection());
      dispatch(resetWork());
      dispatch(resetEdu());
      dispatch(resetProject());
      dispatch(resetSkil());
      dispatch(resetSummary());
      dispatch(resetResumeData());
      dispatch(markProfileAsIncomplete());
    }
  };

  const createAndDownloadPdf = useCallback((data) => {
    const body = {
      data: data,
    };

    axios
      .post(`https://node-api.jotcv.com/create-pdf/${data?.template}`, body)
      .then(() =>
        axios.get(`https://node-api.jotcv.com/fetch-pdf/${data?.template}`, {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, `${data?.full_name}.pdf`);
        setDownloadInProgress(false);
      })
      .catch((err) => {
        setDownloadInProgress(false);
        console.error(err);
      });
  }, []); // Empty dependency array since no external dependency
  const getAllProfiles = useCallback(
    async (id) => {
      setDownloadInProgress(true);
      try {
        let response = await getFullProfile(id);
        if (response?.status === 200) {
          createAndDownloadPdf(response?.data?.data);
        } else {
          // Handle error
        }
      } catch (error) {
        console.error(error);
      }
    },
    [createAndDownloadPdf]
  ); // Dependency on createAndDownloadPdf function
  const handleEdit = (item) => {
    dispatch(getFull(item?.id))
      .then((resultAction) => {
        if (getFull.fulfilled.match(resultAction)) {
          // Dispatch getFull action if adding new experience was successful
          navigate(`/resume-build`);
          dispatch(saveTempId(item?.template));
          dispatch(
            allSectionActive({
              Education: resultAction?.payload?.data?.eductaions?.length
                ? true
                : false,
              Professional: resultAction?.payload?.data?.experiences?.length
                ? true
                : false,
              Language: resultAction?.payload?.data?.languages?.length
                ? true
                : false,
              Certificate: resultAction?.payload?.data?.certification?.length
                ? true
                : false,
              Interest: resultAction?.payload?.data?.interests?.length
                ? true
                : false,
              Skills: resultAction?.payload?.data?.skills?.length
                ? true
                : false,
              Projects: resultAction?.payload?.data?.projects?.length
                ? true
                : false,
            })
          );
        }
      })
      .catch((error) => {
        // Handle any error if required
        console.error("Error adding new experience:", error);
      });
  };
  const handleCreateProfile = () => {
    if (selectProfile !== null) {
      dispatch(setSelectedProfile(selectProfile?.id)); // Dispatch the action to update selectedProfile

      navigate(`/video-profile?profile=${selectProfile?.id}`);
    } else {
      showNotification("danger", "Please select a profile");
    }
  };
  const handleSelectProfile = (profileId) => {
    dispatch(setPortfolioProfile(profileId)); // Dispatch the action to update selectedProfile
    const selectedProfile = profiles.find(
      (profile) => profile.id === profileId
    );
    setSelectedProfileName(selectedProfile?.profile_name || "");
  };

  const handlePreview = () => {
    if (profiles?.length !== 0) {
      setShowModal(true);
    } else {
      showNotification("danger", "Please create a profile");
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handlesetPortfolio = async (e, item) => {
    e.preventDefault();
    if (selectedProfile !== "") {
      if (item?.web_portfolio?.primary_id) {
        setWebLoading(true);
        let data = {
          primary_id: item?.web_portfolio?.primary_id,
          profile_id: item?.id,
        };

        try {
          let response = await savePortfolio({ web_portfolio: data });
          if (response?.status == 200) {
            setWebLoading(false);
            getAllProfile();
            window.open(
              `https://webportfolio.jotcv.com/${profileData?.username}`
            );
          }
        } catch (error) {
          setWebLoading(false);
        }
      } else {
        navigate("/web-portfolio");
      }
    } else {
      showNotification("danger", "Please select a profile");
    }
  };
  return (
    <>
      <div className=" mx-auto w-[99%] sm:w-[90%]  p-6">
        <div className="w-[96%] mx-auto">
          <h1 className="text-[22px] font-bold mb-1">
            Greetings, {userdetail?.first_name} {userdetail?.last_name}!
          </h1>
          <p className="text-lg font-semibold ">
            Let's get started on creating your resume .
          </p>

          <div className="flex justify-start items-center mt-5 mb-16">
            <div className="flex flex-wrap gap-2">
              <button
                className="bg-sky-500 rounded-full hover:scale-105 transition-all delay-75 text-sm sm:text-base text-white px-4 py-2  "
                onClick={() => handleNavigate()}
              >
                + Create Resume
              </button>
              <div className="relative hover:scale-105 transition-all delay-75  ">
                <p className="absolute -top-1 right-0  text-xs font-light text-white bg-red-500 rounded-full rounded-tr rounded-bl shadow-inner px-1">
                  New
                </p>
                <button
                  className=" transition-all delay-150  bg-gradient-to-r text-sm sm:text-base from-indigo-500 via-purple-500 to-pink-500  rounded-full shadow-md shadow-sky-300 text-white px-4 py-2 "
                  onClick={() => handlePreview()}
                >
                  Create Video Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div> {isLoading && <Loader />}</div>
        {viewType === "grid" ? (
          // Render the grid view content here

          profiles && profiles?.length !== 0 ? (
            <div className="flex flex-wrap gap-x-44 gap-y-10 justify-center w-[99%] mx-auto">
              {profiles?.map((item, index) => {
                return (
                  <div>
                    <div
                      className={
                        selectedProfile == item?.id
                          ? "w-[360px] h-full overflow-hidden relative shadow-2xl scale-100 transition-all duration-200 delay-75 mb-5 from-purple-500 via-pink-400 to-blue-500 border-2 rounded-lg border-green-500"
                          : "w-[360px] h-full overflow-hidden relative shadow-md border scale-100 rounded-lg border-gray-300 mb-5"
                      }
                      key={index}
                      onClick={() => handleSelectProfile(item?.id)}
                    >
                      {/* Add overlay */}
                      <div
                        onClick={() => setShowDrop(!showDrop)}
                        className="absolute top-1.5 z-50 right-1.5 p-0.5 bg-sky-300 opacity-80 rounded-full"
                      >
                        <img className="w-6" src={menu} alt="" />
                      </div>
                      {showDrop && selectedProfile === item?.id && (
                        <div
                          className="absolute top-7 right-1 z-10  origin-top-right rounded-md  bg-gray-100 shadow-md   focus:outline-none"
                          role="menu"
                        >
                          <div className="py-1" role="none">
                           

                            <ul>
                              <li>
                                <div
                                  className=" z-30 relative  "
                                  onClick={() => navigate("/web-portfolio",{state:item?.web_portfolio?.primary_id})}
                                >
                                  <span className=" p-2 rounded-lg font-medium  text-sky-700 cursor-pointer hover:scale-110 transition ease-out duration-150 delay-75">
                                    change Web Template
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                      <div class="relative h-96 w-full p-0  bg-white">
                        <div className="bg-black opacity-0 hover:opacity-70 absolute top-0 right-0 h-96 w-full flex items-center justify-center">
                          <h1
                            className="text-white opacity-100 text-xl border-2 p-2 rounded-lg cursor-pointer z-20"
                            onClick={() => {
                              openModal();
                              dispatch(saveTempId(item?.template));
                              dispatch(getFull(item?.id));
                            }}
                          >
                            Preview
                          </h1>
                        </div>
                        {selectedProfile == item?.id ? (
                          <div className="absolute top-2 left-2">
                            <img src={check}></img>
                          </div>
                        ) : (
                          <div className="absolute top-2 left-2">
                            <img className="w-5" src={select} alt="" />
                          </div>
                        )}
                        <img
                          className="mx-auto block overflow-hidden h-full w-full "
                          src={
                            item?.template
                              ? getTemplateImage(item?.template)
                              : NoImg
                          }
                          alt="Card"
                        />
                      </div>
                      <div class="border-t border-gray-300 "></div>

                      <div className="px-4 py-4 ">
                        <div className="font-bold flex capitalize justify-between text-lg sm:text-xl  mb-2">
                          {isEditing && selectedProfile === item?.id ? (
                            <div className="flex justify-start items-center gap-5">
                              <input
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                className="border w-32 "
                              />{" "}
                              <p
                                onClick={() => handleEditName(item?.id)}
                                className="cursor-pointer bg-green-500  text-white p-1 rounded-md text-sm flex items-center"
                              >
                                save
                              </p>
                            </div>
                          ) : (
                            <div className="font-bold flex capitalize justify-between text-lg sm:text-xl  mb-2">
                              {item?.profile_name === "Profile_1"
                                ? `profile_${item?.id}`
                                : item?.profile_name}
                              {selectedProfile === item?.id && (
                                <div>
                                  <p
                                    onClick={() => setIsEditing(true)}
                                    className="cursor-pointer text-blue-500 px-3 mt-1"
                                  >
                                    <img
                                      width={20}
                                      height={20}
                                      src={edit}
                                      alt="edit button"
                                    />
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                          <Link onClick={(e) => handlesetPortfolio(e, item)}>
                            <span className=" relative flex items-center w-fit border-2 hover:scale-105 transition-all delay-100 hover:text-white hover:bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-500 rounded-r-full rounded-l-full px-2 text-xs py-1 cursor-pointer  capitalize">
                              <br />
                              <p className="text-sm px-1.5">
                                {webLoading && selectedProfile == item?.id
                                  ? "Loading..."
                                  : "Web Portfolio"}
                              </p>
                            </span>
                          </Link>

                          {/* <p className="text-gray-700 text-sm sm:text-base">
                          {item?.position}
                        </p> */}
                        </div>
                        <div className="mt-2">
                          <div className=" flex items-center justify-between relative pt-1">
                            <div>
                              <span className="text-xs font-semibold inline-block  uppercase rounded-full text-blue-600 ">
                                Profile Complete
                              </span>
                            </div>
                            <div className="bg-gray-200 w-[100px] rounded-r-full rounded-l-full relative -z-10">
                              <div
                                style={{
                                  width: `${item?.profile_percentage}px`,
                                }}
                                className="shadow-none rounded-l-full relative z-20 rounded-r-full flex flex-col text-center whitespace-nowrap text-white justify-center h-2.5 bg-blue-500"
                              />
                            </div>

                            <div className="">
                              <span className="text-xs font-semibold inline-block text-blue-600">
                                {item?.profile_percentage}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class=" "></div>
                      <div class="thumbnail-links relative whitespace-nowrap text-center text-black font-semibold uppercase flex justify-between h-12 w-full items-center">
                        <div className="flex mx-3 justify-evenly gap-3">
                          <span
                            className=" relative flex items-center hover:bg-blue-500 transition-all hover:scale-125  delay-100  hover:text-white justify-center border-2 rounded-r-full rounded-l-full px-2  w-full py-1 cursor-pointer  capitalize"
                            onClick={() => {
                              handleEdit(item);
                            }}
                          >
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                            <br />
                            <p className="text-sm px-1.5 ">Edit</p>
                          </span>
                          <span
                            className=" relative flex items-center w-full hover:bg-red-500 transition-opacity hover:text-white hover:scale-125  delay-100  border-2 rounded-r-full rounded-l-full px-2 text-xs py-1 cursor-pointer  capitalize"
                            onClick={() => handleDelete(item?.id)}
                          >
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                            <br />
                            <p className="text-sm px-1.5">Delete</p>
                          </span>
                        </div>
                        {downloadInProgress ? (
                          <span
                            className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-blue-500   mx-2  px-2  cursor-pointer text-lg capitalize"
                            //   onClick={() =>
                            // navigate(`/web-portfolio?profile=${item?.id}`)
                            //   }
                          >
                            {/* <i className="fa fa-briefcase" aria-hidden="true"></i> */}
                            <br />
                            <p className="text-sm font-semibold px-1.5">
                              Download
                            </p>
                          </span>
                        ) : (
                          <span
                            className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-blue-500 hover:text-white hover:bg-blue-700 hover:scale-110 transition-all delay-75 mx-2  px-2  cursor-pointer text-lg capitalize"
                            //   onClick={() =>
                            // navigate(`/web-portfolio?profile=${item?.id}`)
                            //   }
                            onClick={() =>
                              subs != null
                                ? getAllProfiles(item?.id)
                                : navigate("/pricing-plans")
                            }
                          >
                            {/* <i className="fa fa-briefcase" aria-hidden="true"></i> */}
                            <br />
                            <p className="text-sm font-semibold px-1.5">
                              Download
                            </p>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>
      {downloadInProgress && (
        <div
          className={`fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow transition-opacity ${
            downloadInProgress ? "opacity-100" : "opacity-0"
          }`}
        >
          Download in Progress...
        </div>
      )}
      {isOpen && (
        <>
          <div className="justify-center  items-center flex  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-5  w-[95%] max-w-6xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl sm:text-3xl font-semibold">
                    Resume Preview
                  </h3>
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
                <div className="relative p-1 mx-auto  h-[34rem] overflow-y-auto">
                  {/* <img src={img} alt="Single Image" className="w-full h-auto" />
                   */}
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
            <div className="relative w-[56%] sm:w-fit h-[80%] my-5 mx-auto max-w-6xl origin-top">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Choose Profile</h3>
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
                <div className="relative p-1 w-[30rem] flex-auto">
                  <div className="modal-content p-4">
                    <div className="mt-4 space-y-4">
                      {profiles?.map((profile) => (
                        <div key={profile.id} className="flex  items-center">
                          <input
                            type="radio"
                            id={`profile-${profile.id}`}
                            name="selectedProfile"
                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            checked={selectProfile === profile}
                            onChange={() => setSelectProfile(profile)}
                          />
                          <label
                            htmlFor={`profile-${profile.id}`}
                            className="ml-3 cursor-pointer"
                          >
                            {profile.full_name}|{profile?.position}
                          </label>
                        </div>
                      ))}
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
                    className="bg-sky-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleCreateProfile()}
                  >
                    Continue
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

export default ResumeContainer;
