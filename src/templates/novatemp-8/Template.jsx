import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

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
    <div className="A4  w-[210mm]   h-[297mm] border-b-[2px]">
      <>
        {/* header */}
        <div className="px-2">
          <header className="flex justify-start gap-x-6 items-start">
            <div>
              <img
                className="w-28 h-32 mt-4 rounded-md"
                src={resumeData?.profile_picture || PersonalInfoData?.photo}
                alt="Demo Image"
              />
              <div>
                <section className="  font-semibold text-xs mt-1 text-black justify-around items-center">
                  <h3>{resumeData?.email || PersonalInfoData?.email}</h3>
                  <h3>
                    {resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
                  </h3>
                  <h3>{resumeData?.address || PersonalInfoData?.city}</h3>
                  <h3>
                    <div className="">
                      {SocialLinkData?.map((links) => (
                        <a className="" href={links?.link} key={links?.id}>
                          {links?.name}
                        </a>
                      ))}
                      {resumeData?.social_links?.map((links) => (
                        <a className="" href={links?.link} key={links?.id}>
                          {links?.name}
                        </a>
                      ))}
                    </div>
                  </h3>
                </section>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-xl">
                {" "}
                {resumeData?.full_name || PersonalInfoData?.FullName}
              </h1>
              <h3 className="font-medium text-gray-400 text-base">
                {resumeData?.position || PersonalInfoData?.profession}
              </h3>
              <p className=" bg-gray-200 p-1 rounded-lg text-xs ">
                {resumeData?.summary || PersonalInfoData?.summary}
              </p>
            </div>
          </header>
        </div>
        {/* section 1*/}
        <div className="px-2">
          <section className="flex justify-between">
            <div className="w-[50%]">
              {showSection?.Professional && (
                <div>
                  <h1 className="font-semibold uppercase text-base mt-4 ">
                    Work Experience
                  </h1>
                  {!Experiencenfo?.isEdit && (
                    <div className="mt-1 p-1 text-justify">
                      <h3 className="text-[15.7px] text-white w-fit p-1 rounded-lg bg-black font-semibold">
                        {Experiencenfo?.formData?.companyName}
                      </h3>
                      <div className="flex gap-2">
                        <p className="text-sm text-black">
                          {Experiencenfo?.formData?.jobPosition}
                        </p>
                        {Experiencenfo?.formData?.startDate && (
                          <p className="text-sm text-black">
                            {formatDate(Experiencenfo?.formData?.startDate)}-{" "}
                            {Experiencenfo?.currentlyWorking
                              ? "present"
                              : formatDate(Experiencenfo?.formData?.endDate)}
                          </p>
                        )}
                      </div>
                      <div
                        className="text-xs  text-black "
                        dangerouslySetInnerHTML={{
                          __html: Experiencenfo?.formData?.jobDescription,
                        }}
                      ></div>
                    </div>
                  )}
                  {resumeData?.experiences?.map((exp, index) => (
                    <div className="mt-1 p-1 text-justify">
                      <h3 className="text-[15.7px] text-white w-fit p-1 rounded-lg bg-black font-semibold">
                        {exp?.company_name}
                      </h3>
                      <div className="flex gap-2">
                        <p className="text-sm text-black">{exp?.designation}</p>
                        <p className="text-sm text-black">
                          {" "}
                          {formatDate(exp?.start_date)} -{" "}
                          {exp?.is_current
                            ? "present"
                            : formatDate(exp?.end_date)}
                        </p>
                      </div>
                      <div
                        className="text-xs custom-list text-black px-2"
                        dangerouslySetInnerHTML={{
                          __html: exp?.description,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              )}
              {showSection?.Projects && (
                <div className=" flex">
                  <div>
                    <h1 className="font-semibold uppercase text-base mt-1 ">
                      Projects
                    </h1>
                    <div>
                      {Projectinfo && (
                        <div className="mt-1 p-1 text-justify">
                          {Projectinfo?.projectName && (
                            <h3 className="text-sm text-white bg-black w-fit p-1 rounded-md font-semibold">
                              {Projectinfo?.projectName}
                            </h3>
                          )}
                          <div className="flex gap-2">
                            <a
                              href={Projectinfo?.projectLink}
                              className="text-sm text-black"
                            >
                              {Projectinfo?.projectLink}
                            </a>
                            {Projectinfo?.startDate && (
                              <p className="text-xs text-black">
                                {formatDate(Projectinfo?.startDate)} -{" "}
                                {formatDate(Projectinfo?.endDate)}
                              </p>
                            )}
                          </div>
                          <div
                            className="text-xs px-3 text-black "
                            dangerouslySetInnerHTML={{
                              __html: Projectinfo?.description,
                            }}
                          ></div>
                        </div>
                      )}
                      {resumeData?.projects?.map((project) => (
                        <div className="mt-1 p-1 text-justify">
                          <h3 className="text-sm text-white bg-black w-fit p-1 rounded-md font-semibold">
                            {project?.title}
                          </h3>
                          <div className="flex gap-2">
                            <a
                              href={project?.link}
                              className="text-sm text-black"
                            >
                              {project?.link}
                            </a>
                            <p className="text-base text-black">
                              {" "}
                              {formatDate(project?.start_date)}-
                              {formatDate(project?.end_date)}
                            </p>
                          </div>
                          <div
                            className="text-xs px-3 custom-list text-black "
                            dangerouslySetInnerHTML={{
                              __html: project?.description,
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {showSection?.Education && (
                <div className="flex">
                  <div className="">
                    <h1 className="font-semibold uppercase text-base mt-4 ">
                      Education
                    </h1>
                    <div>
                      {!EducationInfo?.isEdit && (
                        <div className="mt-1  rounded">
                          <div />
                          {EducationInfo?.formData?.schoolName && (
                            <h3 className="text-sm bg-black text-white p-1 rounded-lg w-fit font-medium">
                              {EducationInfo?.formData?.schoolName}
                            </h3>
                          )}
                          <p className="text-sm text-gray-600">
                            {EducationInfo?.formData?.degree}
                          </p>
                          {EducationInfo?.formData?.startDate && (
                            <p className="text-sm text-gray-600">
                              {" "}
                              {formatDate(
                                EducationInfo?.formData?.startDate
                              )}-{" "}
                              {EducationInfo?.currentlyStudying
                                ? "present"
                                : formatDate(EducationInfo?.formData?.endDate)}
                            </p>
                          )}
                        </div>
                      )}
                      {resumeData?.eductaions.map((edu, index) => (
                        <div className="mt-1  rounded">
                          <div />
                          <h3 className="text-sm bg-black text-white p-1 rounded-lg w-fit font-medium">
                            {edu?.university}
                          </h3>
                          <p className="text-sm text-gray-600">{edu?.course}</p>
                          <p className="text-sm text-gray-600">
                            {" "}
                            {formatDate(edu?.start_date)} -{" "}
                            {edu?.is_current
                              ? "present"
                              : formatDate(edu?.end_date)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-[50%]">
              <div className=" flex flex-col">
                {showSection?.Skills && (
                  <div className="bg-gray-200 rounded-md w-full p-1">
                    <h1 className="font-semibold uppercase text-base mt-1 ">
                      Skills
                    </h1>
                    <div className="flex  justify-start  gap-2 items-start  flex-wrap mt-1">
                      {SkillInfoData?.map((item, index) => (
                        <p
                          key={index}
                          className="text-sm rounded-md  font-semibold p-1 w-fit"
                        >
                          {item.name}
                        </p>
                      ))}
                      {resumeData?.skills?.map((item, index) => (
                        <p
                          key={index}
                          className="text-sm rounded-md  font-semibold p-1 w-fit"
                        >
                          {item.skill}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {/* languages */}
                {showSection?.Language && (
                  <div className="p-1 bg-gray-200 rounded-md w-full mt-2.5">
                    <h1 className="font-semibold uppercase text-base mt-1 ">
                      Language
                    </h1>

                    <div className="flex flex-wrap gap-x-2">
                      {LanguageInfo?.map((item, index) => (
                        <div key={index + 1} className="mt-1 flex gap-x-2 ">
                          <p className="text-sm">{item?.name}</p>
                        </div>
                      ))}
                      {resumeData?.languages?.map((item, index) => (
                        <div key={index + 1} className="mt-1 flex gap-x-2 ">
                          <p className="text-sm">{item?.language}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/*  certificates*/}
                {showSection?.Certificate && (
                  <div className="w-full bg-gray-200 rounded-md p-1 mt-1">
                    <h1 className="font-semibold uppercase text-base ">
                      Certifications
                    </h1>
                    <div>
                      <ul className=" flex flex-wrap gap-2">
                        {CertificateInfo?.map((item, index) => (
                          <li key={index + 1}>{item?.name}</li>
                        ))}
                        {resumeData?.certification?.map((item, index) => (
                          <li key={index + 1}>{item?.certificate}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {/* Interest*/}
                {showSection?.Interest && (
                  <div className="w-full bg-gray-200 rounded-md p-1 mt-2.5">
                    <h1 className="font-semibold uppercase text-base  ">
                      Interests
                    </h1>
                    <div className="flex gap-2 flex-wrap">
                      {InterestInfo?.map((item, index) => (
                        <p key={index} className="text-sm px-2">
                          {item?.name}
                        </p>
                      ))}
                      {resumeData?.interests.map((item, index) => (
                        <p key={index} className="text-sm px-2">
                          {item?.interest}
                        </p>
                      ))}

                      {/* Add more interests as needed */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default Template;
