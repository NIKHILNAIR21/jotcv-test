import React from "react";

import { useSelector } from "react-redux";
const Template = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  // Sample data (you can replace this with dynamic data)

  const personalData = useSelector((state) => state?.personalInfo);
  return (
    <div className="A4 ">
      <div className="w-[96%]  h-full  bg-white  ">
        <header className="text-center text-white h-fit bg-blue-900 py-2">
          <h1 className="text-xl font-bold">{personalData?.FullName}</h1>
          <p className="text-lg">{personalData?.profession}</p>
          <div className="flex justify-center flex-wrap  mx-auto items-center gap-4">
            <p className="text-base">{personalData?.email}</p>
            <p className="text-base">{personalData?.city}</p>
            <p className="text-base">{personalData?.phoneNumber}</p>
            {resumeData?.social_links.map((item, index) => (
              <a key={item.id} href={item.link} target="_blank">
                {item.name}
              </a>
            ))}
          </div>
          <img
            src={personalData?.photo}
            alt="Profile"
            className="w-20 h-20 mx-auto mt-4 rounded-full"
          />
        </header>

        <section className="my-1 px-2 ">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="text-[12px] font-medium">{personalData?.summary}</p>
        </section>

        <section className="my-1 px-2">
          <h2 className="text-xl font-semibold">Work Experience</h2>

          <div className="flex flex-wrap justify-center gap-3 ">
            {resumeData?.experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="mt-1 w-56 p-2 text-justify bg-slate-200"
              >
                <h3 className="text-base font-medium">{exp?.company_name}</h3>
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

        <section className="my-1 px-2">
          <h2 className="text-xl font-semibold">Education</h2>

          <div className="flex flex-wrap justify-start gap-4">
            {resumeData?.eductaions.map((edu, index) => (
              <div key={edu.id} className="mt-1 w-fit">
                <h3 className="text-lg font-medium">{edu?.university}</h3>
                <p className="text-base text-gray-600">{edu?.course}</p>
                <p className=" text-sm text-gray-600">
                  {" "}
                  {edu?.start_date} -{" "}
                  {edu?.is_current ? "present" : edu?.end_date}
                </p>
                {/* <p className="text-base">GPA: {edu.score}</p> */}
              </div>
            ))}
          </div>
        </section>
        <section className="my-1 px-2">
          <h2 className="text-xl font-semibold">Projects</h2>

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
            <h2 className="text-xl font-semibold">Skills</h2>
            <p className="flex flex-wrap   gap-3">
              {resumeData?.skills?.map((skill, index) => (
                <p className="text-sm" key={index}>
                  {skill?.skill} ,
                </p>
              ))}
            </p>
          </section>
          <section className="my-1 px-2 w-[50%]">
            <h2 className="text-xl font-semibold">Interests</h2>
            <p className="flex flex-wrap   gap-3">
              {resumeData?.interests.map((item, index) => (
                <p className="text-sm" key={index}>
                  {item?.interest} ,
                </p>
              ))}
            </p>
          </section>
        </div>

        <div className="flex justify-evenly">
          <section className="my-1 px-2 w-[50%]">
            <h2 className="text-xl font-semibold">Certificates</h2>
            <ul className="list-disc list-inside">
              {resumeData?.certification.map((item, index) => (
                <li key={index}>{item?.certificate}</li>
              ))}
            </ul>
          </section>
          <section className="my-1 px-2 w-[50%]">
            <h2 className="text-xl font-semibold">Languages</h2>
            <div className="flex flex-wrap justify-start gap-4">
              {resumeData?.languages?.map((language, index) => (
                <div key={index} className="mt-1 px-2">
                  <p className="text-base">{language?.language}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="my-1 px-2">
          <h2 className="text-xl font-semibold">Video Profile</h2>
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
