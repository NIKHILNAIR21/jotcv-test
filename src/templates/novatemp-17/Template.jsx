import React from 'react'
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
      <div className="main-container ">
  {/* header */}
  <div className="px-2 bg-purple-400">
    <header className="flex justify-start gap-x-6 items-center">
      <img
        className="w-28 h-32 mt-4 rounded-md"
        src={resumeData?.profile_picture}
        alt={resumeData?.full_name}
      />
      <div>
        <h1 className="font-semibold text-xl">{resumeData?.full_name}</h1>
        <h3 className="font-medium text-gray-600 text-base">{resumeData?.position}</h3>
        <p className="font-medium text-sm">
        {resumeData?.summary}
        </p>
      </div>
    </header>
  </div>
  {/* contact */}
  <div>
    <section className="flex bg-purple-600 font-semibold text-sm p-1 text-white justify-around items-center">
      <h3>{resumeData?.email}</h3>
      <h3>{resumeData?.mobile_no}</h3>
      <h3>{resumeData?.address}</h3>
      <h3>
      {resumeData?.social_links?.map((item, index) => (

        <a className="px-2" href={resumeData?.link} key={1}>
        {item?.name}
        </a>
      ))}

      </h3>
    </section>
  </div>
  {/* skill */}
  <div className="px-2">
    <h1 className="font-semibold uppercase text-base mt-2 text-purple-500">
      Skills
    </h1>
    <div className="flex gap-x-2.5 flex-wrap mt-2.5">
    {resumeData?.skills?.map((item) => (

      <p className="text-sm rounded-md text-white font-semibold p-1 w-fit bg-purple-500">
      {item?.skill}
      </p>
    ))}
      
    </div>
  </div>
  {/* workExp */}
  <div className="px-2">
    <h1 className="font-semibold uppercase text-base mt-2 text-purple-500">
      Work Experience
    </h1>
    {resumeData?.experiences?.map((exp, index) => (

    <div>
      <div className="mt-1 p-1.5 text-justify">
        <h3 className="text-base text-black font-semibold">{exp?.company_name}</h3>
        <div className="flex justify-between">
          <p className="text-sm text-purple-800 text-black">{exp?.designation}</p>
          <p className="text-xs text-black">{formatDate(exp?.start_date)} |{" "}
                    {exp?.is_current ? "present" : formatDate(exp?.end_date)}</p>
        </div>
        <p className="text-xs text-black font-medium">
        {exp?.description}
        </p>
      </div>

    </div>
    ))}
  </div>
  {/* Project */}
  <div className="px-2">
    <h1 className="font-semibold uppercase text-base mt-2 text-purple-500">
      Projects
    </h1>
    <div>
    {resumeData?.projects?.map((project, index) => (
        <div className="mt-1 p-1.5 text-justify">
        <h3 className="text-base text-black font-semibold">{project?.title}</h3>
        <div className="flex justify-between">
          <a href={project?.link} className="text-sm text-black">project Link</a>
          <p className="text-xs text-black">{formatDate(project?.start_date)}|{formatDate(project?.end_date)}</p>
        </div>
        <p className="text-xs text-black font-medium">
        {project?.description}
        </p>
      </div>

    ))}
    
    
    </div>
  </div>
  {/* education */}
  <div className="px-2">
    <h1 className="font-semibold uppercase text-base mt-2 text-purple-500">
      Education
    </h1>
    <div>
  {resumeData?.eductaions?.map((education, index) => (
    <div className="mt-1 p-1.5 rounded">
        <div>
          <h3 className="text-base font-medium">{education?.university}</h3>
          <p className="text-xs text-gray-600">
          {education?.course}
          </p>
          <p className="text-xs text-gray-600">{formatDate(education?.start_date)} -{" "}
                      {education?.is_current ? "present" : formatDate(education?.end_date)}</p>
        </div>
      </div>
  ))}
    
    </div>
  </div>
  {/*language*/}
  <div className="px-2">
    <h1 className="font-semibold uppercase text-base mt-2 text-purple-500">
      Languages
    </h1>
    <div className="flex gap-x-4">
    {resumeData?.languages?.map((item) => (
      <div className="mt-1 flex gap-x-4 px-2">
        <p className="text-base">{item?.language}</p>
      </div>
    ))}
    </div>
  </div>
  {/*certificate*/}
  <div className="px-2">
    <h1 className="font-semibold uppercase text-base mt-2 text-purple-500">
      Certifications
    </h1>
    <div>
      <ul className="list-disc flex gap-x-1 list-inside">
      {resumeData?.certification?.map((item, index) => (
        <li>{item?.certificate}</li>
      ))}
 
      </ul>
    </div>
  </div>
  {/* interest */}
  <div className="px-2">
    <h1 className="font-semibold uppercase text-base mt-2 text-purple-500">
      Interests
    </h1>
    <div className="flex gap-x-3">
    {resumeData?.interests?.map((item) => (
                <p className="text-sm px-2">{item?.interest}</p>
              ))}
    </div>
  </div>
  {/* video profile */}
</div>

    </div>
  )
}

export default Template
