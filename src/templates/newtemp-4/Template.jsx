import React from "react";
import logo from "./epic-games-logo.png";

import { useSelector } from "react-redux";
const Template = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const personalData = useSelector((state) => state?.personalInfo);

  return (
    <div className="A4 ">
      <div className="w-[96%] h-full bg-white">
        <header
          style={{ backgroundColor: "#6ca0a7" }}
          className="text-center  h-fit "
        >
          <div className=" flex  justify-between items-center text-white">
            <div className="px-4 py-0">
              <h1 className="text-2xl text-left font-bold">
              {personalData?.FullName}
              </h1>
              <p className="text-base font-semibold ">{personalData?.profession}</p>
              <img
                src={personalData?.photo}
                alt="Profile"
                className="w-20 h-20  mt-2 "
              />
            </div>
            <div className="flex flex-col px-1.5 justify-end items-end">
              <p className="text-xl  font-bold">
                <img className="w-12 h-12" src={logo} alt="" />
              </p>{" "}
              <p className="text-base ">{personalData?.email}</p>
              <p className="text-base ">{personalData?.city}</p>
              <p className="text-base  ">{personalData?.phoneNumber}</p>
            </div>
          </div>
          {resumeData?.social_links.map((item, index) => (
            <a
              className="text-white px-1"
              key={item.id}
              href={item.link}
              target="_blank"
            >
              {item.name}
            </a>
          ))}
        </header>

        <section className="my-1 px-2">
          <h2 style={{ color: " #2D8CFF" }} className="text-xl font-semibold">
            Summary
          </h2>
          <p className="text-[15px] w-fit p-2 text-slate-100 bg-slate-600 rounded-md font-medium">
            {personalData?.summary}
          </p>
        </section>

        <section className="my-1 px-2">
          <h2 style={{ color: " #2D8CFF" }} className="text-xl font-semibold">
            Work Experience
          </h2>

          <div className="flex flex-wrap justify-start gap-3">
            {resumeData?.experiences?.map((exp, index) => (
              <div
                key={exp?.id}
                className="mt-1 w-56 p-2 text-justify rounded-md bg-slate-100"
              >
                <h3 className="text-base font-bold">{exp?.company_name}</h3>
                <p className="text-base text-gray-600">{exp?.designation}</p>
                <p className="text-base text-gray-600">
                  {exp?.start_date} -{" "}
                  {exp?.is_current ? "present" : exp?.end_date}
                </p>
                <p className="text-sm font-medium">{exp?.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-1.5 px-2">
          <h2 style={{ color: " #2D8CFF" }} className="text-xl  font-semibold">
            Education
          </h2>

          <div className="flex flex-wrap justify-start gap-3">
            {resumeData?.eductaions?.map((edu, index) => (
              <div
                key={edu.id}
                className="mt-1 bg-slate-100 p-2 rounded-md w-fit "
              >
                <h3 className="text-lg text-black font-medium">
                  {edu?.university}
                </h3>
                <p className="text-base text-black">{edu?.course}</p>
                <p className=" text-sm text-black">
                  {edu?.start_date} -{" "}
                  {edu?.is_current ? "present" : edu?.end_date}
                </p>
                {/* <p className="text-base">GPA: {edu.score}</p> */}
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-evenly">
          <section className="my-1 px-2 w-[50%]">
            <h2 style={{ color: " #2D8CFF" }} className="text-xl font-semibold">
              Skills
            </h2>
            <p className="flex flex-wrap gap-3">
              {resumeData?.skills?.map((skill, index) => (
                <p
                  className="text-xs p-1 text-slate-100 bg-slate-600"
                  key={index}
                >
                  {skill?.skill} ,
                </p>
              ))}
            </p>
          </section>

          <section className="my-1 px-2 w-[50%]">
            <h2 style={{ color: " #2D8CFF" }} className="text-xl font-semibold">
              Interests
            </h2>
            <p className="flex flex-wrap gap-3">
              {resumeData?.interests?.map((item, index) => (
                <p
                  className="text-xs p-1 text-slate-100 bg-slate-600"
                  key={index}
                >
                  {item?.interest} ,
                </p>
              ))}
            </p>
          </section>
        </div>

        <section className="my-1 px-2">
          <h2 style={{ color: " #2D8CFF" }} className="text-xl font-semibold">
            Projects
          </h2>

          <div className="flex flex-wrap justify-start gap-4">
            {resumeData?.projects.map((project, index) => (
              <div key={index} className="mt-1 w-64">
                <a href={project?.link} className="text-lg font-medium">
                  {project?.title}
                </a>
                <p className="text-base">{project?.description}</p>
                <p className="text-base text-gray-600">
                  {project?.start_date}-{project?.end_date}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-evenly">
          <section className="my-1 px-2 w-[50%]">
            <h2 style={{ color: " #2D8CFF" }} className="text-xl font-semibold">
              Certificates
            </h2>
            <ul className="list-disc list-inside">
              {resumeData?.certification.map((certificate, index) => (
                <li key={index}>{certificate?.certificate}</li>
              ))}
            </ul>
          </section>

          <section className="my-1 px-2 w-[50%]">
            <h2 style={{ color: " #2D8CFF" }} className="text-xl font-semibold">
              Languages
            </h2>
            <div className="flex flex-wrap justify-start gap-4">
              {resumeData?.languages.map((language, index) => (
                <div
                  key={index}
                  className="mt-1  p-2  text-slate-100 bg-slate-600 rounded-md  px-2"
                >
                  <p className="text-base">{language?.language}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="my-1 px-2">
          <h2 style={{ color: " #2D8CFF" }} className="text-xl font-semibold">
            Video Profile
          </h2>
          <div className="flex gap-20">
          {resumeData?.video_questions?.map((data) => {
              <div>
                <h2 className="text-base">{data?.help_text}</h2>
                <a href={data?.video} className="text-sm">
                  Answer
                </a>
              </div>;
            })}
            </div>
        </section>
      </div>
    </div>
  );
};

export default Template;
