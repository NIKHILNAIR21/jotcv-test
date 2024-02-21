import React from "react";
import dropdown from "../../../assets/dropdown.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faq = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <h1 className="text-2xl md:text-[36px] py-10 text-center font-semibold">
        Frequently asked Questions
      </h1>
      <div className="flex  flex-col sm:flex-row justify-center w-[70%] mx-auto gap-2 sm:gap-20">
        <div className="sm:w-[50%] flex flex-col items-end gap-2">
          <Accordion
            open={open === 1}
            className=" rounded-lg border  border-blue-gray-100 px-4 "
          >
            <div className="flex items-center">
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`border-b-0 text-sm sm:text-base transition-colors ${
                  open === 1 ? "text-[#027BFC] hover:!text-blue-700" : ""
                }`}
              >
                Why should I use JotCv?
              </AccordionHeader>
              <img
                onClick={() => handleOpen(1)}
                className="w-6 h-6 cursor-pointer"
                src={dropdown}
                alt="dropdown"
              />
            </div>
            <AccordionBody className="pt-0 text-base font-normal">
              JotCv is the best & most versatile web and app-based Resume
              builder, Web Portfolio builder and Video Resume builder available
              in the Market. Below are some features that make JotCv one of the
              top Resume Builder. ATS Friendly Resume Templates designed by
              professionals for all kinds of Job roles and experience levels.
              World's first customizable Video Resume and Video Profile builder.
              Automatic creation of Personal Resume website and Web Portfolio.
              AI-powered and Bot-assisted resume building Resume writing tips
              and resume scoring. Always free resume builder plan is available.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            className=" rounded-lg border border-blue-gray-100 px-4"
          >
            <div className="flex items-center">
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`border-b-0 text-sm sm:text-base  transition-colors ${
                  open === 2 ? "text-[#027BFC] hover:!text-blue-700" : ""
                }`}
              >
                How do I use JotCv effectively?
              </AccordionHeader>
              <img
                onClick={() => handleOpen(2)}
                className="w-6 h-6 cursor-pointer"
                src={dropdown}
                alt="dropdown"
              />
            </div>
            <AccordionBody className="pt-0 text-base font-normal">
              JotCv is a very easy-to-use and intuitive resume builder where you
              can build resumes within minutes.
              <br />
              1. One-click signup via your Google account.
              <br />
              2. Select the templates from 100+ world-class ATS friendly
              templates.
              <br />
              3. Fill in the details just like you are filling out the form.
              <br />
              4. Create Video Resume and Video Profile by answering to AI Bot.
              <br />
              5. Customize your Video Resume and video Profiles with custom
              questions.
              <br />
              6. Select the Personal website or Web Portfolio Template
              <br />
              <br />
              Voila! Your resume, Video Resume and Web Portfolio are done.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <div className="flex items-center">
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`border-b-0 text-sm sm:text-base  transition-colors ${
                  open === 3 ? "text-[#027BFC] hover:!text-blue-700" : ""
                }`}
              >
                Which Resume Templates should I use?
              </AccordionHeader>
              <img
                onClick={() => handleOpen(3)}
                className="w-6 h-6 cursor-pointer"
                src={dropdown}
                alt="dropdown"
              />
            </div>
            <AccordionBody className="pt-0 text-base font-normal">
              We provide 100+ innovative and professionally crafted Modern
              Resumes. We have Company-specific, Job-specific and
              Seniority-specific resume templates. All of our templates are
              ATS-friendly and have been crafted by professionals by researching
              top resume builders. How is JotCv different from other Resume
              Builders? JotCv is one of the first resume builders that is a
              combination of Resume, Video Resume and Web Portfolio. JotCv not
              only helps you create world-class professional resumes but also
              helps you to create Video Profiles where you can showcase your
              skills and auto-creates your Web Portfolio where your Resume and
              Video Profiles are easily visible.
            </AccordionBody>
          </Accordion>
        </div>
        <div className="sm:w-[50%] flex flex-col gap-2">
          <Accordion
            open={open === 4}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <div className="flex items-center">
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className={`border-b-0 text-sm sm:text-base  transition-colors ${
                  open === 4 ? "text-[#027BFC] hover:!text-blue-700" : ""
                }`}
              >
                What is a Video Resume or Video Profile?
              </AccordionHeader>
              <img
                onClick={() => handleOpen(4)}
                className="w-6 h-6 cursor-pointer"
                src={dropdown}
                alt="dropdown"
              />
            </div>
            <AccordionBody className="pt-0 text-base font-normal">
              A Video Resume or Video Profile is a new concept started by JotCv.
              Through a lot of research conducted in collaboration with
              Recruiters and companies, we have found out that a Video where a
              candidate explains his/her profile is preferred over a Resume PDF.
              We have even seen cases where candidates who provided a Video
              Resume or Video Profile along with PDF Resume have skipped the
              first round of Interviews. Video Resume or Video Profiles are the
              new-age resumes. In the near future, the PDF Resumes will be
              replaced by Video Resume & Video Profiles.
            </AccordionBody>
          </Accordion>{" "}
          <Accordion
            open={open === 5}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <div className="flex items-center">
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className={`border-b-0 text-sm sm:text-base  transition-colors ${
                  open === 5 ? "text-[#027BFC] hover:!text-blue-700" : ""
                }`}
              >
                Is JotCv is Free to use?
              </AccordionHeader>
              <img
                onClick={() => handleOpen(5)}
                className="w-6 h-6 cursor-pointer"
                src={dropdown}
                alt="dropdown"
              />
            </div>
            <AccordionBody className="pt-0 text-base font-normal">
              JotCv offers a Free Plan. In the Free plan, the user can create
              Resumes on certain free templates and can edit and download
              multiple times. Rest assured our paid plan is the cheapest in the
              market. Our paid plan is 50% cheaper than the next cheapest
              Resumebuilder. We understand that Job searching is hard and
              difficult and we don't want to burden Job seekers with unnecessary
              costs.
            </AccordionBody>
          </Accordion>{" "}
          <Accordion
            open={open === 6}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <div className="flex items-center">
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className={`border-b-0 text-sm sm:text-base transition-colors ${
                  open === 6 ? "text-[#027BFC] hover:!text-blue-700" : ""
                }`}
              >
                What is Direct HR Connect?
              </AccordionHeader>
              <img
                onClick={() => handleOpen(6)}
                className="w-6 h-6 cursor-pointer"
                src={dropdown}
                alt="dropdown"
              />
            </div>
            <AccordionBody className="pt-0 text-base font-normal">
              JotCv is not just a Resume builder platform. We are more than
              that, we want anybody and everybody coming on our platform to get
              their dream Job. Most of the Job seeking platforms like Linkedin,
              Indeed, Naukri, Monster, etc. only offer benefits to the
              companies. Most of the job applications go unnoticed and
              unattended. The direct HR Connect initiative of JotCv helps
              Job-seekers land a Job by Directly sending Resumes and Video
              Resumes of the Job-seekers into the mailbox of the recruiters with
              a strong reference from the JotCv team. We have 1000+ company
              recruiters and HR consultants enlisted on our platform. All the
              Job-seekers will have a strong chance of landing on a Job using
              Direct HR Connect. We are with you till the end.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
