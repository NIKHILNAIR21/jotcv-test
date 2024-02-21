import React from "react";
import { useSelector } from "react-redux";
const Template = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );

  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
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
  console.log(resumeData?.languages);
  return (
    <div>
      <div className="main-container w-[210mm]   h-[297mm] border-b-[2px] mx-auto">
        <div className="header flex p-3 gap-5 item-center justify-between bg-slate-700">
          <div className="">
            <h1 className="text-xl text-white font-semibold">
              {resumeData?.full_name || PersonalInfoData?.FullName}
            </h1>
            <h2 className="text-base text-red-500 font-semibold">
              {resumeData?.position || PersonalInfoData?.profession}
            </h2>
            <p className="text-sm text-justify text-white">
              {resumeData?.summary || PersonalInfoData?.summary}
            </p>
          </div>
          {/* photo */}
          <div className="border-4 w-32 h-28  border-red-500 rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-md">
            <img
              className="w-full h-full rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-md"
              src={resumeData?.profile_picture || PersonalInfoData?.photo}
              alt=""
            />
          </div>
        </div>
        {/* contacts */}
        <div className="flex gap-3 p-2 bg-slate-900 text-white justify-evenly text-sm flex-wrap">
          <p className="text-sm">
            {resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
          </p>
          <p className="text-sm">
            {resumeData?.email || PersonalInfoData?.email}
          </p>
          <p className="text-sm">
            {resumeData?.address || PersonalInfoData?.city}
          </p>
          <div className="flex gap-3 flex-wrap">
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
        {/* resume-section */}
        <div className="flex gap-x-4 px-2">
          <div className="left w-full">
            {/* work */}
            {showSection?.Professional && (
              <div className="flex-col flex gap-2">
                <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                  Work Experinece
                </h2>
                {!Experiencenfo?.isEdit && (
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-[15.7px] font-bold">
                          {Experiencenfo?.formData?.companyName}
                        </h1>
                        <h2 className="text-[15px] font-semibold">
                          {" "}
                          {Experiencenfo?.formData?.jobPosition}
                        </h2>
                      </div>
                      {Experiencenfo?.formData?.startDate && (
                        <p className="text-xs text-right">
                          {formatDate(
                            Experiencenfo?.formData?.startDate,
                            "short"
                          )}
                          -{" "}
                          {Experiencenfo?.currentlyWorking
                            ? "present"
                            : formatDate(
                                Experiencenfo?.formData?.endDate,
                                "short"
                              )}
                        </p>
                      )}
                    </div>

                    <div
                      className="text-xs  px-3  custom-list"
                      dangerouslySetInnerHTML={{
                        __html: Experiencenfo?.formData?.jobDescription,
                      }}
                    ></div>
                  </div>
                )}
                {resumeData?.experiences?.map((exp, index) => (
                  <div key={index + 1}>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-[15.7px] font-bold">
                          {exp?.company_name}
                        </h1>
                        <h2 className="text-[15px] font-semibold">
                          {" "}
                          {exp?.designation}
                        </h2>
                      </div>
                      <p className="text-xs text-right">
                        {" "}
                        {formatDate(exp?.start_date, "short")} |{" "}
                        {exp?.is_current
                          ? "present"
                          : formatDate(exp?.end_date, "short")}
                      </p>
                    </div>
                    <div
                      className="text-xs px-3   custom-list "
                      dangerouslySetInnerHTML={{
                        __html: exp?.description,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            )}
            {showSection?.Education && (
              <div>
                <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                  Education
                </h2>
                {/* edu */}
                {!EducationInfo?.isEdit && (
                  <div>
                    <div className="p-1 ">
                      <p className="text-base font-bold">
                        {EducationInfo?.formData?.degree}
                      </p>
                      <h1 className="text-sm ">
                        {EducationInfo?.formData?.schoolName}
                      </h1>
                    </div>
                    {EducationInfo?.formData?.startDate && (
                      <div className="w-[40%]  p-1">
                        <p className=" text-xs text-red-500">
                          {" "}
                          {formatDate(
                            EducationInfo?.formData?.startDate,
                            "short"
                          )}{" "}
                          |{" "}
                          {EducationInfo?.currentlyStudying
                            ? "present"
                            : formatDate(
                                EducationInfo?.formData?.endDate,
                                "short"
                              )}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {resumeData?.eductaions?.map((education, index) => (
                  <div>
                    <div className="p-1 " key={index + 1}>
                      <p className="text-base font-bold">{education?.course}</p>
                      <h1 className="text-sm "> {education?.university}</h1>
                    </div>
                    <div className="w-[40%]  p-1">
                      <p className=" text-xs text-red-500">
                        {" "}
                        {formatDate(education?.start_date, "short")} |{" "}
                        {education?.is_current
                          ? "present"
                          : formatDate(education?.end_date, "short")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="right w-full">
            {showSection?.Skills && (
              <div>
                <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                  Skills
                </h2>
                <div className="flex gap-3 my-2  flex-wrap">
                  {SkillInfoData?.map((item) => (
                    <p className="text-sm rounded p-1 border border-red-500">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.skills?.map((item) => (
                    <p className="text-sm rounded p-1 border border-red-500">
                      {item?.skill}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* project */}
            {showSection?.Projects && (
              <div className="flex-col flex gap-2">
                <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                  Projects
                </h2>
                {/* exp */}
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
                          {formatDate(Projectinfo?.startDate, "short")} |
                          {formatDate(Projectinfo?.endDate, "short")}{" "}
                        </p>
                      )}
                    </div>
                    <div className="">
                      <div
                        className="text-xs custom-list"
                        dangerouslySetInnerHTML={{
                          __html: Projectinfo?.description,
                        }}
                      ></div>
                    </div>
                  </div>
                )}
                {resumeData?.projects?.map((project, index) => (
                  <div className="flex gap-2 flex-col">
                    <div className="flex justify-between">
                      <div>
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
                        {formatDate(project?.start_date, "short")}|
                        {formatDate(project?.end_date, "short")}{" "}
                      </p>
                    </div>
                    <div className="">
                      <p
                        className="text-xs custom-list"
                        dangerouslySetInnerHTML={{
                          __html: project?.description,
                        }}
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* languages */}
            {showSection?.Language && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                  Language
                </h2>
                <div className="flex p-1 gap-4  flex-wrap">
                  {LanguageInfo?.map((item, index) => (
                    <p key={index + 1} className="text-sm">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.languages?.map((item, index) => (
                    <p key={index + 1} className="text-sm">
                      {item?.language}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* interest */}
            {showSection?.Interest && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                  Interests
                </h2>
                <div className="flex flex-wrap gap-4 p-1">
                  {resumeData?.interests?.map((item) => (
                    <p className="text-sm">{item?.interest}</p>
                  ))}
                  {InterestInfo?.map((item) => (
                    <p className="text-sm">{item?.name}</p>
                  ))}
                </div>
              </div>
            )}
            {/* certificates */}
            {showSection?.Certificate && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
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
