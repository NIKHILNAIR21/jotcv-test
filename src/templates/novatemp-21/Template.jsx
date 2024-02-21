import React from "react";
import { useSelector } from "react-redux";
const Template = () => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  return (
    <div>
      <div className="main-container bg-white w-[800px] mx-auto flex gap-2 p-5">
        <div className="left w-[60%]">
          <header>
            <div className="flex">
              <img
                className="w-32 h-32"
                src={resumeData?.profile_picture}
                alt=""
              />
              <div className="px-2">
                <h2 className="text-xl"> {resumeData?.full_name}</h2>
                <h3 className="text-base">{resumeData?.position}</h3>
                <p className="text-sm">{resumeData?.summary}</p>
              </div>
            </div>
          </header>
          {/* work */}
          <div>
            <h3 className="font-bold text-violet-500 text-base my-1">Work Experience</h3>
            {resumeData?.experiences?.map((exp, index) => (
              <div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-sm bg-violet-500 p-0.5 rounded-r-full rounded-l-full w-fit text-white font-semibold">
                      {exp?.company_name}
                    </h1>
                    <h2 className="text-sm font-semibold">
                      {exp?.designation}
                    </h2>
                  </div>
                  <p className="text-sm text-violet-500 text-right">
                    {" "}
                    {formatDate(exp?.start_date)} |{" "}
                    {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                  </p>
                </div>
                <div className="w-[95%]">
                  <p className="text-sm text-justify">{exp?.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Projects */}
          <div>
            <h2 className="text-base font-bold  p-1 text-violet-500 w-fit">Projects</h2>
            {resumeData?.projects?.map((project, index) => (
              <div key={index+1} className="flex gap-2 flex-col">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-sm font-semibold  bg-violet-500 p-0.5 rounded-r-full rounded-l-full w-fit text-white">{project?.title}</h1>
                    <a
                      href={project?.link}
                      className="text-sm font-semibold underline"
                    >
                      Project Link
                    </a>
                  </div>
                  <p className="text-xs text-violet-500 text-right">
                    {formatDate(project?.start_date)}|{formatDate(project?.end_date)}
                  </p>
                </div>
                <div className="w-[95%]">
                  <p className="text-xs text-justify">
                  {project?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right w-[40%]">
          {/* contacts */}
          <div className="w-80 rounded-md p-2 text-sm text-white bg-violet-500">
            <p className="text-sm">Email:{resumeData?.email}</p>
            <p className="text-sm">Phone:{resumeData?.mobile_no}</p>
            <p className="text-sm">city:{resumeData?.address}</p>
            <div className="flex gap-2 text-sm flex-wrap">
            {resumeData?.social_links?.map((item, index) => (
              <a href={item?.link} key={index + 1}>{item?.name}</a>
            ))}
            </div>
          </div>
          <div className="w-80 mt-2 rounded-md p-2 text-white bg-violet-500">
            {/* edu */}
            <div>
              <h2 className="text-base font-bold  text-white p-1  w-fit">
                Education
              </h2>
              {resumeData?.eductaions?.map((education, index) => (
             <div>
                <div className="p-1">
                  <p className="text-base font-bold">{education?.course}</p>
                  <h1 className="text-sm ">{education?.university}</h1>
                </div>
                <div className="w-[40%]  p-1">
                  <p className=" text-sm">{" "}
                    {formatDate(education?.start_date)} |{" "}
                    {education?.is_current ? "present" : formatDate(education?.end_date)}</p>
                </div>
              </div>
              ))}
            </div>
            {/* skills */}
            <div className="">
              <h2 className="text-base font-bold text-white p-1 w-fit">
                Skills
              </h2>
              <div className="flex gap-3 my-2 flex-wrap">
              {resumeData?.skills?.map((item) => {
                <p className="text-sm p-1">{item?.skill}</p>;
              })}
              </div>
            </div>
            {/* Languages */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-white p-1 w-fit">
                Language
              </h2>
              <div className="flex p-1 gap-4 flex-wrap">
              {resumeData?.languages?.map((item) => {
                <p className="text-sm">{item?.language}</p>;
              })}
              </div>
            </div>
            {/* interest */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-white p-1 w-fit">
                Interests
              </h2>
              <div className="flex flex-wrap gap-4 p-1">
              {resumeData?.interests?.map((item) => {
                <p className="text-sm">{item?.interest}</p>;
              })}
              </div>
            </div>
            {/* certificates */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-white p-1 w-fit">
                Certifications
              </h2>
              <div className="flex flex-col gap-1 p-1">
              {resumeData?.certification?.map((item, index) => (
                <p key={index + 1} className="text-sm">
                  {item?.certificate}
                </p>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
