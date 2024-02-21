import React from 'react'
import Header from './section/Header'
import Contact from './section/Contact';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Skill from './section/Skill';
import WorkExp from './section/WorkExp';
import Education from './section/Education';
import Language from './section/Language';
import Certificate from './section/Certificate';
import Interest from './section/Interest';
import VideoProfile from './section/VideoProfile';
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
    <div className='A4  w-[100%]'>
      <Header  img={resumeData?.profile_picture} fullname={resumeData?.full_name} profession={resumeData?.position} summary={resumeData?.summary} />
      <Contact email={resumeData?.email} City={resumeData?.address} phoneNo={resumeData?.mobile_no} socialLinks={resumeData?.social_links}/>
      <Skill skills={resumeData?.skills}/>
      <WorkExp experince = {resumeData?.experiences}/>
      {/* Project */}
      <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-1.5 text-red-700 ">
        Projects
      </h1>
      <div>
        {resumeData?.projects?.map((exp, index) => (
          <div key={exp?.id} className="mt-2 text-justify">
            <h3 className="text-sm  text-black font-semibold">
              {exp?.title}
            </h3>
            <div className="flex justify-between">
              <a href={exp?.link} className="text-sm underline text-black">Project Link</a>
              <p className="text-sm text-black">
                {formatDate(exp?.start_date)} -{" "}
                {formatDate(exp?.end_date)}
              </p>
            </div>
            <p className="text-sm text-black font-medium">{exp?.description}</p>
          </div>
        ))}
      </div>
    </div>
      <Education edu={resumeData?.eductaions}/>
      <Language languages={resumeData?.languages}/>
      <Certificate certificate={resumeData?.certification}/>
      <Interest interest={resumeData?.interests}/>
      {/* <VideoProfile videoAns={resumeData?.video_questions}/> */}
    </div>
  )
}

export default Template
