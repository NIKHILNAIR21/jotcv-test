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
const Template = () => {
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
  const formatDate = (dateString) => {
    if (!dateString) return null;

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };

  
  return (
    <div className="A4 w-[210mm]   h-[297mm] border-b-[2px]">
      <Header
        // img={resumeData?.profile_picture}
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
      {showSection?.Skills && (
        <Skill apiskills={resumeData?.skills} skills={SkillInfoData} />
      )}
      {showSection?.Professional && (
        <WorkExp experince={resumeData?.experiences} reduxExp={Experiencenfo} />
      )}
      {/* project */}
      {showSection?.Projects && (
        <div className="px-6">
          <h1 className="font-semibold uppercase text-base mt-2 text-gray-700 ">
            Projects
          </h1>
          <div className="my-1">
            {Projectinfo && (
              <div className=" pt-1 text-justify">
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
                    <p className="text-xs  text-black">
                      {formatDate(Projectinfo?.startDate)}-{" "}
                      {formatDate(Projectinfo?.endDate)}
                    </p>
                  )}{" "}
                </div>
                <div
                  className="text-sm custom-list text-black font-medium"
                  dangerouslySetInnerHTML={{
                    __html: Projectinfo?.description,
                  }}
                ></div>
              </div>
            )}
            {resumeData?.projects?.map((exp, index) => (
              <div key={exp?.id} className=" pt-1 text-justify">
                <h3 className="text-sm  text-black font-semibold">
                  {exp?.title}
                </h3>
                <div className="flex justify-between">
                  <a href={exp?.link} className="text-sm text-black">
                    Project Link
                  </a>
                  <p className="text-sm text-black">
                    {formatDate(exp?.start_date)} - {formatDate(exp?.end_date)}
                  </p>
                </div>
                <div
                  className="text-sm text-black custom-list font-medium"
                  dangerouslySetInnerHTML={{
                    __html: exp?.description,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}
      {showSection?.Education && (
        <Education edu={resumeData?.eductaions} reduxEdu={EducationInfo} />
      )}
      {showSection?.Language && <Language languages={resumeData?.languages} reduxlanguages={LanguageInfo} />}
      {showSection?.Certificate && (
        <Certificate certificate={resumeData?.certification}   reduxCertificate={CertificateInfo}/>
      )}
      {showSection?.Interest && <Interest interest={resumeData?.interests}   reduxInterest={InterestInfo}/>}
      {/* {resumeData?.video_questions?.some((data) => data?.video !== null) && (

      <VideoProfile videoAns={resumeData?.video_questions} />
      )} */}
    </div>
  );
};

export default Template;
