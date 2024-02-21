import React from "react";
import Header from "./section/Header";
import Contact from "./section/Contact";
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
      <Header
        fullname={resumeData?.full_name || PersonalInfoData?.FullName}
        profession={resumeData?.position || PersonalInfoData?.profession}
        summary={resumeData?.summary || PersonalInfoData?.summary}
      />
      <Contact
        email={resumeData?.email || PersonalInfoData?.email}
        City={resumeData?.address || PersonalInfoData?.city}
        phoneNo={resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
        socialLinks={resumeData?.social_links || SocialLinkData}
      />
      <div className="flex gap-x-6 px-4">
        <div className="flex flex-col w-[70%] justify-start">
          {showSection?.Professional && (
            <WorkExp
              experince={resumeData?.experiences}
              reduxExp={Experiencenfo}
            />
          )}

          {showSection?.Projects && (
            <div className="px-2 flex">
              <div>
                <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
                  Projects
                </h1>
                <div>
                  {Projectinfo && (
                    <div className="mt-1  text-justify">
                      <h3 className="text-sm  text-red-400 font-semibold">
                        {Projectinfo?.projectName}
                      </h3>
                      <div className="flex justify-between ">
                        <a
                          href={Projectinfo?.projectLink}
                          className="text-sm text-black"
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
                        className="text-xs custom-list  text-black "
                        dangerouslySetInnerHTML={{
                          __html: Projectinfo?.description,
                        }}
                      ></div>
                    </div>
                  )}
                  {resumeData?.projects?.map((exp, index) => (
                    <div key={exp?.id} className="mt-1  text-justify">
                      <h3 className="text-sm  text-red-400 font-semibold">
                        {exp?.title}
                      </h3>
                      <div className="flex justify-between ">
                        <a href={exp?.link} className="text-sm text-black">
                        {exp?.link}
                        </a>
                        <p className="text-xs text-black">
                          {formatDate(exp?.start_date)} -{" "}
                          {exp?.is_current
                            ? "present"
                            : formatDate(exp?.end_date)}
                        </p>
                      </div>
                      <div
                        className="text-xs custom-list text-black font-medium"
                        dangerouslySetInnerHTML={{
                          __html: exp?.description,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col w-[30%] justify-start">
          {showSection?.Skills && (
            <Skill apiskills={resumeData?.skills} skills={SkillInfoData} />
          )}
          {showSection?.Education && (
            <Education edu={resumeData?.eductaions} reduxEdu={EducationInfo} />
          )}
          {showSection?.Certificate && (
            <Certificate
              certificate={resumeData?.certification}
              reduxCertificate={CertificateInfo}
            />
          )}
          {showSection?.Language && (
            <Language
              languages={resumeData?.languages}
              reduxlanguages={LanguageInfo}
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
      {/* {resumeData?.video_questions?.some((data) => data?.video !== null) && (

      <VideoProfile videoAns={resumeData?.video_questions} />
      )} */}
    </div>
  );
};

export default Template;
