import React from "react";
import images from "../../../images";
import Showcard from "../../../NewComponent/ShowCards/Showcard";
import show from "../../../assets/showimg.png";
import show2 from "../../../assets/show2.png";
import show3 from "../../../assets/show3.png";
import show4 from "../../../assets/show4.png";

const Showcase = () => {
  return (
    <div>
      <div className="main flex flex-col items-center mb-5">
        <div className="mt-4">
          <h2 className="text-2xl font-poppins sm:text-4xl text-center font-medium">
            What do we offer?
          </h2>
          <p className="text-sm text-center w-[80%] mx-auto font-poppins">
            Create Resumes, Create Video Profiles, Create Web Portfolios, Create
            Cover Letter, Connect with Recruiters, Get your Dream Job.
          </p>
        </div>
        <div className="flex flex-wrap justify-center  lg:flex-row gap-14 md:w-[70rem] pt-10">
          <Showcard
            bg={`f6ebe7`}
            img={show}
            heading="Best Resume Templates"
            bulletpt={[
              "Access to 200+ ATS-friendly Resume Templates crafted for every type of Job, Company, & Experience Level. Create & Customize Resumes using JotCV AI Assistant.",
            ]}
          />
          <Showcard
            bg={`E1F8DC`}
            img={show2}
            heading="Customizable Video Profiles"
            bulletpt="World's 1st & Best platform for creating Video Profiles. Unlimited Retakes and Redo options for all Video questions. Create & Customize Video Profiles using JotCV AI Assistant."
          />
          <Showcard
            img={show3}
            bg={`E1F8DC`}
            heading="Modern Web Portfolios"
            bulletpt="10+ Modern Web Portfolios showcasing your Resumes and Video Profiles. JotCV auto-creates your Web Portfolio using your Resume and Video Profiles."
          />
          <Showcard
            bg={`F6EBE7`}
            img={show4}
            heading={`Direct HR Connect`}
            bulletpt={[
              "Access to 1000+ company Recruiters, HR Consultants & Headhunters. Send your Resume, Video Profile & Web Portfolio directly into the Recruiter's inbox using JotCV.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
