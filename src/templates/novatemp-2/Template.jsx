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

import "../../App.css";
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

  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
  console.log(resumeData?.skills);
  return (
    <div className="A4 w-[210mm]   h-[297mm] border-b-[2px]">
      <Header
        img={resumeData?.profile_picture || PersonalInfoData?.photo}
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
        <>
          <Skill apiSkills={resumeData?.skills} skills={SkillInfoData} />
          <div className="flex my-1">
            <p className="w-[90%] mx-auto bg-pink-700 h-1"></p>
            <p className="w-[90%] mx-auto bg-gray-700 h-1"></p>
            <p className="w-[90%] mx-auto bg-blue-700 h-1"></p>
          </div>
        </>
      )}
      {showSection?.Professional && (
        <>
          <WorkExp
            experince={resumeData?.experiences}
            reduxExp={Experiencenfo}
          />
          <div className="flex my-1">
            <p className="w-[90%] mx-auto bg-pink-700 h-1"></p>
            <p className="w-[90%] mx-auto bg-gray-700 h-1"></p>
            <p className="w-[90%] mx-auto bg-blue-700 h-1"></p>
          </div>
        </>
      )}
      {showSection?.Projects && (
        <>
          <div className="px-6  w-full">
            <div>
              <h1 className="font-semibold uppercase text-base mt-1 text-gray-700 ">
                Projects
              </h1>
              <div>
                {Projectinfo && (
                  <div className="mt-1   ">
                    <h3 className="text-sm   text-black font-semibold">
                      {Projectinfo?.projectName}
                    </h3>
                    <div className="flex w-full justify-between items-center">
                      <div>
                        {" "}
                        <a
                          href={Projectinfo?.projectLink}
                          className="text-[15px]   w-[80%]  text-black"
                        >
                          {Projectinfo?.projectLink}
                        </a>
                      </div>
                      <div>
                        {Projectinfo?.startDate && (
                          <p className="text-xs  text-black">
                            {formatDate(Projectinfo?.startDate)}-{" "}
                            {formatDate(Projectinfo?.endDate)}
                          </p>
                        )}{" "}
                      </div>
                    </div>
                    <div
                      className="text-xs custom-list w-fit text-black font-medium"
                      dangerouslySetInnerHTML={{
                        __html: Projectinfo?.description,
                      }}
                    ></div>
                  </div>
                )}
                {resumeData?.projects?.map((exp, index) => (
                  <div key={exp?.id} className="mt-1">
                    <h3 className="text-sm   text-black font-semibold">
                      {exp?.title}
                    </h3>
                    <div className="flex   justify-between">
                      <div>
                        <a
                          href={exp?.link}
                          className="text-[15px]  text-left  text-black"
                        >
                          {exp?.link}
                        </a>
                      </div>

                      <div className="text-sm  text-right text-black">
                        {formatDate(exp?.start_date)} -{" "}
                        {exp?.is_current
                          ? "present"
                          : formatDate(exp?.end_date)}
                      </div>
                    </div>
                    <p
                      className="text-xs w-full custom-list text-black font-medium"
                      dangerouslySetInnerHTML={{ __html: exp?.description }}
                    ></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex my-1">
            <p className="w-[90%] mx-auto bg-pink-700 h-1"></p>
            <p className="w-[90%] mx-auto bg-gray-700 h-1"></p>
            <p className="w-[90%] mx-auto bg-blue-700 h-1"></p>
          </div>{" "}
        </>
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
