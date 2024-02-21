import React from "react";
import { useSelector } from "react-redux";
import logo from "./logo.png";
import common from "./common.png";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import work from "./work.png";
import edu from "./edu.png";
import prj from "./prj.png";
import likebar from "./likebar.png";

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

  return (
    <>
      <div className="main-container bg-white w-[800px] mx-auto">
        <header className="flex p-4 justify-between">
          <div className="flex gap-2 items-center">
            <img className="w-10 h-10" src={logo} alt="" />
            <div>
              <h1 className="text-base font-semibold">
                {resumeData?.full_name}
              </h1>
              <h3 className="text-sm">{resumeData?.position}</h3>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img className="w-7 h-7" src={icon1} alt="icon" />
            <img className="w-7 h-7" src={icon2} alt="icon" />
            <img className="w-7 h-7" src={icon3} alt="icon" />

            <img
              className="rounded-full w-10 h-10"
              src={resumeData?.profile_picture}
              alt="Profile"
            />
          </div>
        </header>
        <div className="p-4 flex justify-between bg-[#F0F2F5] m-4">
          <div className="left w-[30%]">
            <section>
              <p className="text-[12.5px] mt-1 font-san">
                Email: {resumeData?.email}
              </p>
              <p className="text-[12.5px] mt-1 font-san">
                City: {resumeData?.city}
              </p>
              <p className="text-[12.5px] mt-1 font-san">
                Phone: {resumeData?.phone}
              </p>
              <div className="flex gap-1">
                {resumeData?.social_links?.map((link, index) => (
                  <a
                    href={link?.link}
                    key={index}
                    className="text-[12.5px] mt-1"
                  >
                    {link?.name}
                  </a>
                ))}
                
              </div>
            </section>
            <section className="w-full mt-2">
              <div className="flex gap-1">
                <img className="w-[13px] h-[13px] mt-1.5" src={edu} alt="" />
                <h2 className="font-sans text-[#4B9EFD] font-bold">
                  EDUCATION
                </h2>
              </div>

              <div>
                {resumeData?.eductaions?.map((education, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-semibold">
                      {education?.university}
                    </h3>
                    <p className="text-sm text-gray-600">{education?.course}</p>
                    <p className="text-xs text-gray-600">
                      {formatDate(education?.start_date)} -{" "}
                      {education.is_current
                        ? "present"
                        : formatDate(education?.end_date)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <section className="w-full mt-2">
              <div className="flex gap-1 items-center">
                <img className="w-[13px] h-[13px] mt-1.5" src={common} alt="" />
                <h2 className="font-sans text-[#4B9EFD] font-bold">SKILLS</h2>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {resumeData?.skills?.map((skill, index) => (
                  <p
                    key={index}
                    className="text-sm rounded-md bg-[#4B9EFD] p-1.5 text-white font-semibold w-fit"
                  >
                    {skill?.skill}
                  </p>
                ))}
              </div>
            </section>
            <section className="w-full mt-2">
              <div className="flex gap-1 items-center">
                <img className="w-[13px] h-[13px] mt-1.5" src={common} alt="" />
                <h2 className="font-sans text-[#4B9EFD] font-bold">
                  CERTIFICATION
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {resumeData?.certification?.map((skill, index) => (
                  <p
                    key={index}
                    className="text-sm rounded-md bg-[#4B9EFD] p-1.5 text-white font-semibold w-fit"
                  >
                    {skill?.certificate}
                  </p>
                ))}
              </div>
            </section>
            <section className="w-full mt-2">
              <div className="flex gap-1 items-center">
                <img className="w-[13px] h-[13px] mt-1.5" src={common} alt="" />
                <h2 className="font-sans text-[#4B9EFD] font-bold">
                  INTERESTS
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {resumeData?.interests?.map((skill, index) => (
                  <p
                    key={index}
                    className="text-sm rounded-md bg-[#4B9EFD] p-1.5 text-white font-semibold w-fit"
                  >
                    {skill?.interest}
                  </p>
                ))}
              </div>
            </section>
            <section className="w-full mt-2">
              <div className="flex gap-1 items-center">
                <img className="w-[13px] h-[13px] mt-1.5" src={common} alt="" />
                <h2 className="font-sans text-[#4B9EFD] font-bold">
                  LANGUAGES
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {resumeData?.languages?.map((skill, index) => (
                  <p
                    key={index}
                    className="text-sm rounded-md bg-[#4B9EFD] p-1.5 text-white font-semibold w-fit"
                  >
                    {skill?.language}
                  </p>
                ))}
              </div>
            </section>
          </div>
          <div className="right w-[70%]">
          <section className="w-full mt-2">
          <div
                  
                  className="w-full mt-2 bg-white rounded-xl p-4"
                >
                {resumeData?.summary}
                   <img className="w-full mt-2" src={likebar} alt="" /> 
                </div>
          </section>
            <section className="w-full mt-2">
              <div className="flex gap-1 items-center">
                <img className="w-[13px] h-[13px] mt-1.5" src={work} alt="" />
                <h3 className="font-sans text-[#4B9EFD] font-bold">
                  WORK EXPERIENCE
                </h3>
              </div>
              {resumeData?.experiences?.map((experience, index) => (
                <div
                  key={index}
                  className="w-full mt-2 bg-white rounded-xl p-4"
                >
                  <p className="font-sans text-justify text-xs">
                    <div className="mt-1 p-1.5 text-justify">
                      <h3 className="text-sm text-black font-semibold">
                        {experience?.company_name}
                      </h3>
                      <div className="flex justify-between">
                        <p className="text-sm text-black">
                          {experience?.position}
                        </p>
                        <p className="text-xs text-black">
                          {formatDate(experience?.start_date)} -{" "}
                          {experience.is_current
                            ? "present"
                            : formatDate(experience?.end_date)}
                        </p>
                      </div>
                      <p className="text-xs">{experience?.description}</p>
                    </div>
                  </p>
                  <img className="w-full mt-2" src={likebar} alt="" />
                </div>
              ))}
            </section>
            <section className="w-full mt-2">
              <div className="flex gap-1 items-center">
                <img className="w-[13px] h-[13px] mt-1.5" src={prj} alt="" />
                <h3 className="font-sans text-[#4B9EFD] font-bold">PROJECT</h3>
              </div>
              {resumeData?.projects?.map((project, index) => (
                <div
                  key={index}
                  className="w-full mt-2 bg-white rounded-xl p-4"
                >
                  <p className="font-sans text-justify text-xs">
                    <div className="mt-1 p-1.5 text-justify">
                      <div className="flex justify-between">
                        <h3 className="text-sm text-black font-semibold">
                          {project?.title}
                        </h3>
                        <p className="text-xs text-black">
                          {formatDate(project?.start_date)} -{" "}
                          {formatDate(project?.end_date)}
                        </p>
                      </div>
                      <p className="text-xs">{project.description}</p>
                    </div>
                  </p>
                  <img className="w-full mt-2" src={likebar} alt="" />
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
