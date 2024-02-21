import React from "react";
import Contact from "./section/Contact";
import Header from "./section/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Skill from "./section/Skill";
import WorkExp from "./section/WorkExp";
import Education from "./section/Education";
import Language from "./section/Language";
import Certificate from "./section/Certificate";
import Interest from "./section/Interest";

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
    <div className="A4 w-[100%] ">
      <div className="flex bg-emerald-500">
        <Header
          img={resumeData?.profile_picture}
          fullname={resumeData?.full_name}
          profession={resumeData?.position}
          summary={resumeData?.summary}
        />
      </div>
      <div className="flex  px-5">
        <div className="w-[50%]">
          <Contact
            email={resumeData?.email}
            City={resumeData?.address}
            phoneNo={resumeData?.mobile_no}
            socialLinks={resumeData?.social_links}
          />
          <Skill skills={resumeData?.skills} />
          <Language languages={resumeData?.languages} />
      <Certificate certificate={resumeData?.certification} />
      <div className="px-2">
      
      <h1 className="font-semibold mt-1 uppercase text-base text-left text-teal-400 ">
        Project
      </h1>
    
    <div>
      {resumeData?.projects?.map((prj, index) => (
        <div key={prj?.id} className="mt-1  text-justify">
          <h3 className="text-base  text-black font-semibold">
            {prj?.title}
          </h3>
          <div className="flex justify-between">
            <a className="text-base text-black" href={prj?.link} >Project link</a>
            <p className="text-xs text-black">
              {formatDate(prj?.start_date)} -{" "}
              { formatDate(prj?.end_date)}
            </p>
          </div>
          <p className="text-xs text-black font-medium">{prj?.description}</p>
        </div>
      ))}
    </div>
  </div>

          <Education edu={resumeData?.eductaions} />
     
      {/* <VideoProfile videoAns={resumeData?.video_questions} /> */}
        </div>
        <div className="w-[50%]">
          <WorkExp experince={resumeData?.experiences} />
          <Interest interest={resumeData?.interests} />
 
   
        </div>
      </div>

    </div>
  );
};

export default Template;

