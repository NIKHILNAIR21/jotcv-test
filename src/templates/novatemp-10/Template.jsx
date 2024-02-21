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
  
  let question = 0;
  return (
    <div className="">
      <div className="  bg-white px-8 py-4  w-[210mm]   h-[297mm] border-b-[2px] mx-auto">
        <header className="text-center font-serif">
          <div>
            <h2 className="text-xl capitalize">
              {resumeData?.full_name || PersonalInfoData?.FullName}
            </h2>
            <h4 className="text-base capitalize">
              {" "}
              {resumeData?.position || PersonalInfoData?.profession}
            </h4>
          </div>
          <div className="flex justify-center  gap-2">
            <p className="text-sm">
              {resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
            </p>
            <p className="text-sm">
              {resumeData?.email || PersonalInfoData?.email}
            </p>
            <p className="text-sm">
              {resumeData?.address || PersonalInfoData?.city}
            </p>
            <div>
              {SocialLinkData?.map((item) => (
                <a
                  href={item?.link}
                  className="text-sm capitalize px-1"
                  key={item?.id}
                >
                  {item?.name}
                </a>
              ))}
              {resumeData?.social_links?.map((item) => (
                <a
                  href={item?.link}
                  className="text-sm capitalize px-1"
                  key={item?.id}
                >
                  {item?.name}
                </a>
              ))}
            </div>
          </div>
        </header>
        {/* summary */}
        <div className="text-left mt-2">
          <h2 className="text-base">Summary</h2>
          <span className="bg-black w-[100%] h-[2.3px] block" />
          <p className="text-justify text-xs">
            {resumeData?.summary || PersonalInfoData?.summary}
          </p>
        </div>
        {/* skill */}
        {showSection?.Skills && (
          <div className="mt-2 text-left">
            <h2 className="text-base">Skills</h2>
            <span className="bg-black w-[100%] h-[2.3px] block" />
            <div className="flex flex-wrap gap-4 mt-2">
              {SkillInfoData?.map((item, index) => (
                <p key={index + 1} className="text-sm">
                  {item?.name}
                </p>
              ))}
              {resumeData?.skills.map((item, index) => (
                <p key={index + 1} className="text-sm">
                  {item?.skill}
                </p>
              ))}
            </div>
          </div>
        )}
        {/* Work EXP */}
        {showSection?.Professional && (
          <div className="mt-2 ">
            <h2 className="text-base text-left">Experience</h2>
            <span className="bg-black w-[100%] h-[2.3px] block" />
            {/* exp */}
            {!Experiencenfo?.isEdit && (
              <div className=" mt-1.5 ">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-sm font-semibold ">
                      {Experiencenfo?.formData?.companyName}
                    </h1>
                    <h2 className="text-sm capitalize">
                      {Experiencenfo?.formData?.jobPosition}
                    </h2>
                  </div>
                  {Experiencenfo?.formData?.startDate && (
                    <div className=" text-right text-sm">
                      {formatDate(Experiencenfo?.formData?.startDate)}-{" "}
                      {Experiencenfo?.currentlyWorking
                        ? "present"
                        : formatDate(Experiencenfo?.formData?.endDate)}
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
              <div key={index + 1} className=" mt-1.5 ">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-sm font-semibold ">
                      {exp?.company_name}
                    </h1>
                    <h2 className="text-sm capitalize">{exp?.designation}</h2>
                  </div>

                  <div className=" text-right text-sm">
                    {" "}
                    {formatDate(exp?.start_date)} |{" "}
                    {exp?.is_current ? "present" : formatDate(exp?.end_date)}
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
        {/* Projects */}
        {showSection?.Projects && (
          <div className="mt-2 ">
            <h2 className="text-base text-left">Projects</h2>
            <span className="bg-black w-[100%] h-[2.3px] block" />
            {/* PRJ */}
            {Projectinfo && (
              <div className="flex item-start mt-1.5 justify-between">
                <div className="">
                  <h1 className="text-sm font-semibold ">
                    {Projectinfo?.projectName}
                  </h1>
                  <a
                    href={Projectinfo?.projectLink}
                    className="text-xs font-medium underline"
                  >
                    {Projectinfo?.projectLink}
                  </a>
                  <div
                    className="text-xs custom-list"
                    dangerouslySetInnerHTML={{
                      __html: Projectinfo?.description,
                    }}
                  ></div>
                </div>
                {Projectinfo?.startDate && (
                  <div className="w-[40%]">
                    <p className=" text-right text-sm">
                      {" "}
                      {formatDate(Projectinfo?.startDate)} |{" "}
                      {formatDate(Projectinfo?.endDate)}
                    </p>
                  </div>
                )}
              </div>
            )}
            {resumeData?.projects?.map((project, index) => (
              <div
                key={index + 1}
                className="flex item-start mt-1.5 justify-between"
              >
                <div className="">
                  <h1 className="text-sm font-semibold ">{project?.title}</h1>
                  <a
                    href={project?.link}
                    className="text-xs font-medium underline"
                  >
                    {project?.link}
                  </a>
                  <div
                    className="text-xs custom-list"
                    dangerouslySetInnerHTML={{
                      __html: project?.description,
                    }}
                  ></div>
                </div>
                <div className="w-[40%]">
                  <p className=" text-right text-sm">
                    {" "}
                    {formatDate(project?.start_date)}|
                    {formatDate(project?.end_date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* education */}
        <div className="mt-2 ">
          {showSection?.Education && (
            <>
              <h2 className="text-base text-left">Education</h2>
              <span className="bg-black w-[100%] h-[2.3px] block" />
              {/* exp */}
              {!EducationInfo?.isEdit && (
                <div className="flex item-start mt-1 justify-between">
                  <div className="">
                    <h1 className="text-sm font-semibold ">
                      {EducationInfo?.formData?.schoolName}
                    </h1>
                    <p className="text-sm font-semibold text-gray-700">
                      {EducationInfo?.formData?.degree}
                    </p>
                  </div>
                  <div className="w-[40%]">
                    {EducationInfo?.formData?.startDate && (
                      <p className=" text-right text-sm">
                        {" "}
                        {formatDate(EducationInfo?.formData?.startDate)} |{" "}
                        {EducationInfo?.currentlyStudying
                          ? "present"
                          : formatDate(EducationInfo?.formData?.endDate)}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {resumeData?.eductaions?.map((education, index) => (
                <div
                  key={index + 1}
                  className="flex item-start mt-1 justify-between"
                >
                  <div className="">
                    <h1 className="text-sm font-semibold ">
                      {education?.university}
                    </h1>
                    <p className="text-sm font-semibold text-gray-700">
                      {education?.course}
                    </p>
                  </div>
                  <div className="w-[40%]">
                    <p className=" text-right text-sm">
                      {formatDate(education?.start_date)} |{" "}
                      {education?.is_current
                        ? "present"
                        : formatDate(education?.end_date)}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
          {/* languages */}
          {showSection?.Language && (
            <div className="mt-2 text-left">
              <h2 className="text-sm">Language</h2>
              <span className="bg-black w-[100%] h-[2.3px] block" />
              <div className="flex flex-wrap gap-2 mt-2">
                {LanguageInfo?.map((item, index) => (
                  <p key={index + 1} className="text-sm">
                    {item?.name}
                  </p>
                ))}
                {resumeData?.languages.map((item, index) => (
                  <p key={index + 1} className="text-sm">
                    {item?.language}
                  </p>
                ))}
              </div>
            </div>
          )}
          {/* certification */}
          {showSection?.Certificate && (
            <div className="mt-2 text-left">
              <h2 className="text-sm">Certification</h2>
              <span className="bg-black w-[100%] h-[2.3px] block" />
              <div className="flex gap-2 mt-2">
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
          {/* Interest */}
          {showSection?.Interest && (
            <div className="mt-2 text-left">
              <h2 className="text-base">Interests</h2>
              <span className="bg-black w-[100%] h-[2.3px] block" />
              <div className="flex gap-2 mt-2">
                {InterestInfo?.map((item, index) => (
                  <p key={index + 1} className="text-sm">
                    {item?.name}
                  </p>
                ))}
                {resumeData?.interests.map((item, index) => (
                  <p key={index + 1} className="text-sm">
                    {item?.interest}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* video profile */}
        {/* {resumeData?.video_questions.some((data) => data?.video !== null) ? (
  <div className="mt-1 text-left">
    <h2 className="text-base">Video Profile</h2>
    <span className="bg-black w-[100%] h-[2.3px] block" />
    <div className="flex flex-col flex-wrap text-left mt-2">
      {resumeData.video_questions.slice(0, 3).map((data, index) => {
        if (data?.video !== null) {
          return (
            <p className="text-sm" key={index}>
              {data?.question?.question}?{" "}
              <a href={data?.video} className="underline mx-1">
                Answer
              </a>
            </p>
          );
        }
        return null;
      })}
    </div>
  </div>
):(<></>)
} */}
      </div>
    </div>
  );
};

export default Template;
