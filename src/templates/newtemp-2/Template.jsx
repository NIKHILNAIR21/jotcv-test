import React from "react";
import logo from "./amazon-logo.png";

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


  return (
    <div className="A4">
      <div className="w-[800px] mx-auto h-full bg-white">
        <header
          style={{ backgroundColor: "#232f3e" }}
          className="text-center h-fit py-1.5"
        >
          <div className="flex justify-between text-white">
            <div className="px-2">
              <h1 className="text-xl text-left font-bold">
                {resumeData?.full_name}
              </h1>
              <p className="text-lg text-left">{resumeData?.position}</p>
              <img
                src={resumeData?.profile_picture}
                alt="Profile"
                className="w-20 h-20 mt-4 rounded-md"
              />
            </div>
            <div className="flex flex-col items-end px-2">
              <img className="w-28 h-10" src={logo} alt="amazon logo" />
              <p className="text-xs px-1">{resumeData?.email}</p>
              <p className="text-xs px-1">{resumeData?.address}</p>
              <p className="text-xs px-1">{resumeData?.mobile_no}</p>
            </div>
          </div>
          <div className="bg-white w-fit rounded-r-full rounded-l-full mx-auto ">
            {resumeData?.social_links?.map((item, index) => (
              <a
                className="px-3 text-[#ff9900] font-bold"
                href={item?.link}
                key={index + 1}
                target="_blank"
              >
                {item?.name}
              </a>
            ))}
            {/* Add more social links as needed */}
          </div>
        </header>
        <section className="my-1 px-2">
          <h2 style={{ color: "#ff9900" }} className="text-base font-semibold">
            Summary
          </h2>
          <p className="text-xs font-medium">{resumeData?.summary}</p>
        </section>
        <section className="my-1 px-2 w-full">
          <h2 style={{ color: "#ff9900" }} className="text-base font-semibold">
            Work Experience
          </h2>
          <div>
            {resumeData?.experiences?.map((exp, index) => (
              <div className="flex item-start justify-between" key={index + 1}>
                <div className="">
                  <h1 className="text-sm font-semibold">{exp?.company_name}</h1>
                  <h2 className="text-sm font-semibold"> {exp?.designation}</h2>
                  <p className="text-xs">{exp?.description}</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-right text-xs">
                    {formatDate(exp?.start_date)} |{" "}
                    {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="my-1.5 px-2">
          <h2 style={{ color: "#ff9900" }} className="text-xl font-semibold">
            Education
          </h2>
          <div className="flex flex-wrap justify-between">
            {resumeData?.eductaions?.map((education, index) => (
              <div className="mt-1 w-fit">
                <h3 className="text-base font-medium">{education?.university}</h3>
                <p className="text-sm text-gray-600">{education?.course}</p>
                <p className="text-xs text-gray-600">
                  {formatDate(education?.start_date)} |{" "}
                  {education?.is_current
                    ? "present"
                    : formatDate(education?.end_date)}
                </p>
              </div>
            ))}

            {/* Add more education entries as needed */}
          </div>
        </section>
        <div className="flex justify-between">
          <section className="my-1 px-2">
            <h2 style={{ color: "#ff9900" }} className="text-xl font-semibold">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
            {resumeData?.skills?.map((item) => (
                <p className="text-sm ">{item?.skill}</p>
              ))}
              {/* Add more skills as needed */}
            </div>
          </section>
          <section className="my-1 px-2">
            <h2 style={{ color: "#ff9900" }} className="text-xl font-semibold">
              Interests
            </h2>
            <div className="flex gap-3">
            {resumeData?.interests?.map((item) => (
                <p className="text-sm">{item?.interest}</p>
              ))}
              {/* Add more interests as needed */}
            </div>
          </section>
          <section className="my-1 px-2">
            <h2 style={{ color: "#ff9900" }} className="text-xl font-semibold">
              Languages
            </h2>
            <div className="flex flex-wrap justify-start gap-4">
            {resumeData?.languages?.map((item) => (
                <p className="text-sm">{item?.language}</p>
              ))}
            </div>
            {/* Add more languages as needed */}
          </section>
        </div>
        <section className="my-1 px-2">
          <h2 style={{ color: "#ff9900" }} className="text-base font-semibold">
            Projects
          </h2>
      
          <div className="">
          {resumeData?.projects?.map((project, index) => (
            <div className="mt-1 ">
              <div className="flex justify-between">
                <a href={project?.link} className="text-sm cursor-pointer underline font-medium">
                {project?.title}
                </a>
                <p className="text-xs text-gray-600">{formatDate(project?.start_date)}|{formatDate(project?.end_date)}</p>
              </div>
              <p className="text-xs">{project?.description}</p>
            </div>
            ))}
            
            {/* Add more project entries as needed */}
          </div>
        </section>
        <section className="my-1 px-2">
          <h2 style={{ color: "#ff9900" }} className="text-xl font-semibold">
            Certificates
          </h2>
          <ul className="list-disc list-inside">
          {resumeData?.certification?.map((item, index) => (
                <li key={index + 1} className="text-sm">
                  {item?.certificate}
                </li>
              ))}
            {/* Add more certificates as needed */}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template;
