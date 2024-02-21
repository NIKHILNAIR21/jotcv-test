import React from "react";
import Contact from "./section/Contact";
import Header from "./section/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Skill from "../novatemp-4/section/Skill";
import WorkExp from "../novatemp-4/section/WorkExp";
import Education from "../novatemp-4/section/Education";
import Language from "../novatemp-4/section/Language";
import Certificate from "../novatemp-4/section/Certificate";
import Interest from "../novatemp-4/section/Interest";
import VideoProfile from "../novatemp-4/section/VideoProfile";
const Template = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  return (
    <div className="A4 w-[100%] px-4">
      <div className="flex">
        <Header
          // img={resumeData?.profile_picture}
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
      </div>
      <Skill skills={resumeData?.skills} />
      <WorkExp experince={resumeData?.experiences} />
      <div className="px-2">
      <div className="border-t-2 border-gray-700 border-b-2">
        <h1 className="font-semibold uppercase text-base text-center text-gray-700 ">
        Project
        </h1>
      </div>
      <div>
        {resumeData?.projects?.map((exp, index) => (
          <div key={exp?.id} className="mt-2  p text-justify">
            <h3 className="text-sm  text-black font-semibold">
              {exp?.title}
            </h3>
            <div className="flex justify-between">
              <a href={exp?.link} className="text-sm text-black">Project link</a>
              <p className="text-sm text-black">
                {exp?.start_date} -{" "}
                {exp?.end_date}
              </p>
            </div>
            <p className="text-sm text-black font-medium">{exp?.description}</p>
          </div>
        ))}
      </div>
    </div>

      <Education edu={resumeData?.eductaions} />
      <Language languages={resumeData?.languages} />
      <Certificate certificate={resumeData?.certification} />
      <Interest interest={resumeData?.interests} />
      {/* {resumeData?.video_questions?.some((data) => data?.video !== null) && (

      <VideoProfile videoAns={resumeData?.video_questions} />
      )} */}
    </div>
  );
};

export default Template;
