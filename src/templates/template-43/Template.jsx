import React from "react";
import { useSelector } from "react-redux";
import logo from "./logo.png";
import searchbar from "./searchbar.png";
import common from "./common.png";
import edu from "./edu.png";
import rating from "./rating.png";
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
    <div className="main-container w-[800px] mx-auto">
      <header className="bg-[#2874F0] p-2.5">
        <div className="flex justify-between">
          <div className="flex w-full gap-2 items-center">
            <img src={logo} alt="" />
            <h2 className="text-xl mt-1 text-white font-semibold">
              {resumeData?.full_name}
            </h2>
            <span className="text-white mt-1">|</span>
            <h3 className="text-xl mt-1 text-white font-semibold">
              {resumeData?.position}
            </h3>
          </div>
          <div>
            <img
              className="w-12 rounded-full h-12"
              src={resumeData?.profile_picture}
              alt=""
            />
          </div>
        </div>
        <div>
          <img className="w-full" src={searchbar} alt="" />
        </div>
      </header>
      <div className="flex gap-2 p-6">
        <section className="left bg-[#FFE11B] w-[25%] p-3">
          <section>
            <p className="text-[12.5px] font-semibold mt-1 font-san">
              Email: {resumeData?.email}
            </p>
            <p className="text-[12.5px] font-semibold mt-1 font-san">
              City:{resumeData?.city}
            </p>
            <p className="text-[12.5px] font-semibold mt-1 font-san">
              Phone: {resumeData?.phone}
            </p>
            <div className="flex gap-1">
              {resumeData?.social_links?.map((link, index) => (
                <a
                  href={link?.link}
                  key={index}
                  className="text-[12.5px] font-semfibold mt-1"
                >
                  {link?.name}
                </a>
              ))}
            </div>
          </section>
          <section className="w-full mt-2">
            <div className="flex gap-1">
              <img className="w-[13px] h-[13px] mt-1.5" src={edu} alt="" />
              <h2 className="font-sans text-black font-bold">EDUCATION</h2>
            </div>

            <div>
              {resumeData?.eductaions?.map((education, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold">
                    {education?.university}
                  </h3>
                  <p className="text-sm text-gray-600">{education?.course}</p>
                  <p className="text-xs text-gray-600">
                    {formatDate(education?.start_date)} -{" "}
                    {education.is_current
                      ? "present"
                      : formatDate(education?.end_date)}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="w-full mt-2">
            <div className="flex gap-1 item-center">
              <img className="w-[13px] h-[13px] mt-1.5" src={common} alt="" />
              <h2 className="font-sans text-black font-bold">SKILLS</h2>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {resumeData?.skills?.map((skill, index) => (
                <p
                  key={index}
                  className="text-sm rounded-md bg-black p-1.5 text-white font-semibold w-fit"
                >
                  {skill?.skill}
                </p>
              ))}
            </div>
          </section>

          {/* LANGUAGES section */}
          <section className="w-full mt-2">
            <div className="flex gap-1 item-center">
              <img className="w-[13px] h-[13px] mt-1.5" src={common} alt="" />
              <h2 className="font-sans font-bold">LANGUAGES</h2>
            </div>
            <div>
              <ul className="list-inside">
                {resumeData?.languages?.map((language, index) => (
                  <li key={index}>{language?.language}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* CERTIFICATIONS section */}
          <section className="w-full mt-2">
            <div className="flex gap-1 item-center">
              <img className="w-[13px] h-[13px] mt-1.5" src={common} alt="" />
              <h2 className="font-sans font-bold">CERTIFICATIONS</h2>
            </div>
            <div>
              <ul className="list-inside">
                {resumeData?.certifications?.map((certification, index) => (
                  <li key={index}>{certification?.certificate}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* INTERESTS section */}
          <section className="w-full mt-2">
            <div className="flex gap-1 item-center">
              <img className="w-[13px] h-[13px] mt-1.5" src={common} alt="" />
              <h2 className="font-sans font-bold">INTERESTS</h2>
            </div>
            <div>
              <ul className="list-inside">
                {resumeData?.interests?.map((interest, index) => (
                  <li key={index}>{interest?.interest}</li>
                ))}
              </ul>
            </div>
          </section>
        </section>
        <section className="right">
          <p className="font-sans text-justify text-xs">
            {resumeData?.summary}
          </p>
          <img className="w-full mt-2" src={rating} alt="" />

          {/* EXPERIENCE section */}
          <section className="w-full mt-2">
            <div className="flex gap-1 item-center">
              <h3 className="font-sans text-black font-bold">EXPERIENCE</h3>
            </div>
            {resumeData?.experiences?.map((experience, index) => (
              <div key={index} className="w-full p-1">
                <p className="font-sans text-justify text-xs">
                  <div className="p-1.5 text-justify">
                    <div className="flex gap-1 text-[#2874F0]">
                      <h3 className="text-sm text-[#2874F0] font-semibold">
                        {experience?.company_name}
                      </h3>
                      <p className="text-sm text-[#2874F0] font-semibold">
                        {experience?.position}
                      </p>
                      <p className="text-xs text-[#2874F0] mt-1 font-semibold">
                        {formatDate(experience?.start_date)} -{" "}
                        {experience.is_current
                          ? "present"
                          : formatDate(experience?.end_date)}
                      </p>
                    </div>
                    <p className="text-xs">{experience?.description}</p>
                  </div>
                </p>
              </div>
            ))}
          </section>

          {/* PROJECTS section */}
          <section className="w-full mt-2">
            <div className="flex gap-1 item-center">
              <h3 className="font-sans text-black font-bold">PROJECTS</h3>
            </div>
            {resumeData?.projects?.map((project, index) => (
              <div key={index} className="w-full p-1">
                <p className="font-sans text-justify text-xs">
                  <div className="p-1.5 text-justify">
                    <div className="flex gap-1 text-[#2874F0]">
                      <h3 className="text-sm text-[#2874F0] font-semibold">
                        {project?.title}
                      </h3>
                      <p className="text-xs text-[#2874F0] mt-1 font-semibold">
                        {formatDate(project?.start_date)} -{" "}
                        {formatDate(project?.end_date)}
                      </p>
                    </div>
                    <p className="text-xs">{project?.description}</p>
                  </div>
                </p>
              </div>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Template;
