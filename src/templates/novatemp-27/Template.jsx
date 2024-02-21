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

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  return (
    <div className="A4 ">
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
      <Skill skills={resumeData?.skills} />
      <div className="flex my-1">
        <p className="w-[90%] mx-auto bg-purple-600 h-1"></p>
        <p className="w-[90%] mx-auto bg-black h-1"></p>
        <p className="w-[90%] mx-auto bg-amber-400 h-1"></p>
      </div>
      <WorkExp experince={resumeData?.experiences} />
      <div className="flex my-1">
        <p className="w-[90%] mx-auto bg-purple-600 h-1"></p>
        <p className="w-[90%] mx-auto bg-black h-1"></p>
        <p className="w-[90%] mx-auto bg-amber-400 h-1"></p>
      </div>
      <div className="px-6 flex">
        <div>
          <h1 className="font-semibold uppercase text-base mt-1 text-gray-700 ">
            Projects
          </h1>
          <div>
            {resumeData?.projects?.map((exp, index) => (
              <div key={exp?.id} className="mt-1  p-1.5 text-justify">
                <h3 className="text-sm   text-black font-semibold">
                  {exp?.title}
                </h3>
                <div className="flex justify-between ">
                  <a
                    href={exp?.link}
                    className="text-[15px]  text-left w-[70%]  text-black"
                  >
                    Project Link
                  </a>
                  <p className="text-sm w-[25%] text-right text-black">
                    {formatDate(exp?.start_date)} -{" "}
                    {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                  </p>
                </div>
                <p className="text-sm w-[80%] text-black font-medium">
                  {exp?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex my-1">
        <p className="w-[90%] mx-auto bg-purple-600 h-1"></p>
        <p className="w-[90%] mx-auto bg-black h-1"></p>
        <p className="w-[90%] mx-auto bg-amber-400 h-1"></p>
      </div>
      <Education edu={resumeData?.eductaions} />
      <div className="flex my-1">
        <p className="w-[90%] mx-auto bg-purple-600 h-1"></p>
        <p className="w-[90%] mx-auto bg-black h-1"></p>
        <p className="w-[90%] mx-auto bg-amber-400 h-1"></p>
      </div>
      <Language languages={resumeData?.languages} />
      <div className="flex my-1">
        <p className="w-[90%] mx-auto bg-purple-600 h-1"></p>
        <p className="w-[90%] mx-auto bg-black h-1"></p>
        <p className="w-[90%] mx-auto bg-amber-400 h-1"></p>
      </div>
      <Certificate certificate={resumeData?.certification} />
      <div className="flex my-1">
        <p className="w-[90%] mx-auto bg-purple-600 h-1"></p>
        <p className="w-[90%] mx-auto bg-black h-1"></p>
        <p className="w-[90%] mx-auto bg-amber-400 h-1"></p>
      </div>
      <Interest interest={resumeData?.interests} />
      {/* {resumeData?.video_questions?.some((data) => data?.video !== null) && (
        <VideoProfile videoAns={resumeData?.video_questions} />
      )} */}
    </div>
  );
};

export default Template;
