import React from "react";
import Header from "./section/Header";
import Contact from "./section/Contact";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Skill from "./section/Skill";
import WorkExp from "./section/WorkExp";
import Education from "./section/Education";
import Language from "./section/Language";
import Certificate from "./section/Certificate";
import Interest from "./section/Interest";
import VideoProfile from "./section/VideoProfile";
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
    <div className="A4 w-[100%] bg-black ">
      <Header
        img={resumeData?.profile_picture}
        fullname={resumeData?.full_name}
        profession={resumeData?.position}
        summary={resumeData?.summary}
      />
      <Contact
        email={resumeData?.email}
        City={resumeData?.address}
        phoneNo={resumeData?.mobile_no}
        socialLinks={resumeData?.social_links}
      />
      <div className="flex px-4" >
      <div className="flex flex-col w-[60%] justify-start"> 
          <WorkExp experince={resumeData?.experiences} />
          <div className="px-2 flex">
      
      <div>
 
         <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
           Projects
         </h1>
         <div>
           {resumeData?.projects?.map((exp, index) => (
             <div key={exp?.id} className="mt-1 text-white  p-1.5 text-justify">
               <h3 className="text-sm  text-red-400 font-semibold">
                 {exp?.title}
               </h3>
               <div className="flex justify-between gap-x-44">
                 <a href={exp?.link} className="text-sm ">Project link</a>
                 <p className="text-xs ">
                   {formatDate(exp?.start_date)} -{" "}
                   {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                 </p>
               </div>
               <p className="text-xs w-[80%] font-medium">
                 {exp?.description}
               </p>
             </div>
           ))}
         </div>
      </div>
   
     </div>
      </div>
    
        <div className="flex flex-col w-[30%] justify-start">
          <Skill skills={resumeData?.skills} />
          <Education edu={resumeData?.eductaions} />
          <Certificate certificate={resumeData?.certification} />
          <Language languages={resumeData?.languages} />
          <Interest interest={resumeData?.interests} />
        </div>
      </div>
      {/* {resumeData?.video_questions?.some((data) => data?.video !== null) && (

      <VideoProfile videoAns={resumeData?.video_questions} />
      )} */}
    </div>
  );
};

export default Template;
