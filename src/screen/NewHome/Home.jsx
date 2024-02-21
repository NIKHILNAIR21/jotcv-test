import React, { useRef } from "react";
import Company from "./sub-section/Company";
import Footer from "./sub-section/Footer";
import Review from "./sub-section/Review";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import intersect from "../../assets/job_newsLetter.png";
import icon from "../../assets/send.png";
import homebg from "../../assets/homebg-4.png";
import homeside from "../../assets/homegif.mp4";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import star from "../../assets/star.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import { newLetter } from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import { getToken } from "../../session";
import Faq from "./sub-section/Faq";
import aboutbg from "../../assets/intersect.png";
import CommonSection from "./sub-section/CommonSection";
import BenifitSection from "./sub-section/BenifitSection";
import { Fade, Rotate } from "react-awesome-reveal";
const Home = ({ onLoginClick }) => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (getToken()) {
      navigate("/resumes");
    }
    playVideo();
  }, []);

  const handleSubmit = async () => {
    if (email !== "") {
      let data = {
        email: email,
      };

      try {
        let response = await newLetter(data);
        if (response?.status == 201) {
          showNotification("success", "Subscribed Successfully");
          setEmail("");
        }
      } catch (error) {}
    } else {
      showNotification("danger", "Email was not send");
    }
  };

  return (
    <>
      <div className="main font-poppins z-30 w-[27rem] mx-auto sm:w-full relative mt-0  overflow-hidden ">
        <div className="flex">
          <main className="h-full flex flex-col relative w-full justify-center gap-3  mx-auto  items-start ">
            <img
              rel="preload"
              fetchpriority="high"
              as="image"
              type="image/png"
              className="absolute   -z-10 left-0  top-0 w-full h-full sm:h-[90vh]"
              src={homebg}
              alt=""
            />

            <div className="p-5 sm:p-20 ">
              <Fade
                direction="down"
                duration={3000}
                className="transition-all delay-100 "
              >
                <h1 className="text-[14.5px] my-1 pt-4 md:my-3 sm:text-[26px] font-semibold font-poppins text-white md:text-[28px] mt-1.5  lg:text-[40px] xl:text-[50.2px] text-left md:px-2.5 ">
                  Automate your Job hunt <br /> with JotCV{" "}
                </h1>
              </Fade>

              <div className="text-slate-50  text-[10px] sm:text-[13px] w-[50%] text-justify md:text-xl ">
                JotCV redefines resume creation with a powerful suite of
                features designed to elevate your professional profile
                effortlessly
              </div>
              <Fade
                direction="up"
                duration={3000}
                className="transition-all delay-100 "
              >
                <button
                  type="button"
                  className=" px-2 sm:px-12 mt-4 sm:mt-8 lg:mb-24 md:mb-0 py-1 sm:py-2.5  mx-auto font-poppins  sm:text-base md:text-3xl  w-fit font-semibold bg-white text-sky-600 hover:text-white  hover:bg-gradient-to-tr from-sky-400 via-teal-300 to-blue-500  transition-all delay-75 rounded-r-full rounded-l-full"
                  onClick={onLoginClick}
                >
                  Get Started
                </button>
              </Fade>
            </div>
          </main>
          <video
            className="w-[40%]"
            src={homeside}
            ref={videoRef}
            loop
            autoplay
            muted
          />
        </div>
        <section className="mt-4 sm:mt-28 md:mt-1 lg:mt-20 xl:mt-44">
          <Company />
        </section>
        <section className="mt-24">
          <CommonSection
            heading={
              <div
                dangerouslySetInnerHTML={{
                  __html: `AI Based Resume <br/> Templates!`,
                }}
              />
            }
            login={onLoginClick}
            bg="#F3F7FF"
            subPara={
              "Unlock 200+ SEO-optimized, ATS-friendly Resume Templates with JotCV's AI Assistant. Effortlessly craft standout resumes for any job, company, or experience level."
            }
            img={card1}
          />
          <CommonSection
            heading={
              <div
                dangerouslySetInnerHTML={{
                  __html: `Your Story, Your Style <br/> 
Now in Video Profile! `,
                }}
              />
            }
            login={onLoginClick}
            bg=""
            reverse={true}
            subPara={
              "Crafting Video Profiles with JotCV AI Assistant! Enjoy limitless retakes & redo options for every video question, making your journey seamless and unique"
            }
            img={card2}
          />
          <CommonSection
            heading={
              <div
                dangerouslySetInnerHTML={{
                  __html: `Your Story, Your Style <br/> 
Now in Video Profile! `,
                }}
              />
            }
            login={onLoginClick}
            bg="#F3F7FF"
            subPara={
              "JotCV Unleashes 10+ Modern Web Portfolios, Seamlessly Merging Resumes and Video Profiles for Your Digital Spotlight!"
            }
            img={card3}
          />
          <CommonSection
            heading={
              <div
                dangerouslySetInnerHTML={{
                  __html: `Your Story, Your Style <br/> 
Now in Video Profile! `,
                }}
              />
            }
            login={onLoginClick}
            bg=""
            reverse={true}
            subPara={
              "Reach 1000+ Recruiters, HR Consultants & Headhunters directly! With JotCV, your Resume, Video Profile & Web Portfolio go straight into the Recruiter's inbox."
            }
            img={card4}
          />
        </section>
        <section className="mt-24">
          <BenifitSection
            points={[
              "Access 200+ ATS-friendly Resume Templates",
              "Versatile Resumes for Every Job, Company, & Experience Level!",
              "AI Assistant for Resume writing",
              "Unlimited retakes and redo options for all Video questions",
              "Automatic Web Portfolio creation using Resume",
            ]}
          />
        </section>
        <div className="mt-24 relative bg-[#0064FF]">
          <img className="absolute  h-full w-full z-10" src={aboutbg} alt="" />
          <h1 className="text-[30px] p-5 font-bold text-center text-white">
            Real Stories from Satisfied Users
          </h1>
          <div className="flex justify-evenly flex-wrap gap-10 p-10 relative z-40 mt-4">
            <div className="bg-white w-[370px] p-4 rounded-[16px] px-auto">
              <img className="mx-auto p-1" src={person1} alt="" />
              <h2 className="text-center font-poppins text-xl  font-semibold">
                Harshit Pawan
              </h2>
              <p className="text-center font-poppins font-medium text-sm">
                UX Designer @Google
              </p>
              <p className="text-center p-2 text-sm">
                I was struggling to stand out in the competitive tech world
                until I found jotcv.com. The sleek resume and dynamic video
                profile made a lasting impression.
              </p>
              <img className="w-52 mx-auto" src={star} alt="" />
            </div>
            <div className="bg-white w-[370px] p-4 rounded-[16px]">
              <img className="mx-auto p-1" src={person2} alt="" />
              <h2 className="text-center font-poppins text-xl  font-semibold">
                Vinay Kumar
              </h2>
              <p className="text-center font-poppins font-medium text-sm">
                Full Stack Developer @Paytm
              </p>
              <p className="text-center p-2 text-sm">
                jotcv.com exceeded my expectations! The process was seamless,
                and the results were outstanding. The attention to detail in my
                resume and the interactive web portfolio showcased my project
              </p>
              <img className="w-52 mx-auto" src={star} alt="" />
            </div>
            <div className="bg-white w-[370px] p-4 rounded-[16px]">
              <img className="mx-auto p-1" src={person3} alt="" />
              <h2 className="text-center font-poppins text-xl  font-semibold">
                Riya Kumari
              </h2>
              <p className="text-center font-poppins font-medium text-sm">
                Project Manager @Yahoo
              </p>
              <p className="text-center p-2 text-sm">
                jotcv.com provides a visually appealing resume platform that
                makes customization easy, resulting in a standout and impressive
                resume.
              </p>
              <img className="w-52 mx-auto" src={star} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Faq />
        </div>
        <div className="mt-20 sm:mt-36 ">
          <div className="relative rounded-3xl   w-[430px] sm:w-[760px] md:w-[1200px] mx-auto h-[500px] ">
            <img
              className="absolute left-0 right-0 w-[26rem] h-[8rem] mx-auto sm:w-full sm:h-fit"
              src={intersect}
              alt=""
            />
            <div className="px-2 sm:px-3 md:px-9">
              <h2 className="text-[10px] sm:text-[20px] md:text-[30px] text-white font-semibold font-poppins text-left pt-3  sm:pt-4 md:pt-12  px-4 relative z-10 ">
                Want jobs and news letter in your Inbox?
              </h2>
              <p className="text-[9px] sm:text-[16.2px] font-poppins text-left relative z-10 px-4 text-white">
                Recive latest news, update, and many other things <br /> every
                week.{" "}
              </p>

              <div className="bg-white mt-4 flex w-[38%] sm:w-[40%] px-2.5 sm:px-4 p-0.5 sm:p-1.5 mx-3 relative z-10 justify-between items-center rounded-[12px] ">
                <input
                  className="outline-none placeholder:text-[10px] sm:placeholder:text-[13px] py-1 font-semibold w-[90%]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your email address"
                />{" "}
                <button>
                  <img
                    className=" bg-sky-500 rounded-xl w-5 h-5 sm:w-10 sm:h-9 pt-1 sm:pt-1.5 px-1 sm:px-2  "
                    src={icon}
                    alt=""
                    onClick={() => handleSubmit()}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" ">
          <Footer onLoginClick={onLoginClick} />
        </div>
      </div>
    </>
  );
};

export default Home;
