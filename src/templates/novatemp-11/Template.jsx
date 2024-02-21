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
  let question = 0;
  return (
    <div>
      <div className="flex w-[210mm]   h-[297mm] border-b-[2px] mx-auto  justify-between ">
        <div className="left w-[65%] bg-white px-8 py-5 ">
          <div>
            <h1 className="text-xl capitalize">
              {resumeData?.full_name || PersonalInfoData?.FullName}
            </h1>
            <h2 className="text-base capitalize text-sky-400">
              {resumeData?.position || PersonalInfoData?.profession}
            </h2>
            <div className="flex gap-2">
              <p className="text-xs">
                {resumeData?.email || PersonalInfoData?.email}
              </p>
              <p className="text-xs">
                {resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
              </p>
              <p className="text-xs">
                {resumeData?.address || PersonalInfoData?.city}
              </p>
            </div>
            <div className="flex gap-2 text-xs">
              {SocialLinkData?.map((item, index) => (
                <a className href={item?.link} key={index + 1}>
                  {item?.name}
                </a>
              ))}
              {resumeData?.social_links?.map((item, index) => (
                <a className href={item?.link} key={index + 1}>
                  {item?.name}
                </a>
              ))}
            </div>
          </div>
          {/* work */}
          {showSection?.Professional && (
            <div className="mt-1">
              <h2 className="text-base">Work Experience</h2>
              <span className="bg-black w-[100%] h-[1.3px] block" />
              {/* exp */}
              {!Experiencenfo?.isEdit && (
                <div className=" mt-1 justify-between">
                  <div className="mt-1 flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold ">
                        {Experiencenfo?.formData?.companyName}
                      </h1>
                      <h2 className="text-sm ">
                        {Experiencenfo?.formData?.jobPosition}
                      </h2>
                    </div>
                    {Experiencenfo?.formData?.startDate && (
                      <div className="w-[100%]">
                        <p className=" text-right text-xs">
                          {formatDate(Experiencenfo?.formData?.startDate)}-{" "}
                          {Experiencenfo?.currentlyWorking
                            ? "present"
                            : formatDate(Experiencenfo?.formData?.endDate)}
                        </p>
                      </div>
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
                <div className="justify-between">
                  <div className="mt-1 flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold ">
                        {exp?.company_name}
                      </h1>
                      <h2 className="text-sm font-semibold">
                        {exp?.designation}
                      </h2>
                    </div>
                    <div className="w-[100%]">
                      <p className=" text-right text-xs">
                        {" "}
                        {formatDate(exp?.start_date)} |{" "}
                        {exp?.is_current
                          ? "present"
                          : formatDate(exp?.end_date)}
                      </p>
                    </div>
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
            <div className="mt-1 ">
              <h2 className="text-base ">Projects</h2>
              <span className="bg-black w-[100%] h-[1.3px] block" />
              {/* prj */}
              {Projectinfo && (
                <div className=" mt-1 ">
                  <div className="mt-1 flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold ">
                        {Projectinfo?.projectName}
                      </h1>
                      <a
                        href={Projectinfo?.projectLink}
                        className="text-sm font-semibold underline"
                      >
                        {Projectinfo?.projectLink}
                      </a>
                    </div>

                    <div className="">
                      {Projectinfo?.startDate && (
                        <p className="text-xs ">
                          {formatDate(Projectinfo?.startDate)} -{" "}
                          {formatDate(Projectinfo?.endDate)}
                        </p>
                      )}
                    </div>
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
                <div className=" mt-1  w-full">
                  <div className="mt-1 flex justify-between">
                    <div className="">
                      {" "}
                      <h1 className="text-sm font-semibold ">
                        {project?.title}
                      </h1>
                      <a
                        href={project?.link}
                        className="text-sm font-semibold underline"
                      >
                        {project?.link}
                      </a>
                    </div>

                    <div className="">
                      <p className="  text-xs">
                        {formatDate(project?.start_date)}|
                        {formatDate(project?.end_date)}
                      </p>
                    </div>
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
          {/* education */}
        </div>
        <div className="right w-[35%]  px-2 py-8  bg-sky-900">
          <div className="flex justify-center">
            <img
              className="rounded-full w-28 h-28"
              src={resumeData?.profile_picture || PersonalInfoData?.photo}
              alt={resumeData?.full_name || PersonalInfoData?.FullName}
            />
          </div>
          <div>
            <div className="mt-4 text-white">
              <h2 className="text-sm">Summary</h2>
              <span className="bg-white w-[100%]  h-[1.3px] block" />
              <p className="text-xs ">
                {resumeData?.summary || PersonalInfoData?.summary}
              </p>
            </div>
            {showSection?.Education && (
              <div className="mt-2 text-white">
                <h2 className="text-base ">Education</h2>
                <span className="bg-white w-[100%] h-[1.3px] block" />
                {/* exp */}
                {!EducationInfo?.isEdit && (
                  <div className="flex item-start mt-1 justify-between">
                    <div className="text-white">
                      <h1 className="text-sm font-semibold ">
                        {EducationInfo?.formData?.schoolName}
                      </h1>
                      <p className="text-sm font-semibold ">
                        {EducationInfo?.formData?.degree}
                      </p>
                    </div>
                    {EducationInfo?.formData?.startDate && (
                      <div className="text-white">
                        <p className=" text-right text-xs">
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
                    className="flex item-start mt-1 justify-between"
                  >
                    <div className="text-white">
                      <h1 className="text-sm font-semibold ">
                        {education?.university}
                      </h1>
                      <p className="text-sm font-semibold ">
                        {education?.course}
                      </p>
                    </div>
                    <div className="text-white">
                      <p className=" text-right text-xs">
                        {formatDate(education?.start_date)} |{" "}
                        {education?.is_current
                          ? "present"
                          : formatDate(education?.end_date)}{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/*  */}
            {showSection?.Certificate && (
              <div className="mt-1 ">
                <h2 className="text-base text-white">Certification</h2>
                <span className="bg-white w-[100%] h-[1.3px] block" />
                <div className="flex flex-col text-left text-white gap-2 mt-1">
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
            {/* */}
            {showSection?.Interest && (
              <div className="mt-1 text-white">
                <h2 className="text-base ">Interests</h2>
                <span className="bg-white w-[100%] h-[1.3px] block" />
                <div className="flex flex-wrap gap-2 mt-1">
                  {InterestInfo?.map((item, index) => (
                    <p className="text-sm">{item?.name}</p>
                  ))}
                  {resumeData?.interests.map((item, index) => (
                    <p className="text-sm">{item?.interest}</p>
                  ))}
                </div>
              </div>
            )}
            {/* skill */}
            {showSection?.Skills && (
              <div className="mt-2 text-white">
                <h2 className="text-base">Skills</h2>
                <span className="bg-white w-[100%] h-[1.3px] block" />
                <div className="flex flex-wrap gap-2 mt-1">
                  {SkillInfoData?.map((item, index) => (
                    <p key={index} className="text-sm">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.skills?.map((item, index) => (
                    <p key={index} className="text-sm">
                      {item?.skill}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* */}
            {showSection?.Language && (
              <div className="mt-1 text-white">
                <h2 className="text-base">Language</h2>
                <span className="bg-white w-[100%] h-[1.3px] block" />
                <div className="flex gap-2 mt-1">
                  {LanguageInfo?.map((item, index) => (
                    <p key={index} className="text-sm">
                      {item?.name}
                    </p>
                  ))}
                  {resumeData?.languages?.map((item, index) => (
                    <p key={index} className="text-sm">
                      {item?.language}
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
