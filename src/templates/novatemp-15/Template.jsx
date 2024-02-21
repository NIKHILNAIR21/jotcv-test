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
      <div className="main-container w-[210mm]   h-[297mm] border-b-[2px] mx-auto  p-2.5 bg-white ">
        <header>
          <h2 className="text-xl font-semibold">
            {resumeData?.full_name || PersonalInfoData?.FullName}
          </h2>
          <h3 className="text-base">
            {resumeData?.position || PersonalInfoData?.profession}
          </h3>
          <div>
            <p className="text-white text-xs bg-pink-900 p-2 rounded-md">
              {resumeData?.summary || PersonalInfoData?.summary}
            </p>
          </div>
          {/* contact */}
          <div className="p-2 bg-amber-500 flex-wrap justify-between rounded-md text-sm flex gap-2">
            <p className="text-sm">
              {resumeData?.email || PersonalInfoData?.email}
            </p>
            <p className="text-sm">
              {resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
            </p>
            <p className="text-sm">
              {resumeData?.address || PersonalInfoData?.city}
            </p>
            <div className="flex gap-2  flex-wrap">
              {SkillInfoData?.map((item, index) => (
                <a className="text-sm" href={item?.link} key={index + 1}>
                  {item?.name}
                </a>
              ))}
              {resumeData?.social_links?.map((item, index) => (
                <a className="text-sm" href={item?.link} key={index + 1}>
                  {item?.name}
                </a>
              ))}
            </div>
          </div>
        </header>
        <div className="flex  gap-4">
          <div className="left w-full">
            {/* work exp */}
            {showSection?.Professional && (
              <div className=" p-1">
                <h2 className="font-bold text-pink-900">Work Experience</h2>
                <span className="bg-pink-900 w-full h-[2.3px]  block" />
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
                <h2 className="font-bold text-pink-900">Project</h2>
                <span className="bg-pink-900 w-full h-[2.3px]  block" />
                {/* exp */}
                {Projectinfo && (
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-sm font-semibold">
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
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-sm font-semibold">
                          {project?.title}
                        </h1>
                        <a
                          href={project?.link}
                          className="text-sm font-semibold"
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
          <div className="right  w-full">
            {/* edu */}
            {showSection?.Education && (
              <div>
                <h2 className="text-base font-bold text-pink-900 p-0.5  w-fit">
                  Education
                </h2>
                <span className="bg-pink-900 w-full h-[2.3px]  block" />
                {!EducationInfo?.isEdit && (
                  <div>
                    <div className="p-1">
                      <p className="text-base text-pink-900 font-bold">
                        {EducationInfo?.formData?.degree}
                      </p>
                      <h1 className="text-sm ">
                        {EducationInfo?.formData?.schoolName}
                      </h1>
                    </div>
                    <div className=" p-0.5">
                      {EducationInfo?.formData?.startDate && (
                        <p className=" text-xs">
                          {formatDate(EducationInfo?.formData?.startDate)}|{" "}
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
                      <p className="text-base text-pink-900 font-bold">
                        {education?.course}
                      </p>
                      <h1 className="text-sm ">{education?.university}</h1>
                    </div>
                    <div className=" p-0.5">
                      <p className=" text-xs">
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
            {/* skill */}
            {showSection?.Skills && (
              <div className="">
                <h2 className="text-base font-bold text-pink-900 p-1 w-fit">
                  Skills
                </h2>
                <span className="bg-pink-900 w-full h-[2.3px]  block" />
                <div className="flex gap-3 my-2 flex-wrap">
                  {SkillInfoData?.map((item, index) => (
                    <p
                      key={index}
                      className="text-sm bg-pink-900 rounded p-1 text-white"
                    >
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.skills?.map((item, index) => (
                    <p
                      key={index}
                      className="text-sm bg-pink-900 rounded p-1 text-white"
                    >
                      {item?.skill}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* Interest */}
            {showSection?.Interest && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-pink-900 p-1 w-fit">
                  Interests
                </h2>
                <span className="bg-pink-900 w-full h-[2.3px]  block" />
                <div className="flex flex-wrap gap-4 p-1">
                  {InterestInfo?.map((item) => (
                    <p className="text-sm font-semibold text-pink-900">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.interests?.map((item) => (
                    <p className="text-sm font-semibold text-pink-900">
                      {item?.interest}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* Languages */}
            {showSection?.Language && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-pink-900 p-1 w-fit">
                  Language
                </h2>
                <span className="bg-pink-900 w-full h-[2.3px]  block" />
                <div className="flex p-1 gap-4 flex-wrap">
                  {LanguageInfo?.languages?.map((item) => (
                    <p className="text-sm text-pink-900 font-semibold">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.languages?.map((item) => (
                    <p className="text-sm text-pink-900 font-semibold">
                      {item?.language}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* certificates */}
            {showSection?.Certificate && (
              <div className="mt-2">
                <h2 className="text-base font-bold text-pink-900 p-1 w-fit">
                  Certifications
                </h2>
                <span className="bg-pink-900 w-full h-[2.3px]  block" />
                <div className="flex flex-col gap-1 p-1">
                  {CertificateInfo?.map((item, index) => (
                    <p className="text-sm text-pink-900 font-semibold">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.certification?.map((item, index) => (
                    <p className="text-sm text-pink-900 font-semibold">
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
