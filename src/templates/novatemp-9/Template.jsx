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
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  
  return (
    <div className="p-5 w-[210mm]   h-[297mm] border-b-[2px] ">
      {/* header */}
      <header className="flex justify-between item-start">
        <div>
          <h1 className="text-xl capitalize font-semibold text-sky-600">
            {resumeData?.full_name || PersonalInfoData?.FullName}
          </h1>
          <h4 className="text-base capitalize font-semibold text-sky-600">
            {resumeData?.position || PersonalInfoData?.profession}
          </h4>
        </div>
        <div className="text-right ">
          <div className="flex gap-5 justify-end">
            <a className="text-sm text-sky-600 font-semibold">
              {resumeData?.email || PersonalInfoData?.email}
            </a>
            <p className="text-sm text-sky-600 font-semibold">
              {resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
            </p>
          </div>
          <p className="text-sm text-sky-600 font-semibold">
            {resumeData?.address || PersonalInfoData?.city}
          </p>
          {/* social */}
          <div className="flex gap-2 justify-end">
            {SocialLinkData?.map((item) => (
              <a
                href={item?.link}
                key={item?.id}
                className="text-sm text-sky-600 font-semibold"
              >
                {item?.name}
              </a>
            ))}
            {resumeData?.social_links?.map((item) => (
              <a
                href={item?.link}
                key={item?.id}
                className="text-sm text-sky-600 font-semibold"
              >
                {item?.name}
              </a>
            ))}
          </div>
        </div>
      </header>
      {/* about */}
      <div className="mt-1">
        <p className="text-justify text-xs">
          {resumeData?.summary || PersonalInfoData?.summary}
        </p>
      </div>
      {/* experinece */}
      {showSection?.Professional && (
        <div className="mt-1">
          <h2 className="text-base font-semibold">Work Experience</h2>
          {/* exp */}
          {!EducationInfo?.isEdit && (
            <div className="flex item-start justify-between">
              <div className="">
                <h1 className="text-sm font-semibold text-sky-600">
                  {Experiencenfo?.formData?.companyName}
                </h1>
                <h2 className="text-sm capitalize text-sky-600">
                  {Experiencenfo?.formData?.jobPosition}
                </h2>
                <div
                  className="text-xs custom-list"
                  dangerouslySetInnerHTML={{
                    __html: Experiencenfo?.formData?.jobDescription,
                  }}
                ></div>
              </div>
              <div className="w-[55%] text-right">
                {Experiencenfo?.formData?.startDate && (
                  <p className="text-sky-600 text-xs">
                    {formatDate(Experiencenfo?.formData?.startDate)}-{" "}
                    {Experiencenfo?.currentlyWorking
                      ? "present"
                      : formatDate(Experiencenfo?.formData?.endDate)}
                  </p>
                )}
              </div>
            </div>
          )}
          {resumeData?.experiences?.map((exp, index) => (
            <div className="flex item-start justify-between">
              <div className="">
                <h1 className="text-sm font-semibold text-sky-600">
                  {exp?.company_name}
                </h1>
                <h2 className="text-sm  capitalize  text-sky-600">
                  {exp?.designation}
                </h2>
                <div
                  className="text-xs custom-list"
                  dangerouslySetInnerHTML={{
                    __html: exp?.description,
                  }}
                ></div>
              </div>
              <div className="w-[55%] text-right">
                <p className="text-sky-600 text-xs">
                  {formatDate(exp?.start_date)} -{" "}
                  {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Projects */}
      {showSection?.Projects && (
        <div className="mt-1">
          <h2 className="text-base font-semibold">Projects</h2>
          {/* exp */}
          {Projectinfo && (
            <div className="flex mt-1 item-start justify-between">
              <div className="">
                <h1 className="text-sm  font-semibold text-sky-600">
                  {Projectinfo?.projectName}
                </h1>
                <a
                  href={Projectinfo?.projectLink}
                  className="text-sm font-semibold text-sky-600"
                >
                  {Projectinfo?.projectLink}
                </a>
                <div
                  className="text-xs custom-list "
                  dangerouslySetInnerHTML={{
                    __html: Projectinfo?.description,
                  }}
                ></div>
              </div>
              <div className="w-[55%] text-right">
                {Projectinfo?.startDate && (
                  <p className="text-sky-600 text-xs">
                    {" "}
                    {formatDate(Projectinfo?.startDate)} |{" "}
                    {formatDate(Projectinfo?.endDate)}
                  </p>
                )}
              </div>
            </div>
          )}
          {resumeData?.projects?.map((project, index) => (
            <div
              key={index + 1}
              className="flex mt-1 item-start justify-between"
            >
              <div className="">
                <h1 className="text-sm  font-semibold text-sky-600">
                  {project?.title}
                </h1>
                <a
                  href={project?.link}
                  className="text-sm font-semibold text-sky-600"
                >
                  {project?.link}
                </a>
                <div
                  className="text-xs custom-list "
                  dangerouslySetInnerHTML={{
                    __html: project?.description,
                  }}
                ></div>
              </div>
              <div className="w-[55%] text-right">
                <p className="text-sky-600 text-xs">
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
      {showSection?.Education && (
        <div className="mt-2">
          <h2 className="text-base font-semibold">Education</h2>
          {/* exp */}
          {!EducationInfo?.isEdit && (
            <div className="flex my-1 item-start justify-between">
              <div className="">
                <h1 className="text-sm font-semibold text-sky-600">
                  {EducationInfo?.formData?.schoolName}
                </h1>
                <h2 className="text-sm font-semibold text-sky-600">
                  {EducationInfo?.formData?.degree}
                </h2>
              </div>
              <div className="">
                {EducationInfo?.formData?.startDate && (
                  <p className="text-sky-600 text-xs">
                    {" "}
                    {formatDate(EducationInfo?.formData?.startDate)}-{" "}
                    {EducationInfo?.currentlyStudying
                      ? "present"
                      : formatDate(EducationInfo?.formData?.endDate)}
                  </p>
                )}
              </div>
            </div>
          )}
          {resumeData?.eductaions?.map((education, index) => (
            <div className="flex my-1 item-start justify-between">
              <div className="">
                <h1 className="text-sm font-semibold text-sky-600">
                  {education?.university}
                </h1>
                <h2 className="text-sm font-semibold text-sky-600">
                  {education?.course}
                </h2>
              </div>
              <div className="">
                <p className="text-sky-600 text-xs">
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
      <div className="flex justify-between item-start gap-2">
        {/* skill */}
        {showSection?.Skills && (
          <div className="mt-1">
            <h2 className="text-base font-semibold">Skill</h2>
            <div className="flex flex-wrap gap-2">
              {SkillInfoData?.map((item, index) => (
                <p key={index} className="text-sm  text-sky-600">
                  {item?.name}
                </p>
              ))}
              {resumeData?.skills.map((item, index) => (
                <p key={index} className="text-sm  text-sky-600">
                  {item.skill}
                </p>
              ))}
            </div>
          </div>
        )}
        {/* interest */}
        {showSection?.Interest && (
          <div className="mt-1">
            <h2 className="text-base font-semibold">interests</h2>
            <div className="flex flex-wrap gap-2 ">
              {InterestInfo?.map((item, index) => (
                <p key={index + 1} className="text-sm  text-sky-600">
                  {" "}
                  {item?.name}{" "}
                </p>
              ))}
              {resumeData?.interests.map((item, index) => (
                <p key={index + 1} className="text-sm  text-sky-600">
                  {" "}
                  {item?.interest}{" "}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* language */}
      <div className="flex justify-between item-start">
        {showSection?.Language && (
          <div className="mt-2">
            <h2 className="text-base font-semibold">Language</h2>
            <div className="flex flex-wrap gap-2">
              {LanguageInfo?.map((item, index) => (
                <p key={index + 1} className="text-sm  text-sky-600">
                  {item?.name}
                </p>
              ))}
              {resumeData?.languages.map((item, index) => (
                <p key={index + 1} className="text-sm  text-sky-600">
                  {item?.language}
                </p>
              ))}
            </div>
          </div>
        )}
        {/* certificate */}
        {showSection?.Certificate && (
          <div className="mt-1">
            <h2 className="text-base font-semibold">Certification</h2>
            <ul className=" ">
              {CertificateInfo?.map((item, index) => (
                <li
                  key={index + 1}
                  className="text-sky-600 font-medium text-sm"
                >
                  {item?.name}
                </li>
              ))}
              {resumeData?.certification?.map((item, index) => (
                <li
                  key={index + 1}
                  className="text-sky-600 font-medium text-sm"
                >
                  {item?.certificate}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;
