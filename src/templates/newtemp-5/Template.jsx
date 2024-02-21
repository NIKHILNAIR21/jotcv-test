import React from "react";

import { useSelector } from "react-redux";
import logo from "./flipkart-logo.png";
import search from "../../assets/search.png";
const Template = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  // Sample data (you can replace this with dynamic data)
  

  const personalData = useSelector((state) => state?.personalInfo);
  return (
    <div className="A4 ">
      <div className=" h-full  bg-white  ">
        <header
          style={{ backgroundColor: "#047BD5" }}
          className="text-center flex justify-between text-white h-fit  py-0.5"
        >
          <div className="w-64 text-left mx-2">
            <h1 className="text-xl font-bold">{personalData?.FullName}</h1>
            <p className="text-lg">{personalData?.profession}</p>
            <img
              src={personalData?.photo}
              alt="Profile"
              className="w-20 h-20   mt-4 rounded"
            />
          </div>
          <div className="flex  flex-col  justify-start  text-right   items-end ">
            <div className="px-2 flex flex-col items-end">
              <img className="w-12  h-12" src={logo} alt="" />
              <p className="text-base">{personalData?.email}</p>
              <p className="text-base">{personalData?.city}</p>
              <p className="text-base">{personalData?.phoneNumber}</p>
            </div>
            <div className="p-2 bg-amber-100 flex items-center text-black rounded-md mx-2">
              {resumeData?.social_links.map((item, index) => (
                <a
                  className="px-2"
                  key={item?.id}
                  href={item?.link}
                  target="_blank"
                >
                  {item?.name}
                </a>
              ))}
              <img className="w-4 h-4" src={search} alt="" />
            </div>
          </div>
        </header>

        <section className="my-1 px-2 ">
          <h2 className="text-base font-semibold">Summary</h2>
          <p className="text-[12px] font-medium">{personalData?.summary}</p>
        </section>

        <section className="my-1 px-2">
          <h2 className="text-base font-semibold">Work Experience</h2>

          <div className="">
            {resumeData?.experiences.map((exp, index) => (
              <div
                key={exp?.id}
                className="mt-1 w-full p-2 text-justify bg-amber-400 rounded-md"
              >
                <h3 className="text-base font-medium">{exp?.company_name}</h3>
                <p className="text-sm text-gray-600">{exp?.designation}</p>
                <p className="text-xs text-gray-600">
                  {exp?.start_date} -{" "}
                  {exp?.is_current ? "present" : exp?.end_date}
                </p>
                <p className="text-xs font-medium">{exp?.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-1 px-2">
          <h2 className="text-xl font-semibold">Education</h2>

          <div className="flex flex-wrap justify-start gap-4 ">
            {resumeData?.eductaions?.map((edu, index) => (
              <div key={edu.id} className="mt-1 w-fit ">
                <h3 className="text-lg font-medium">{edu?.university}</h3>
                <p className="text-base text-gray-600">{edu?.course}</p>
                <p className=" text-sm text-gray-600">
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
                  {skill.skill} ,
                </p>
              ))}
            </p>
          </section>
          <section className="my-1 px-2 w-[50%]">
            <h2 className="text-xl font-semibold">Interests</h2>
            <p className="flex flex-wrap   gap-3">
              {resumeData.interests.map((item, index) => (
                <p className="text-sm" key={index}>
                  {item.interest} ,
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
                <li key={index}>{item.certificate}</li>
              ))}
            </ul>
          </section>
          <section className="my-1 px-2 w-[50%]">
            <h2 className="text-xl font-semibold">Languages</h2>
            <div className="flex flex-wrap justify-start gap-4">
              {resumeData?.languages?.map((language, index) => (
                <div key={index} className="mt-1 px-2">
                  <p className="text-base">{language.language}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        
      </div>
    </div>
  );
};

export default Template;
