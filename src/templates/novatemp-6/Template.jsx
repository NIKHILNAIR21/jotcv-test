import React from "react";
import Contact from "./section/Contact";
import Header from "./section/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Skill from "./section/Skill";
import WorkExp from "./section/WorkExp";
import Education from "./section/Education";
import Language from "./section/Language";
import Certificate from "./section/Certificate";
import Interest from "./section/Interest";
import VideoProfile from "./section/VideoProfile";
const Template = () => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };

  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const PersonalInfoData = useSelector((state) => state.personalInfo);
  const SocialLinkData = useSelector((state) => state.socialLinks?.social);
  const SkillInfoData = useSelector((state) => state.skills?.skills);
  const EducationInfo = useSelector((state) => state?.education);
  const Experiencenfo = useSelector((state) => state?.workExperience);
  const Projectinfo = useSelector((state) => state?.project);
  const InterestInfo = useSelector((state) => state?.interest?.Interest);
  const CertificateInfo = useSelector(
    (state) => state?.certificate?.Certificate
  );
  const LanguageInfo = useSelector((state) => state?.language?.Language);
  const showSection = useSelector((state) => state?.showSection);
  return (
    <div className="A4  w-[210mm]   h-[297mm] border-b-[2px] ">
      <div className="flex bg-teal-400">
        <Header
          img={resumeData?.profile_picture || PersonalInfoData?.photo}
          fullname={resumeData?.full_name || PersonalInfoData?.FullName}
          profession={resumeData?.position || PersonalInfoData?.profession}
          summary={resumeData?.summary || PersonalInfoData?.summary}
        />
      </div>
      <div className="flex  px-5">
        <div className="w-[50%]">
          <Contact
            email={resumeData?.email || PersonalInfoData?.email}
            City={resumeData?.address || PersonalInfoData?.city}
            phoneNo={resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
            socialLinks={resumeData?.social_links || SocialLinkData}
          />
          {showSection?.Skills && (
            <Skill apiskills={resumeData?.skills} skills={SkillInfoData} />
          )}
          {showSection?.Language && (
            <Language
              languages={resumeData?.languages}
              reduxlanguages={LanguageInfo}
            />
          )}
          {showSection?.Certificate && (
            <Certificate
              certificate={resumeData?.certification}
              reduxCertificate={CertificateInfo}
            />
          )}

          <div className="px-2">
            <h1 className="font-semibold mt-1 uppercase text-base text-left text-teal-400 ">
              Project
            </h1>

            <div>
              {Projectinfo && (
                <div className="mt-1  text-justify">
                  <h3 className="text-base  text-black font-semibold">
                    {Projectinfo?.projectName}
                  </h3>
                  <div className="flex justify-between">
                    <a
                      className="text-base text-black"
                      href={Projectinfo?.projectLink}
                    >
                      {Projectinfo?.projectLink}
                    </a>
                    {Projectinfo?.startDate && (
                      <p className="text-xs text-black">
                        {formatDate(Projectinfo?.startDate)}-{" "}
                        {formatDate(Projectinfo?.endDate)}
                      </p>
                    )}
                  </div>
                  <div
                    className="text-xs custom-list text-black "
                    dangerouslySetInnerHTML={{
                      __html: Projectinfo?.description,
                    }}
                  ></div>
                </div>
              )}
              {resumeData?.projects?.map((prj, index) => (
                <div key={prj?.id} className="mt-1  text-justify">
                  <h3 className="text-base  text-black font-semibold">
                    {prj?.title}
                  </h3>
                  <div className="flex justify-between">
                    <a className="text-sm text-black" href={prj?.link}>
                      {prj?.link}
                    </a>
                    <p className="text-xs text-black">
                      {formatDate(prj?.start_date)} -{" "}
                      {formatDate(prj?.end_date)}
                    </p>
                  </div>
                  <div
                    className="text-xs text-black custom-list"
                    dangerouslySetInnerHTML={{
                      __html: prj?.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* <VideoProfile videoAns={resumeData?.video_questions} /> */}
        </div>
        <div className="w-[50%]">
          {showSection?.Education && (
            <Education edu={resumeData?.eductaions} reduxEdu={EducationInfo} />
          )}
          {showSection?.Professional && (
            <WorkExp
              experince={resumeData?.experiences}
              reduxExp={Experiencenfo}
            />
          )}
          {showSection?.Interest && (
            <Interest
              interest={resumeData?.interests}
              reduxInterest={InterestInfo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Template;
