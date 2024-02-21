import React from "react";
import Contact from "./section/Contact";
import Header from "./section/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Skill from "../novatemp-4/section/Skill";
import WorkExp from "../novatemp-4/section/WorkExp";
import Education from "../novatemp-4/section/Education";
import Language from "../novatemp-4/section/Language";
import Certificate from "../novatemp-4/section/Certificate";
import Interest from "../novatemp-4/section/Interest";
import VideoProfile from "../novatemp-4/section/VideoProfile";
import "../../App.css";
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
    <div className="A4 px-3 w-[210mm]   h-[297mm] border-b-[2px]">
      <div className="flex justify-between px-4">
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
      </div>
      {showSection?.Skills && (
        <Skill apiskills={resumeData?.skills} skills={SkillInfoData} />
      )}
      {showSection?.Professional && (
        <WorkExp experince={resumeData?.experiences} reduxExp={Experiencenfo} />
      )}
      {showSection?.Projects && (
        <div className="px-2">
          <div className="border-t-2 border-gray-700 border-b-2">
            <h1 className="font-semibold uppercase text-base text-center text-gray-700 ">
              Project
            </h1>
          </div>
          {Projectinfo && (
            <div>
              <div className="mt-2  p text-justify">
                <h3 className="text-sm  text-black font-semibold">
                  {Projectinfo?.projectName}
                </h3>
                <div className="flex justify-between">
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
                  dangerouslySetInnerHTML={{
                    __html: Projectinfo?.description,
                  }}
                  className="text-xs text-black custom-list"
                ></div>
              </div>
            </div>
          )}
          <div>
            {resumeData?.projects?.map((exp, index) => (
              <div key={exp?.id} className="mt-2  p text-justify">
                <h3 className="text-sm  text-black font-semibold">
                  {exp?.title}
                </h3>
                <div className="flex justify-between">
                  <a href={exp?.link} className="text-sm text-black">
                    Project link
                  </a>
                  <p className="text-xs text-black">
                    {formatDate(exp?.start_date)} - {formatDate(exp?.end_date)}
                  </p>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: exp?.description,
                  }}
                  className="text-xs text-black custom-list"
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showSection?.Education && (
        <Education edu={resumeData?.eductaions} reduxEdu={EducationInfo} />
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
      {showSection?.Interest && (
        <Interest
          interest={resumeData?.interests}
          reduxInterest={InterestInfo}
        />
      )}
    </div>
  );
};

export default Template;
