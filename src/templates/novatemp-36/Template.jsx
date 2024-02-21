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
    <div className=" w-[800px] mx-auto ">
      <div className="main_container  flex">
        <div className="w-[70%] px-3 bg-white">
          {/* header */}
          <div>
            <h1 className="text-xl font-bold mt-2 ">
              {resumeData?.full_name}
            </h1>
            <p className="text-base ">{resumeData?.position}</p>
            <div className="flex gap-3  flex-wrap">
              <p className="text-sm">{resumeData?.mobile_no}</p>
              <p className="text-sm">{resumeData?.email}</p>
              <p className="text-sm">{resumeData?.address}</p>
              <div className="flex gap-3">
                {resumeData?.social_links?.map((item, index) => (
                  <a className="text-sm" href={item?.link} key={index + 1}>
                    {item?.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-base text-left font-bold">Summary</h2>
            <span className="bg-black w-[100%] h-[2.3px] block" />
            <p className="text-justify text-sm">{resumeData?.summary}</p>
          </div>
          {/* exp */}
          <div className="mt-2">
            <h2 className="text-base font-bold text-left">Experience</h2>
            <span className="bg-black w-[100%] h-[2.3px] block" />
            {/* exp */}
            {resumeData?.experiences?.map((exp, index) => (
              <div
                key={index + 1}
                className="flex flex-col item-start mt-1.5 justify-between"
              >
                <div className=" flex justify-between ">
                  <div className="flex flex-col">
                  <h1 className="text-sm font-semibold">{exp?.company_name}</h1>
                    <h2 className="text-sm font-semibold">
                      {exp?.designation}
                    </h2>
                  </div>
                  <p className="text-xs text-right">
                    {" "}
                    {formatDate(exp?.start_date)} |{" "}
                    {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                  </p>
                </div>
                <p className="text-xs">{exp?.description}</p>
              </div>
            ))}
          </div>
          {/* prj */}
          <div className="mt-2">
            <h2 className="text-base font-bold text-left">Projects</h2>
            <span className="bg-black w-[100%] h-[2.3px] block" />
            {/* exp */}
            {resumeData?.projects?.map((project, index) => (
              <div className="flex flex-col item-start mt-1.5 justify-between">
                <div className=" flex">
                <div className="flex flex-col  ">

                  <h1 className="text-sm font-semibold">{project?.title}</h1>
                  <a
                    href={project?.link}
                    className="text-sm font-semibold underline"
                  >
                    Project Link
                  </a>
                </div>
                  <p className="text-xs text-right">
                    {" "}
                    {formatDate(project?.start_date)}|{formatDate(project?.end_date)}
                  </p>
                </div>
                  <p className="text-sm">{project?.description}</p>
                <div className="w-[40%]">
                 
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[35%] bg-[#BA7BE0] px-3 min-h-screen">
          <div>
            <img
              src={resumeData?.profile_picture}
              alt={resumeData?.full_name}
              className="w-28 h-28 mt-2 mx-auto rounded-full"
            />
          </div>
          {/* edu*/}
          <div className="mt-2 px-3">
            <h2 className="text-base text-white font-bold text-left">
              Education
            </h2>
            <span className="bg-white w-[100%] h-[2.3px] block" />
            {/* exp */}
            {resumeData?.eductaions?.map((education, index) => (
              <div
                key={index + 1}
                className="flex item-start mt-1.5 justify-between"
              >
                <div className="text-white">
                  <h1 className="text-sm font-semibold">
                    {education?.university}
                  </h1>
                  <p className="text-sm">{education?.course}</p>
                </div>
                <div className="w-[40%] text-white">
                  <p className="text-right text-sm">
                    {" "}
                    {formatDate(education?.start_date)} |{" "}
                    {education?.is_current ? "present" : formatDate(education?.end_date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/*Certification */}
          <div className="mt-2 px-3 text-center">
            <h2 className="text-base text-left text-white font-bold">
              Certification
            </h2>
            <span className="bg-white w-[100%] h-[2.3px] block" />
            <div className="text-sm mt-2 text-left font-semibold text-white">
              {resumeData?.certification?.map((item, index) => (
                <p key={index + 1} className="text-sm">
                  {item?.certificate}
                </p>
              ))}
            </div>
          </div>
          {/* interest */}
          <div className="mt-2 px-3">
            <h2 className="text-base font-bold text-white">Interests</h2>
            <span className="bg-white w-[100%] h-[2.3px] block" />

            <div className="flex text-white gap-4 mt-2">
            {resumeData?.interests?.map((item) => {
                <p className="text-sm">{item?.interest}</p>;
              })}
            </div>
          </div>
          {/* skill */}
          <div className=" mt-2 px-3">
            <h2 className="text-base font-bold text-white">Skills</h2>
            <span className="bg-white w-[100%] h-[2.3px] block" />
            <div className="flex text-white font-semibold flex-wrap gap-4 mt-2">
              {resumeData?.skills?.map((item) => {
                <p className="text-sm">{item?.skill}</p>;
              })}
            </div>
          </div>
          {/* Language */}
          <div className="mt-2 px-3">
            <h2 className="text-base font-bold text-white">Language</h2>
            <span className="bg-white w-[100%] h-[2.3px] block" />
            <div className="flex text-white gap-4 mt-2">
              {resumeData?.languages?.map((item) => {
                <p className="text-sm">{item?.language}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
