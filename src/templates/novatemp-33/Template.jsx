import React from "react";
import { useSelector } from "react-redux";
const Template = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  
  let question = 0
  return (
    <div className="">
      <div className="  bg-white px-8 py-4 w-[800px] mx-auto">
        <header className="text-center font-serif">
          <div>
            <h2 className="text-xl capitalize">{resumeData?.full_name}</h2>
            <h4 className="text-base capitalize">{resumeData?.position}</h4>
          </div>
          <div className="flex justify-center  gap-2">
            <p className="text-sm">{resumeData?.mobile_no}</p>
            <p className="text-sm">{resumeData?.email}</p>
            <p className="text-sm">{resumeData?.address}</p>
            <div>
              {resumeData?.social_links?.map((item) => (
                <a href={item?.link} className="text-sm capitalize px-1" key={item?.id}>
                  {item?.name}
                </a>
              ))}
            </div>
          </div>
        </header>
        {/* summary */}
        <div className="text-left mt-2">
          <h2 className="text-base text-[#364050]">Summary</h2>
          <span className="bg-[#364050] w-[100%] h-[2.3px] block" />
          <p className="text-justify text-sm">{resumeData?.summary}</p>
        </div>
        {/* skill */}
        <div className="mt-2 text-left">
          <h2 className="text-base text-[#364050]">Skills</h2>
          <span className="bg-[#364050] w-[100%] h-[2.3px] block" />
          <div className="flex flex-wrap gap-4 mt-2">
            {resumeData?.skills.map((item, index) => (
              <p key={index + 1} className="text-sm">
                {item?.skill}
              </p>
            ))}
          </div>
        </div>
        {/* Work EXP */}
        <div className="mt-2 ">
          <h2 className="text-base text-[#364050] text-left">Experience</h2>
          <span className="bg-[#364050] w-[100%] h-[2.3px] block" />
          {/* exp */}
          {resumeData?.experiences?.map((exp, index) => (
            <div key={index+1} className="flex item-start mt-1.5 justify-between">
              <div className="">
                <h1 className="text-sm font-semibold ">
                  {exp?.company_name}
                </h1>
                <h2 className="text-sm font-semibold">{exp?.designation}</h2>
                <p className="text-xs">
                {exp?.description}
                </p>
              </div>
              <div className="w-[40%]">
                <p className=" text-right text-xs">
                  {" "}
                  {formatDate(exp?.start_date)} |{" "}
                  {exp?.is_current ? "present" :formatDate(exp?.end_date) }
                </p>
              </div>
            </div>
          ))}
      
        </div>
        {/* Projects */}
        <div className="mt-2 ">
          <h2 className="text-base text-[#364050] text-left">Projects</h2>
          <span className="bg-[#364050] w-[100%] h-[2.3px] block" />
          {/* PRJ */}
          {resumeData?.projects?.map((project, index) => (

          <div key={index+1} className="flex item-start mt-1.5 justify-between">
            <div className="">
              <h1 className="text-sm font-semibold ">{project?.title}</h1>
              <a href={project?.link} className="text-xs font-medium underline">
              Project Link
              </a>
              <p className="text-xs">
              {project?.description}
              </p>
            </div>
            <div className="w-[40%]">
              <p className=" text-right text-xs"> {formatDate(project?.start_date)}|{formatDate(project?.end_date)}</p>
            </div>
          </div>
          ))}
         
        </div>
        {/* education */}
        <div className="mt-2 ">
          <h2 className="text-base text-[#364050] text-left">Education</h2>
          <span className="bg-[#364050] w-[100%] h-[2.3px] block" />
          {/* exp */}
          {resumeData?.eductaions?.map((education, index) => (
          <div key={index+1} className="flex item-start mt-1 justify-between">
            <div className="">
              <h1 className="text-sm font-semibold ">{education?.university}</h1>
              <p className="text-sm font-semibold text-gray-700">{education?.course}</p>
            </div>
            <div className="w-[40%]">
              <p className=" text-right text-sm">{formatDate(education?.start_date)} |{" "}
                {education?.is_current ? "present" :formatDate(education?.end_date)}</p>
            </div>
          </div>
          ))}
       
          {/* languages */}
          <div className="mt-2 text-left">
            <h2 className="text-base text-[#364050]">Language</h2>
            <span className="bg-[#364050] w-[100%] h-[2.3px] block" />
            <div className="flex gap-2 mt-2">
            {resumeData?.languages.map((item, index) => (
              <p key={index+1} className="text-sm">{item?.language}</p>
            ))}
           
            </div>
          </div>
          {/* certification */}
          <div className="mt-2 text-left">
            <h2 className="text-base text-[#364050]">Certification</h2>
            <span className="bg-[#364050] w-[100%] h-[2.3px] block" />
            <div className="flex gap-2 mt-2">
            {resumeData?.certification?.map((item,index)=>(

              <p key={index+1} className="text-sm">{item?.certificate}</p>
            ))}

            </div>
          </div>
          {/* Interest */}
          <div className="mt-2 text-left">
            <h2 className="text-base text-[#364050]">Interests</h2>
            <span className="bg-[#364050] w-[100%] h-[2.3px] block" />
            <div className="flex gap-2 mt-2">
            {resumeData?.interests.map((item, index) => (
              <p key={index+1} className="text-sm">{item?.interest}</p>
            ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
