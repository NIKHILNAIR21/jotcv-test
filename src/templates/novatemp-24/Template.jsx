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
      <div className="main-container  p-2.5 bg-white ">
        <header>
          <h2 className="text-xl font-semibold">{resumeData?.full_name}</h2>
          <h3 className="text-base">{resumeData?.position}</h3>
          <div>
            <p className="text-white text-sm bg-blue-500 p-2 rounded-md">
              {resumeData?.summary}
            </p>
          </div>
          {/* contact */}
          <div className="p-2 bg-red-500 flex-wrap justify-between rounded-md text-sm flex gap-2">
            <p className="text-sm text-white">{resumeData?.email}</p>
            <p className="text-sm text-white">{resumeData?.mobile_no}</p>
            <p className="text-sm text-white">{resumeData?.address}</p>
            <div className="flex gap-2  flex-wrap">
              {resumeData?.social_links?.map((item, index) => (
                <a className="text-sm text-white" href={item?.link} key={index + 1}>
                  {item?.name}
                </a>
              ))}
            </div>
          </div>
        </header>
        <div className="flex  gap-4">
          <div className="left w-[50%]">
            {/* work exp */}
            <div className=" p-1">
              <h2 className="font-bold text-blue-500">Work Experience</h2>
              <span className="bg-black w-96 h-[2.3px]  block" />
              {/* exp */}
              {resumeData?.experiences?.map((exp, index) => (
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold">
                        {exp?.company_name}
                      </h1>
                      <h2 className="text-sm text-blue-500 font-semibold">
                        {exp?.designation}
                      </h2>
                    </div>
                    <p className="text-xs text-right">
                      {" "}
                      {formatDate(exp?.start_date)} |{" "}
                      {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                    </p>
                  </div>
                  <div className="w-[95%]">
                    <p className="text-xs text-justify">{exp?.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* project */}
            <div className=" p-1">
              <h2 className="font-bold text-blue-500">Project</h2>
              <span className="bg-black w-96 h-[2.3px]  block" />
              {/* exp */}
              {resumeData?.projects?.map((project, index) => (
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm text-blue-500 font-semibold">
                        {project?.title}
                      </h1>
                      <a href={project?.link} className="text-sm font-semibold">
                        Project Link
                      </a>
                    </div>
                    <p className="text-xs text-right">
                      {" "}
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
          <div className="right w-[50%] ">
            {/* edu */}
            <div>
              <h2 className="text-base font-bold text-blue-500 p-1  w-fit">
                Education
              </h2>
              <span className="bg-black w-full h-[2.3px]  block" />
              {resumeData?.eductaions?.map((education, index) => (
                <div>
                  <div className="p-1">
                    <p className="text-base text-blue-500 font-bold">
                      {education?.course}
                    </p>
                    <h1 className="text-sm ">{education?.university}</h1>
                  </div>
                  <div className="w-[40%]  p-1">
                    <p className=" text-sm">
                      {formatDate(education?.start_date)} |{" "}
                      {education?.is_current ? "present" : formatDate(education?.end_date)}
                    </p>
                  </div>
                </div>
              ))}
             
            </div>
            {/* skill */}
            <div className="">
              <h2 className="text-base font-bold text-blue-500 p-1 w-fit">
                Skills
              </h2>
              <span className="bg-black w-full h-[2.3px]  block" />
              <div className="flex gap-3 my-2 flex-wrap">
              {resumeData?.skills?.map((item) => (
                <p className="text-sm bg-blue-500 text-white rounded p-1">
                  {item?.skill}
                </p>
              ))}
           
              </div>
            </div>
            {/* Interest */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-blue-500 p-1 w-fit">
                Interests
              </h2>
              <span className="bg-black w-full h-[2.3px]  block" />
              <div className="flex flex-wrap gap-4 p-1">
              {resumeData?.interests?.map((item) => (
                <p className="text-sm font-semibold ">{item?.interest}</p>
              ))}
              </div>
            </div>
            {/* Languages */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-blue-500 p-1 w-fit">
                Language
              </h2>
              <span className="bg-black w-full h-[2.3px]  block" />
              <div className="flex p-1 gap-4 flex-wrap">
              {resumeData?.languages?.map((item) => (
               <p className="text-sm  font-semibold">{item?.language}</p>
              ))}
              </div>
            </div>
            {/* certificates */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-blue-500 p-1 w-fit">
                Certifications
              </h2>
              <span className="bg-black w-full h-[2.3px]  block" />
              <div className="flex flex-col gap-1 p-1">
              {resumeData?.certification?.map((item, index) => (
                <p className="text-sm font-semibold">
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
