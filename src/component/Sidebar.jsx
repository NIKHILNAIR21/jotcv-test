import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { getFullProfile } from "../services/ApiServices";
import showNotification from "../services/NotificationService";
function Sidebar() {
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  useEffect(() => {
    getAllProfiles();
  }, []);
  const getAllProfiles = async () => {
    if (ProfileID !== null) {
      try {
        let response = await getFullProfile(ProfileID);
        if (response?.data?.status == 200) {
          setAllData(response?.data?.data);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const ProfileID = searchParams.get("profile");

  const isComplete = useSelector((state) => state?.isComplete);

  return (
    <>
      <div className=" flex justify-center gap-5 px-6 bg-white mt-2 mb-6 py-1.5 rounded-l-full rounded-r-full   flex-wrap w-[52rem] sm:w-[53.4rem] md:w-fit  text-left md:mr-2  ">
        <p
          onClick={
            isComplete?.isProfileCompleted &&
            (() => navigate(`/personal-info?profile=${ProfileID}`))
          }
          className={
            isComplete?.isProfileCompleted
              ? "text-sm p-1.5 px-3  cursor-pointer text-green-400 font-bold   rounded-l-full rounded-r-full"
              : location.pathname === "/personal-info"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : isComplete?.isProfileCompleted &&
                location.pathname === "/personal-info"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : "text-sm p-1.5 px-3  cursor-pointer"
          }
        >
          <i className="fa fa-file-alt me-2 " aria-hidden="true"></i> Personal
          Info
        </p>
        <p
          onClick={
            ProfileID &&
            (() =>
              navigate(
                allData?.experiences?.length != 0
                  ? `/work-history?profile=${ProfileID}`
                  : `/workexp?profile=${ProfileID}`
              ))
          }
          className={
            isComplete?.isWorkCompleted
              ? "text-sm p-1.5 px-3  cursor-pointer text-green-400 font-bold   rounded-l-full rounded-r-full"
              : location.pathname === "/workexp"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : isComplete?.isWorkCompleted && location.pathname === "/workexp"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : "text-sm p-1.5 px-3  cursor-pointer"
          }
        >
          <i className="fa fa-briefcase me-2" aria-hidden="true"></i> Work
          Experience
        </p>
        <p
          onClick={
            ProfileID &&
            (() =>
              navigate(
                allData?.eductaions?.length != 0
                  ? `/education-history?profile=${ProfileID}`
                  : `/education?profile=${ProfileID}`
              ))
          }
          className={
            isComplete?.isEducationCompleted
              ? "text-sm p-1.5 px-3  cursor-pointer  font-bold text-green-400 rounded-l-full rounded-r-full"
              : location.pathname === "/education"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : isComplete?.isWorkCompleted &&
                location.pathname === "/education"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : "text-sm p-1.5 px-3  cursor-pointer"
          }
        >
          <i className="fa fa-graduation-cap me-2" aria-hidden="true"></i>{" "}
          Education
        </p>
        <p
          onClick={ProfileID && (() => navigate(`/skill?profile=${ProfileID}`))}
          className={
            isComplete?.isSkillCompleted
              ? "text-sm p-1.5 px-3  cursor-pointer font-bold   text-green-400 rounded-l-full rounded-r-full"
              : location.pathname === "/skill"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : isComplete?.isWorkCompleted && location.pathname === "/skill"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : "text-sm p-1.5 px-3  cursor-pointer"
          }
        >
          <i class="fa fa-list me-2" aria-hidden="true"></i> Skills
        </p>
        <p
          onClick={
            ProfileID &&
            (() =>
              navigate(
                allData?.projects?.length != 0
                  ? `/project-history?profile=${ProfileID}`
                  : `/add-projects?profile=${ProfileID}`
              ))
          }
          className={
            isComplete?.isProjectCompleted
              ? "text-sm p-1.5 px-3  cursor-pointer   font-bold text-green-400 rounded-l-full rounded-r-full "
              : location.pathname === "/add-projects"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : isComplete?.isWorkCompleted &&
                location.pathname === "/add-projects"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : "text-sm p-1.5 px-3  cursor-pointer"
          }
        >
          <i class="fa fa-laptop-file pr-2" aria-hidden="true"></i>Projects
        </p>
        <p
          onClick={
            ProfileID && (() => navigate(`/interests?profile=${ProfileID}`))
          }
          className={
            isComplete?.isInterestCompleted
              ? "text-sm p-1.5 px-3  cursor-pointer   font-bold text-green-400 rounded-l-full rounded-r-full"
              : location.pathname === "/interests"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : isComplete?.isWorkCompleted &&
                location.pathname === "/interests"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : "text-sm p-1.5 px-3  cursor-pointer"
          }
        >
          <i class="fa fa-list me-2" aria-hidden="true"></i> Interests
        </p>
        <p
          onClick={
            ProfileID && (() => navigate(`/certificates?profile=${ProfileID}`))
          }
          className={
            isComplete?.isCertificateCompleted
              ? "text-sm p-1.5 px-3  cursor-pointer  font-bold text-green-400 rounded-l-full rounded-r-full "
              : location.pathname === "/certificates"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : isComplete?.isWorkCompleted &&
                location.pathname === "/certificates"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : "text-sm p-1.5 px-3  cursor-pointer"
          }
        >
          <i class="fa fa-certificate me-2" aria-hidden="true"></i> Certificates
        </p>
        <p
          onClick={
            ProfileID && (() => navigate(`/languages?profile=${ProfileID}`))
          }
          className={
            isComplete?.isLangCompleted
              ? "text-sm p-1.5 px-3  cursor-pointer  font-bold text-green-400 rounded-l-full rounded-r-full "
              : location.pathname === "/languages"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : isComplete?.isWorkCompleted &&
                location.pathname === "/languages"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : "text-sm p-1.5 px-3  cursor-pointer"
          }
        >
          <i class="fa fa-language me-2" aria-hidden="true"></i> Languages
        </p>
        <p
          onClick={
            ProfileID && (() => navigate(`/social?profile=${ProfileID}`))
          }
          className={
            isComplete?.isSocialCompleted
              ? "text-sm p-1.5 px-3  cursor-pointer  font-bold text-green-400 rounded-l-full rounded-r-full "
              : location.pathname === "/social"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : isComplete?.isWorkCompleted && location.pathname === "/social"
              ? "text-sm p-1.5 px-3  cursor-pointer text-white bg-sky-500 font-bold   rounded-l-full rounded-r-full"
              : "text-sm p-1.5 px-3  cursor-pointer"
          }
        >
          <i class="fa fa-share-square-o me-2" aria-hidden="true"></i> Social
        </p>
        <p
          onClick={() => showNotification("default", "First fill the forms")}
          className={
            "text-sm p-1.5 px-3 relative cursor-pointer  font-bold text-sky-500 bod rounded-l-full rounded-r-full "
          }
        >
          <i class="fas fa-video me-2" aria-hidden="true"></i> Video Profile
          <span className="absolute text-white  text-[10px] top-0 -right-5 px-1 bg-red-500 rounded-r-full rounded-l-full">
            new
          </span>
        </p>
      </div>
    </>
  );
}

export default Sidebar;
