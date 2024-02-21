import React from "react";
import { useSelector } from "react-redux";
import logo from "./logo.png";

const Template = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  // Sample data (you can replace this with dynamic data)
  

  return (
    <div className="A4 ">
      <div className="w-[96%]  h-full  bg-white  ">
        <header className="text-center flex bg-red-600 justify-between text-white h-fit  py-0.5">
          <div className="w-64 text-left mx-2">
            <h1 className="text-xl font-bold">{resumeData?.full_name}</h1>
            <p className="text-lg">{resumeData?.position}</p>
            <img
              src={resumeData?.profile_picture}
              alt="Profile"
              className="w-20 h-20   mt-4 rounded"
            />
          </div>
          <div className="flex  flex-col  justify-start  text-right   items-end ">
            <div className="px-2 flex flex-col items-end">
              <img className="w-20  h-6" src={logo} alt="" />
              <p className="text-base">{resumeData?.email}</p>
              <p className="text-base">{resumeData?.address}</p>
              <p className="text-base">{resumeData?.mobile_no}</p>
            </div>
            <div className="p-2  flex items-center text-white rounded-md mx-2">
              {resumeData?.social_links?.map((item, index) => (
                <a
                  className="px-1 mx-1 rounded font-semibold py-1 bg-black"
                  key={item?.id}
                  href={item?.link}
                  target="_blank"
                >
                  {item?.name}
                </a>
              ))}
              {/* <img className="w-4 h-4" src={search} alt="" /> */}
            </div>
          </div>
        </header>

        <section className="my-1 px-2 ">
          <h2 className="text-xl text-red-600 font-semibold">Summary</h2>
          <p className="text-[12px] w-fit p-0.5 border-r-2 border-l-2 border-red-600 rounded font-medium">
            {resumeData?.summary}
          </p>
        </section>

        <section className="my-1 px-2">
          <h2 className="text-xl text-red-600 font-semibold">
            Work Experience
          </h2>

          <div className="flex flex-wrap justify-start gap-3 ">
            {resumeData?.experiences?.map((exp, index) => (
              <div
                key={exp?.id}
                className="mt-1 w-56 p-1.5 text-justify  border-r-2 border-l-2 border-red-600  rounded-md"
              >
                <h3 className="text-base  text-black font-semibold">
                  {exp?.company_name}
                </h3>
                <p className="text-base text-black">{exp?.designation}</p>
                <p className="text-base text-black">
                  {exp?.start_date} -{" "}
                  {exp?.is_current ? "present" : exp?.end_date}
                </p>
                <p className="text-sm text-black font-medium">
                  {exp?.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-1 px-2">
          <h2 className="text-xl text-red-500 font-semibold">Education</h2>

          <div className="flex flex-wrap justify-start gap-4 ">
            {resumeData?.eductaions?.map((edu, index) => (
              <div
                key={edu?.id}
                className="mt-1 p-1.5 w-fit border-r-2 border-l-2 border-red-600 rounded"
              >
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
          <h2 className="text-xl text-red-600 font-semibold">Projects</h2>

          <div className="flex flex-wrap justify-start gap-4">
            {resumeData?.projects?.map((project, index) => (
              <div key={index} className="mt-1 w-64">
                <a
                  href={project.link}
                  className="text-lg bg-red-600 p-0.5 rounded text-white font-medium"
                >
                  {project.title}
                </a>
                <p className="text-base">{project.description}</p>
                <p className="text-base text-gray-600">
                  {project.start_date}-{project.end_date}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-evenly">
          <section className="my-1 px-2 w-[50%]">
            <h2 className="text-xl text-red-600 font-semibold">Skills</h2>
            <p className="flex flex-wrap   gap-3">
              {resumeData?.skills?.map((skill, index) => (
                <p className="text-sm" key={index}>
                  {skill.skill} ,
                </p>
              ))}
            </p>
          </section>
          <section className="my-1 px-2 w-[50%]">
            <h2 className="text-2xl text-red-600 font-semibold">Interests</h2>
            <p className="flex flex-wrap   gap-3">
              {resumeData?.interests?.map((item, index) => (
                <p className="text-sm" key={index}>
                  {item?.interest} ,
                </p>
              ))}
            </p>
          </section>
        </div>

        <div className="flex justify-evenly">
          <section className="my-1 px-2 w-[50%]">
            <h2 className="text-xl text-red-600 font-semibold">Certificates</h2>
            <ul className="list-disc list-inside">
              {resumeData?.certification.map((item, index) => (
                <li key={index}>{item?.certificate}</li>
              ))}
            </ul>
          </section>
          <section className="my-1 px-2 w-[50%]">
            <h2 className="text-xl text-red-600 font-semibold">Languages</h2>
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
          <h2 className="text-xl text-red-600 font-semibold">Video Profile</h2>
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
