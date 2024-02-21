import React, { useCallback, useState } from "react";
import Template from "../../templates/novatemp-1/Template";
import PersonalInfoForm from "../../component/PersonalInfoForm";
import SideNav from "../../component/SideNav";
import showNotification from "../../services/NotificationService";
import PersonalinfoCard from "../../component/PersonalinfoCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSectionActive } from "../../slice/sectionSlice";
import { setActiveForm } from "../../slice/showContentSlice";
import { saveAs } from "file-saver";
import Skillinfo from "../../component/Skillinfo";
import SkillinfoCard from "../../component/SkillinfoCard";
import EducationInfo from "../../component/EducationInfo";
import WorkInfo from "../../component/WorkInfo";
import EducationCard from "../../component/EducationCard";
import WorkInfoCard from "../../component/WorkInfoCard";
import InterestInfo from "../../component/InterestInfo";
import InterestCard from "../../component/InterestCard";
import CertificateCard from "../../component/CertificateCard";
import ProjectCard from "../../component/ProjectinfoCard";
import CertificateInfo from "../../component/CertificateInfo";
import LanguageCard from "../../component/LanguageCard";
import LanguageInfo from "../../component/LanguageInfo";
import ProjectInfo from "../../component/Projectinfo";

import Nova1 from "../../templates/novatemp-1/Template";
import Nova2 from "../../templates/novatemp-2/Template";
import Nova3 from "../../templates/novatemp-3/Template";
import Nova4 from "../../templates/novatemp-4/Template";
import Nova5 from "../../templates/novatemp-5/Template";
import Nova6 from "../../templates/novatemp-6/Template";
import Nova7 from "../../templates/novatemp-7/Template";
import Nova8 from "../../templates/novatemp-8/Template";
import Nova9 from "../../templates/novatemp-9/Template";
import Nova10 from "../../templates/novatemp-10/Template";
import Nova11 from "../../templates/novatemp-11/Template";
import Nova12 from "../../templates/novatemp-12/Template";
import Nova13 from "../../templates/novatemp-13/Template";
import Nova14 from "../../templates/novatemp-14/Template";
import Nova15 from "../../templates/novatemp-15/Template";
import Nova16 from "../../templates/novatemp-16/Template";
import Nova17 from "../../templates/novatemp-17/Template";
import Nova18 from "../../templates/novatemp-18/Template";
import Nova19 from "../../templates/novatemp-19/Template";
import Nova20 from "../../templates/novatemp-20/Template";
import Nova21 from "../../templates/novatemp-21/Template";
import Nova22 from "../../templates/novatemp-22/Template";
import Nova23 from "../../templates/novatemp-23/Template";
import Nova24 from "../../templates/novatemp-24/Template";
import Nova25 from "../../templates/novatemp-25/Template";
import Nova26 from "../../templates/novatemp-26/Template";
import Nova27 from "../../templates/novatemp-27/Template";
import Nova28 from "../../templates/novatemp-28/Template";
import Nova29 from "../../templates/novatemp-29/Template";
import Nova30 from "../../templates/novatemp-30/Template";
import Nova31 from "../../templates/novatemp-31/Template";
import Temp42 from "../../templates/template-42/Template";
import Temp43 from "../../templates/template-43/Template";
import { EditName } from "../../services/ApiServices";
import { getFull } from "../../actions/allProfieAction";
import edit from "../../assets/edit_blue.png";
import { Spinner } from "@material-tailwind/react";
const ResumeBuild = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const ActiveForm = useSelector((state) => state.showForm);
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const { profileData } = useSelector((state) => state.userDetail);
  const selectedProfile = useSelector((state) => state.portfolioSelction);
  const tempId = useSelector((state) => state?.templateID?.tempId);
  const [DownloadInProgress, setDownloadInProgress] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
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
  const handleEditName = async (id) => {
    try {
      if (editedName !== "") {
        let response = await EditName(id, { profile_name: editedName });
        if (response.status == 200) {
          dispatch(getFull(response.data?.id));
          showNotification("success", "Profile name updated successfully");
        }
      } else {
        showNotification("danger", "Cannot be empty");
      }

      setIsEditing(false); // Switch back to non-editing mode
      setEditedName(""); // Clear the edited name state after updating
    } catch (error) {
      console.error("Error updating profile name:", error);
      showNotification("error", "Error updating profile name");
    }
  };
  const createAndDownloadPdf = useCallback(() => {
    setDownloadInProgress(true);
    const body = {
      data: resumeData,
    };

    axios
      .post(`https://node-api.jotcv.com/create-pdf/${tempId}`, body) //https://node-api.jotcv.com/create-pdf/${tempId}
      .then(() =>
        axios.get(`https://node-api.jotcv.com/fetch-pdf/${tempId}`, {
          //https://node-api.jotcv.com/fetch-pdf/${tempId}
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, `${resumeData?.full_name}.pdf`);
        setDownloadInProgress(false);
      })
      .catch((err) => {
        setDownloadInProgress(false);
        console.error(err);
      });
  }, [tempId, resumeData]);

  const getTemplateById = (key) => {
    switch (key) {
      case 1:
        return <Nova1 />;
      case 2:
        return <Nova2 />;
      case 3:
        return <Nova3 />;
      case 4:
        return <Nova4 />;
      case 5:
        return <Nova5 />;
      case 6:
        return <Nova6 />;
      case 7:
        return <Nova7 />;
      case 8:
        return <Nova8 />;
      case 9:
        return <Nova9 />;
      case 10:
        return <Nova10 />;
      case 11:
        return <Nova11 />;
      case 12:
        return <Nova12 />;
      case 13:
        return <Nova13 />;
      case 14:
        return <Nova14 />;
      case 15:
        return <Nova15 />;
      case 16:
        return <Nova16 />;
      case 17:
        return <Nova17 />;
      case 18:
        return <Nova18 />;
      case 19:
        return <Nova19 />;
      case 20:
        return <Nova20 />;
      case 21:
        return <Nova21 />;
      case 22:
        return <Nova22 />;
      case 23:
        return <Nova23 />;
      case 24:
        return <Nova24 />;
      case 25:
        return <Nova25 />;
      case 26:
        return <Nova26 />;
      case 27:
        return <Nova27 />;
      case 28:
        return <Nova28 />;
      case 29:
        return <Nova29 />;
      case 30:
        return <Nova30 />;
      case 31:
        return <Nova31 />;
      case 42:
        return <Temp42 />;
      case 43:
        return <Temp43 />;

      default:
        return <Nova1 />;
    }
  };
  const showSection = useSelector((state) => state?.showSection);
  return (
    <>
      <div className="flex flex-wrap justify-evenly items-start bg-[#F4F4F5] min-h-screen">
        <div>
          <SideNav />
        </div>
        <div>
          <div className="flex justify-between gap-2 my-3 w-full p-3 px-6 rounded-lg mt-3 bg-blue-200 items-center">
            {isEditing ? (
              <div className="flex justify-start items-center gap-5">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Profile name"
                  className="border w-32 p-1 outline-none rounded-lg"
                />{" "}
                <p
                  onClick={() => handleEditName(resumeData?.id)}
                  className="cursor-pointer bg-green-500  text-white p-1 rounded-md text-sm flex items-center"
                >
                  save
                </p>
              </div>
            ) : (
              <div
                onClick={() => setIsEditing(true)}
                className="font-bold flex capitalize justify-between text-lg sm:text-2xl "
              >
                {resumeData?.profile_name === "Profile_1"
                  ? `Resume Name`
                  : resumeData?.profile_name}
                {resumeData?.profile_name && (
                  <div>
                    <p
                      onClick={() => setIsEditing(true)}
                      className="cursor-pointer mx-2.5  transition-all delay-75 rounded-lg  p-1 "
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

            <button
              className="bg-blue-600 transition-all delay-100 text-white rounded-full p-1.5 "
              onClick={() => createAndDownloadPdf()}
            >
              {DownloadInProgress ? (
                <div className="flex gap-1.5">
                  <Spinner color="green" />
                  Downloading
                </div>
              ) : (
                "Download"
              )}
            </button>
          </div>
          {/*  */}
          {!resumeData && !ActiveForm.activeForm ? (
            <PersonalInfoForm />
          ) : (
            <>
              {!ActiveForm.activeForm ? (
                <>
                  <PersonalinfoCard />
                  {showSection?.Skills && <SkillinfoCard />}
                  {showSection?.Education && <EducationCard />}
                  {showSection?.Professional && <WorkInfoCard />}
                  {showSection?.Interest && <InterestCard />}
                  {showSection?.Certificate && <CertificateCard />}
                  {showSection?.Language && <LanguageCard />}
                  {showSection?.Projects && <ProjectCard />}
                  <div className="flex justify-center mt-2.5">
                    <button
                      onClick={() => setShowModal(true)}
                      className="p-2 px-3 mx-auto  rounded-full bg-gradient-to-r  from-blue-600 via-blue-400 to-sky-400 hover:scale-105 text-white  transition-all delay-100 "
                    >
                      <span className="font-bold  ">+</span> Add Content
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {ActiveForm.PersonalInfoFormShow && <PersonalInfoForm />}
                  {ActiveForm.SkillInfoFormShow && <Skillinfo />}
                  {ActiveForm.EducationInfoFormShow && <EducationInfo />}
                  {ActiveForm.ExperienceInfoFormShow && <WorkInfo />}
                  {ActiveForm.interestInfoFormShow && <InterestInfo />}
                  {ActiveForm.CertificateInfoFormShow && <CertificateInfo />}
                  {ActiveForm.LanguageInfoFormShow && <LanguageInfo />}
                  {ActiveForm.ProjectInfoFormShow && <ProjectInfo />}
                </>
              )}
            </>
          )}
        </div>
        <div className="w-fit overflow-y-auto h-[42rem] no-scrollbar p-0 bg-white border-[12px] border-[#F7F7F7] rounded-md">
          {getTemplateById(+tempId)}
        </div>
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
    </>
  );
};

export default ResumeBuild;
