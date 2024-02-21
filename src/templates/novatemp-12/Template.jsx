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
    <div className=" w-[210mm]   h-[297mm] border-b-[2px]  mx-auto ">
      <div className="main_container  flex">
        <div className="w-[70%] px-3 bg-white">
          {/* header */}
          <div>
            <h1 className="text-xl font-bold mt-2 text-indigo-600">
              {resumeData?.full_name || PersonalInfoData?.FullName}
            </h1>
            <p className="text-base text-gray-600">{resumeData?.position}</p>
            <div className="flex gap-3  flex-wrap">
              <p className="text-xs">{resumeData?.mobile_no}</p>
              <p className="text-xs">
                {resumeData?.email || PersonalInfoData?.email}
              </p>
              <p className="text-xs">
                {resumeData?.address || PersonalInfoData?.city}
              </p>
              <div className="flex gap-3">
                {SocialLinkData?.map((item, index) => (
                  <a className="text-xs" href={item?.link} key={index + 1}>
                    {item?.name}
                  </a>
                ))}
                {resumeData?.social_links?.map((item, index) => (
                  <a className="text-xs" href={item?.link} key={index + 1}>
                    {item?.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-base text-left font-bold">Summary</h2>
            <span className="bg-black w-[100%] h-[2.3px] block" />
            <p className="text-justify text-xs">
              {" "}
              {resumeData?.summary || PersonalInfoData?.summary}
            </p>
          </div>
          {/* exp */}
          {showSection?.Professional && (
            <div className="mt-2">
              <h2 className="text-base font-bold text-left">Experience</h2>
              <span className="bg-black w-[100%] h-[2.3px] block" />
              {/* exp */}
              {!Experiencenfo?.isEdit && (
                <div className="flex flex-col item-start mt-1.5 justify-between">
                  <div className=" flex justify-between ">
                    <div className="flex flex-col">
                      <h1 className="text-sm font-semibold">
                        {Experiencenfo?.formData?.companyName}
                      </h1>
                      <h2 className="text-sm font-semibold">
                        {Experiencenfo?.formData?.jobPosition}
                      </h2>
                    </div>
                    {Experiencenfo?.formData?.startDate && (
                      <p className="text-xs text-right">
                        {formatDate(Experiencenfo?.formData?.startDate)}-{" "}
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
              )}
              {resumeData?.experiences?.map((exp, index) => (
                <div
                  key={index + 1}
                  className="flex flex-col item-start mt-1.5 justify-between"
                >
                  <div className=" flex justify-between ">
                    <div className="flex flex-col">
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
                    className="text-xs custom-list"
                    dangerouslySetInnerHTML={{
                      __html: exp?.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          )}
          {/* prj */}
          {showSection?.Projects && (
            <div className="mt-2">
              <h2 className="text-base font-bold text-left">Projects</h2>
              <span className="bg-black w-[100%] h-[2.3px] block" />
              {/* exp */}
              {Projectinfo && (
                <div className="flex flex-col item-start mt-1.5 justify-between">
                  <div className=" flex justify-between">
                    <div className="flex flex-col  ">
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
                        {formatDate(Projectinfo?.startDate)} -{" "}
                        {formatDate(Projectinfo?.endDate)}
                      </p>
                    )}
                  </div>
                  <div
                    className="text-xs custom-list"
                    dangerouslySetInnerHTML={{
                      __html: Projectinfo?.description,
                    }}
                  ></div>
                </div>
              )}
              {resumeData?.projects?.map((project, index) => (
                <div className="flex flex-col item-start mt-1.5 justify-between">
                  <div className=" flex justify-between">
                    <div className="flex flex-col  ">
                      <h1 className="text-sm font-semibold">
                        {project?.title}
                      </h1>
                      <a
                        href={project?.link}
                        className="text-sm font-semibold underline"
                      >
                        {project?.link}
                      </a>
                    </div>
                    <p className="text-xs text-right">
                      {" "}
                      {formatDate(project?.start_date)} |{" "}
                      {formatDate(project?.end_date)}
                    </p>
                  </div>
                  <div
                    className="text-xs custom-list"
                    dangerouslySetInnerHTML={{
                      __html: project?.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-[30%] bg-emerald-800 px-3 min-h-screen">
          <div>
            <img
              src={resumeData?.profile_picture || PersonalInfoData?.photo}
              alt={resumeData?.full_name || PersonalInfoData?.FullName}
              className="w-28 h-28 mt-2 mx-auto rounded-full"
            />
          </div>
          {/* edu*/}
          {showSection?.Education && (
            <div className="mt-2 px-3">
              <h2 className="text-base text-white font-bold text-left">
                Education
              </h2>
              <span className="bg-white w-[100%] h-[2.3px] block" />
              {/* exp */}
              {!EducationInfo?.isEdit && (
                <div className="flex item-start mt-1.5 justify-between">
                  <div className="text-white">
                    <h1 className="text-sm font-semibold">
                      {EducationInfo?.formData?.schoolName}
                    </h1>
                    <p className="text-sm">{EducationInfo?.formData?.degree}</p>
                  </div>
                  {EducationInfo?.formData?.startDate && (
                    <div className="w-[40%] text-white">
                      <p className="text-right text-xs">
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
                <div
                  key={index + 1}
                  className="flex item-start mt-1.5 justify-between"
                >
                  <div className="text-white">
                    <h1 className="text-sm font-semibold">
                      {education?.university}
                    </h1>
                    <p className="text-sm">{education?.course}</p>
                  </div>
                  <div className="w-[40%] text-white">
                    <p className="text-right text-xs">
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

          {/*Certification */}
          {showSection?.Certificate && (
            <div className="mt-2 px-3 text-center">
              <h2 className="text-base text-left text-white font-bold">
                Certification
              </h2>
              <span className="bg-white w-[100%] h-[2.3px] block" />
              <div className="text-sm mt-2 text-left  text-white">
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
          {/* interest */}
          {showSection?.Interest && (
            <div className="mt-2 px-3">
              <h2 className="text-base font-bold text-white">Interests</h2>
              <span className="bg-white w-[100%] h-[2.3px] block" />

              <div className="flex text-white gap-4 mt-2">
                {InterestInfo?.map((item) => (
                  <p className="text-sm">{item?.name}</p>
                ))}
                {resumeData?.interests?.map((item) => (
                  <p className="text-sm">{item?.interest}</p>
                ))}
              </div>
            </div>
          )}
          {/* skill */}
          {showSection?.Skills && (
            <div className=" mt-2 px-3">
              <h2 className="text-base font-bold text-white">Skills</h2>
              <span className="bg-white w-[100%] h-[2.3px] block" />
              <div className="flex text-white  flex-wrap gap-4 mt-2">
                {SkillInfoData?.map((item) => (
                  <p className="text-sm">{item?.name}</p>
                ))}
                {resumeData?.skills?.map((item) => (
                  <p className="text-sm">{item?.skill}</p>
                ))}
              </div>
            </div>
          )}
          {/* Language */}
          {showSection?.Language && (
            <div className="mt-2 px-3">
              <h2 className="text-base font-bold text-white">Language</h2>
              <span className="bg-white w-[100%] h-[2.3px] block" />
              <div className="flex text-white gap-4 mt-2">
                {LanguageInfo?.map((item) => (
                  <p className="text-sm">{item?.name}</p>
                ))}
                {resumeData?.languages?.map((item) => (
                  <p className="text-sm">{item?.language}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template;
