import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Template = () => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );

  if (!resumeData) {
    return null; // Handle the case where data is not available.
  }

  return (
    <div className="mx-auto bg-white">
      {/* Header */}
      <div className="text-center p-2 bg-[#545454]">
        <img
          src={resumeData?.profile_picture}
          alt={resumeData?.full_name}
          className="w-20 h-20 mx-auto rounded-full"
        />
        <h1 className="text- xl font-bold text-white mt-2">
          {resumeData?.full_name}
        </h1>
        <p className="text-sm text-white">{resumeData?.position}</p>
      </div>
      {/* Contact */}
      <div className="bg-[#545454]">
        <div className="flex justify-center text-sm space-x-4 text-white">
          <a
            href={`mailto:${resumeData.email}`}
            className="hover:text-blue-600"
          >
            {resumeData?.email}
          </a>
          <span>|</span>
          <span>{resumeData?.mobile_no}</span>
          <span>|</span>
          <span>{resumeData?.address}</span>
        </div>
        <div className="flex justify-center mt-2">
          {resumeData?.social_links?.map((links) => (
            <a
              href={links?.link}
              key={links?.id}
              className="text-blue-100 px-1 text-sm hover:underline"
            >
              {links?.name}
            </a>
          ))}
        </div>
      </div>
     <div className="px-4">
 {/* About */}
 <div>
        <h1 className="text-base font-bold text-gray-700">About</h1>
        <p className="text-sm">{resumeData?.summary}</p>
      </div>
      {/* Skills */}
      <div className="mt-6">
        <h2 className="text-base font-bold text-gray-700">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {resumeData?.skills?.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#545454] text-sm text-white rounded-md"
            >
              {skill?.skill}
            </span>
          ))}
        </div>
      </div>
      {/* Work Experience */}
      <h2 className="text-base mt-2 font-bold text-gray-700">Work Experience</h2>
      <div className="mt-0.5 flex justify-between">
        {resumeData?.experiences?.map((experience, index) => (
          <div key={index} className="w-[50%] mx-2">
            <h3 className="text-sm font-bold">{experience?.company_name}</h3>
            <p className="text-gray-600 text-sm">
              {experience?.designation} | {experience?.start_date} -{" "}
              {formatDate(experience?.is_current) ? "present" :formatDate(experience?.end_date)}
            </p>
            <p className="text-white rounded-md text-sm p-1 w-fit bg-[#545454]">
              {experience?.description}
            </p>
          </div>
        ))}
      </div>
      {/* Projects */}
      <h2 className="text-base font-bold text-gray-700">Projects</h2>
      <div className="mt-1 flex justify-between">
        {resumeData?.projects?.map((project, index) => (
          <div key={index} className="w-[50%] mx-2">
            <h3 className="text-sm font-bold">{project?.title}</h3>
            <p className= " text-sm text-gray-600">
             <a href={project?.link} >Project Link</a> | {formatDate(project?.start_date)}-{formatDate(project?.end_date)}
            </p>
            <p className="text-white text-sm bg-[#545454] p-1 rounded-md">
              {project?.description}
            </p>
          </div>
        ))}
      </div>
      {/* Education */}
      <h2 className="text-base font-bold text-gray-700">Education</h2>
      <div className="mt-1 flex justify-between">
        {resumeData?.eductaions?.map((education, index) => (
          <div key={index} className="w-[50%] mx-2">
            <h3 className="text-sm font-bold">{education?.university}</h3>
            <p className="text-white w-fit text-sm bg-[#545454] p-1 rounded-md">
              {education?.course} | {formatDate(education?.start_date)} -{" "}
              {education?.is_current ? "present" : formatDate(education?.end_date)}
            </p>
          </div>
        ))}
      </div>
      {/* Languages */}
      <div className="flex gap-1 justify-center">
        <div className="mt-1 w-[50%]">
          <h2 className="text-base font-bold text-gray-700">Languages</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {resumeData?.languages?.map((language, index) => (
              <p key={index} className="text-gray-600 text-sm">
                {language?.language}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-1 w-[50%]">
          <h2 className="text-base font-bold text-gray-700">Interests</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {resumeData?.interests?.map((interest, index) => (
              <p key={index} className="text-gray-600 text-sm">
                {interest?.interest}
              </p>
            ))}
          </div>
        </div>
      {/* Certifications */}
   
        <div className="mt-1 w-[50%]">
          <h2 className="text-base font-bold text-gray-700">Certifications</h2>
          <ul className="list-disc list-inside mt-2">
            {resumeData?.certification?.map((certification, index) => (
              <li className="text-sm" key={index}>{certification?.certificate}</li>
            ))}
          </ul>
        </div>
      </div>
     </div>
     
    </div>
  );
};

export default Template;
