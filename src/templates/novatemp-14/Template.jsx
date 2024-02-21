import React from "react";
import { useSelector } from "react-redux";
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
    <div>
      <div className="main-container bg-white w-[210mm]   h-[297mm] border-b-[2px] mx-auto flex gap-2 p-5">
        <div className="left w-[60%]">
          <header>
            <div className="flex">
              <img
                className="w-32 h-32"
                src={resumeData?.profile_picture || PersonalInfoData?.photo}
                alt="Profile photo"
              />
              <div className="px-2">
                <h2 className="text-xl">
                  {" "}
                  {resumeData?.full_name || PersonalInfoData?.FullName}
                </h2>
                <h3 className="text-base">
                  {resumeData?.position || PersonalInfoData?.profession}
                </h3>
                <p className="text-xs">
                  {resumeData?.summary || PersonalInfoData?.summary}
                </p>
              </div>
            </div>
          </header>
          {/* work */}
          {showSection?.Professional && (
            <div>
              <h3 className="font-bold text-base my-1">Work Experience</h3>
              <div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-sm font-semibold">
                      {Experiencenfo?.formData?.companyName}
                    </h1>
                    <h2 className="text-sm font-semibold">
                      {Experiencenfo?.formData?.jobPosition}
                    </h2>
                  </div>
                  {Experiencenfo?.formData?.startDate && (
                    <p className="text-xs text-right">
                      {" "}
                      {formatDate(Experiencenfo?.formData?.startDate)} |{" "}
                      {Experiencenfo?.currentlyWorking
                        ? "present"
                        : formatDate(Experiencenfo?.formData?.endDate)}
                    </p>
                  )}
                </div>
                <div
                  className="text-xs custom-list"
                  dangerouslySetInnerHTML={{
                    __html: Experiencenfo?.formData?.jobDescription,
                  }}
                ></div>
              </div>
              {resumeData?.experiences?.map((exp, index) => (
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold">
                        {exp?.company_name}
                      </h1>
                      <h2 className="text-sm font-semibold">
                        {exp?.designation}
                      </h2>
                    </div>
                    <p className="text-xs text-right">
                      {" "}
                      {formatDate(exp?.start_date)} |{" "}
                      {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                    </p>
                  </div>
                  <div
                    className="text-xs custom-list "
                    dangerouslySetInnerHTML={{
                      __html: exp?.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          )}
          {/* Projects */}
          {showSection?.Projects && (
            <div>
              <h2 className="text-base font-bold  p-1  w-fit">Projects</h2>
              {Projectinfo && (
                <div className="flex gap-2 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold">
                        {Projectinfo?.projectName}
                      </h1>
                      <a
                        href={Projectinfo?.projectLink}
                        className="text-sm font-semibold underline"
                      >
                        {Projectinfo?.projectLink}
                      </a>
                    </div>
                    {Projectinfo?.startDate && (
                      <p className="text-xs text-right">
                        {" "}
                        {formatDate(Projectinfo?.startDate)} |{" "}
                        {formatDate(Projectinfo?.endDate)}
                      </p>
                    )}
                  </div>
                  <div
                    className="text-xs  custom-list "
                    dangerouslySetInnerHTML={{
                      __html: Projectinfo?.description,
                    }}
                  ></div>
                </div>
              )}
              {resumeData?.projects?.map((project, index) => (
                <div key={index + 1} className="flex gap-2 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold">
                        {project?.title}
                      </h1>
                      <a
                        href={project?.link}
                        className="text-sm font-semibold underline"
                      >
                        Project Link
                      </a>
                    </div>
                    <p className="text-xs text-right">
                      {" "}
                      {formatDate(project?.start_date)}|
                      {formatDate(project?.end_date)}
                    </p>
                  </div>
                  <div
                    className="text-xs  custom-list "
                    dangerouslySetInnerHTML={{
                      __html: project?.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="right w-[40%]">
          {/* contacts */}
          <div className="w-80 rounded-md p-2 text-sm text-white bg-gray-600">
            <p className="text-xs">
              Email:{resumeData?.email || PersonalInfoData?.email}
            </p>
            <p className="text-xs">
              Phone:{resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
            </p>
            <p className="text-xs">
              city{resumeData?.address || PersonalInfoData?.city}:
            </p>
            <div className="flex gap-2 text-sm flex-wrap">
              {SocialLinkData?.map((item, index) => (
                <a href={item?.link} key={index + 1}>
                  {item?.name}
                </a>
              ))}
              {resumeData?.social_links?.map((item, index) => (
                <a href={item?.link} key={index + 1}>
                  {item?.name}
                </a>
              ))}
            </div>
          </div>
          <div className="w-80 mt-2 rounded-md p-2 text-white bg-gray-600">
            {/* edu */}
            {showSection?.Education && (
              <div>
                <h2 className="text-base font-bold text-white p-1  w-fit">
                  Education
                </h2>
                {!EducationInfo?.isEdit && (
                  <div>
                    <div className="p-1">
                      <p className="text-base font-bold">
                        {EducationInfo?.formData?.schoolName}
                      </p>
                      <h1 className="text-sm ">
                        {EducationInfo?.formData?.degree}
                      </h1>
                    </div>
                    {EducationInfo?.formData?.startDate && (
                      <div className="w-[40%]  p-1">
                        <p className=" text-xs">
                          {" "}
                          {formatDate(EducationInfo?.formData?.startDate)}|{" "}
                          {EducationInfo?.currentlyStudying
                            ? "present"
                            : formatDate(EducationInfo?.formData?.endDate)}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {resumeData?.eductaions?.map((education, index) => (
                  <div>
                    <div className="p-1">
                      <p className="text-base font-bold">{education?.course}</p>
                      <h1 className="text-sm ">{education?.university}</h1>
                    </div>
                    <div className="w-[40%]  p-1">
                      <p className=" text-xs">
                        {" "}
                        {formatDate(education?.start_date)} |{" "}
                        {education?.is_current
                          ? "present"
                          : formatDate(education?.end_date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* skills */}
            {showSection?.Skills && (
              <div className="">
                <h2 className="text-base font-bold text-white p-1 w-fit">
                  Skills
                </h2>
                <div className="flex gap-3 my-2 flex-wrap">
                  {SkillInfoData?.map((item) => (
                    <p className="text-sm p-1">{item?.name}</p>
                  ))}
                  {resumeData?.skills?.map((item) => (
                    <p className="text-sm p-1">{item?.skill}</p>
                  ))}
                </div>
              </div>
            )}
            {/* Languages */}
            {showSection?.Language && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-white p-1 w-fit">
                  Language
                </h2>
                <div className="flex p-1 gap-4 flex-wrap">
                  {LanguageInfo?.map((item) => (
                    <p className="text-sm">{item?.name}</p>
                  ))}
                  {resumeData?.languages?.map((item) => (
                    <p className="text-sm">{item?.language}</p>
                  ))}
                </div>
              </div>
            )}
            {/* interest */}
            {showSection?.Interest && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-white p-1 w-fit">
                  Interests
                </h2>
                <div className="flex flex-wrap gap-4 p-1">
                  {InterestInfo?.map((item) => (
                    <p className="text-sm">{item?.interest}</p>
                  ))}
                  {resumeData?.interests?.map((item) => (
                    <p className="text-sm">{item?.interest}</p>
                  ))}
                </div>
              </div>
            )}
            {/* certificates */}
            {showSection?.Certificate && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-white p-1 w-fit">
                  Certifications
                </h2>
                <div className="flex flex-col gap-1 p-1">
                  {CertificateInfo?.map((item, index) => (
                    <p key={index + 1} className="text-sm">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.certification?.map((item, index) => (
                    <p key={index + 1} className="text-sm">
                      {item?.certificate}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
