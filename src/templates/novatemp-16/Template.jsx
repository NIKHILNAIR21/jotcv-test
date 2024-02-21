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
      <div className="main-container w-[210mm]   h-[297mm] border-b-[2px] mx-auto  p-4 bg-white ">
        <header className="flex  justify-between">
          <div className=" bg-gray-500 p-2 rounded-xl  w-[27rem]">
            <h2 className="text-white font-bold text-xl">
              {resumeData?.full_name || PersonalInfoData?.FullName}
            </h2>
            <h3 className="text-orange-400 font-semibold text-lg">
              {resumeData?.position || PersonalInfoData?.profession}
            </h3>
            <p className="text-white font-semibold text-sm">
              {resumeData?.summary || PersonalInfoData?.summary}
            </p>
          </div>
          {/* contact */}
          <div className="p-2 text-right text-sm ">
            <p className="text-sm">
              Email:{resumeData?.email || PersonalInfoData?.email}
            </p>
            <p className="text-sm">
              Phone:{resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
            </p>
            <p className="text-sm">
              City:{resumeData?.address || PersonalInfoData?.city}
            </p>
            <div className=" text-sm">
              {SocialLinkData?.map((item, index) => (
                <a href={item?.link}>{item?.name}</a>
              ))}
              {resumeData?.social_links?.map((item, index) => (
                <a href={item?.link}>{item?.name}</a>
              ))}
            </div>
          </div>
        </header>
        <div className="flex gap-4">
          <div className="left  w-full">
            {showSection?.Professional && (
              <div className=" p-1">
                <h2 className="font-bold text-gray-500">Work Experience</h2>
                {/* exp */}
                {!Experiencenfo?.isEdit && (
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
                )}
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
                        {exp?.is_current
                          ? "present"
                          : formatDate(exp?.end_date)}
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
            {/* project */}
            {showSection?.Projects && (
              <div className=" p-1">
                <h2 className="font-bold text-gray-500">Project</h2>
                {/* exp */}
                {Projectinfo && (
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-sm font-semibold">
                          {" "}
                          {Projectinfo?.projectName}
                        </h1>
                        <a
                          href={Projectinfo?.projectLink}
                          className="text-sm font-semibold"
                        >
                          {Projectinfo?.projectLink}
                        </a>
                      </div>
                      {Projectinfo?.startDate && (
                        <p className="text-xs text-right">
                          {formatDate(Projectinfo?.startDate)} |{" "}
                          {formatDate(Projectinfo?.endDate)}
                        </p>
                      )}
                    </div>
                    <div
                      className="text-xs custom-list "
                      dangerouslySetInnerHTML={{
                        __html: Projectinfo?.description,
                      }}
                    ></div>
                  </div>
                )}
                {resumeData?.projects?.map((project, index) => (
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-sm font-semibold">
                          {" "}
                          {project?.title}
                        </h1>
                        <a
                          href={project?.link}
                          className="text-sm font-semibold"
                        >
                          {project?.link}
                        </a>
                      </div>
                      <p className="text-xs text-right">
                        {formatDate(project?.start_date)}|
                        {formatDate(project?.end_date)}
                      </p>
                    </div>
                    <div
                      className="text-xs custom-list "
                      dangerouslySetInnerHTML={{
                        __html: project?.description,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            )}
            {/* edu */}
            {showSection?.Education && (
              <div>
                <h2 className="text-base font-bold text-gray-500  w-fit">
                  Education
                </h2>
                {!EducationInfo?.isEdit && (
                  <div>
                    <div className="">
                      <p className="text-base text-gray-500 font-bold">
                        {EducationInfo?.formData?.degree}
                      </p>
                      <h1 className="text-sm ">
                        {EducationInfo?.formData?.schoolName}
                      </h1>
                    </div>
                    <div className="  ">
                      {EducationInfo?.formData?.startDate && (
                        <p className=" text-xs">
                          {" "}
                          {formatDate(
                            EducationInfo?.formData?.startDate
                          )} |{" "}
                          {EducationInfo?.currentlyStudying
                            ? "present"
                            : formatDate(EducationInfo?.formData?.endDate)}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {resumeData?.eductaions?.map((education, index) => (
                  <div>
                    <div className="p-1">
                      <p className="text-base text-gray-500 font-bold">
                        {education?.course}
                      </p>
                      <h1 className="text-sm ">{education?.university}</h1>
                    </div>
                    <div className="  p-1">
                      <p className=" text-xs">
                        {formatDate(education?.start_date)} |
                        {education?.is_current
                          ? "present"
                          : formatDate(education?.end_date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="right w-full">
            {/* skill */}
            {showSection?.Skills && (
              <div className="">
                <h2 className="text-base font-bold text-gray-500  w-fit">
                  Skills
                </h2>
                <div className="flex gap-3   flex-wrap">
                  {resumeData?.skills?.map((item, index) => (
                    <p
                      key={index}
                      className="text-sm bg-gray-500 text-white rounded p-1"
                    >
                      {item?.skill}
                    </p>
                  ))}
                  {SkillInfoData?.map((item, index) => (
                    <p
                      key={index}
                      className="text-sm bg-gray-500 text-white rounded p-1"
                    >
                      {item?.name}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* Interest */}
            {showSection?.Interest && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-gray-500  w-fit">
                  Interests
                </h2>
                <div className="flex flex-wrap gap-3 ">
                  {InterestInfo?.map((item, index) => (
                    <p className="text-sm text-gray-500">{item?.name}</p>
                  ))}
                  {resumeData?.interests.map((item, index) => (
                    <p className="text-sm text-gray-500">{item?.interest}</p>
                  ))}
                </div>
              </div>
            )}
            {/* Languages */}
            {showSection?.Language && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-gray-500  w-fit">
                  Language
                </h2>
                <div className="flex  gap-2.5 flex-wrap">
                  {LanguageInfo?.map((item) => (
                    <p className="text-sm text-gray-500 font-semibold">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.languages?.map((item) => (
                    <p className="text-sm text-gray-500 font-semibold">
                      {item?.language}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* certificates */}
            {showSection?.Certificate && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-gray-500  w-fit">
                  Certifications
                </h2>
                <div className="flex flex-col gap-1.5">
                  {CertificateInfo?.map((item, index) => (
                    <p className="text-sm text-gray-500 font-semibold">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.certification?.map((item, index) => (
                    <p className="text-sm text-gray-500 font-semibold">
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
