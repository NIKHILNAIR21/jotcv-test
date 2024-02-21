import React from "react";
import images from "../../images";
import Footer from "../NewHome/sub-section/Footer";
import aboutHero from "../../assets/aboutHero.webp";
import aboutbg from "../../assets/aboutbg.png";
import aboutFrame from "../../assets/aboutFrame.png";
import abouticon1 from "../../assets/about-icon1.png";
import abouticon2 from "../../assets/about-icon2.png";
import abouticon3 from "../../assets/about-icon3.png";
import AboutCard from "../../component/AboutCard";

const AboutUs = () => {
  return (
    <div className="w-[27rem] sm:w-full">
      <h2 className="text-center font-semibold font-poppins mt-10 text-3xl md:text-5xl">
        Welcome To JotCV
      </h2>
    
      <div className=" mx-auto mt-[66px]">
        <h2 className="text-3xl md:text-[48px] font-poppins text-center mb-[32px] font-normal ">
          Our Story
        </h2>
        <p className="font-poppins text-[18px] md:text-[22px] w-[90%] sm:w-[80%] md:w-[90%] lg:w-[60%] mx-auto  text-justify">
          Welcome to JotCV, your premier destination for crafting Professional
          Resumes and Video Profile that stand out in the competitive job
          market. Located in the vibrant city of Mumbai, India, jotcv.com
          is dedicated to empowering individuals with the tools and expertise to
          create impressive Resumes with Video Profile effortlessly.
        </p>
      </div>
      <div className="  mx-auto mt-[63px]">
        <h2 className="text-3xl md:text-[48px]  font-poppins text-center mb-[32px] font-normal ">
          Our Mission
        </h2>
        <p className=" font-poppins text-[18px] md:text-[22px] w-[90%] sm:w-[80%]  md:w-[90%] lg:w-[60%] mx-auto  text-justify">
          Our mission at JotCV is to revolutionize the way people approach
          Profile creation. We understand that your Profile is the first
          impression you make on potential employers, and we are committed to
          helping you make it a lasting one. We strive to empower job seekers
          with cutting-edge technology and AI-driven solutions to build Resumes
          with Video Profile that truly reflect their skills, experiences, and
          aspirations.
        </p>
      </div>
      <div className="mt-[61.74px]  ">
        <img className="w-full h-[28rem]" src={aboutFrame} alt="" />
      </div>
      <div className="mt-[50px] ">
        <div className="p-12 w-[96%] md:w-[80%] mx-auto flex flex-wrap justify-center gap-14">
          <AboutCard
            img={abouticon1}
            heading="User-Friendly Platform"
            subtext="Our intuitive platform makes it easy for users of all skill levels to create professional resumes, even if you have no prior experience."
          />
          <AboutCard
            img={abouticon2}
            heading="AI-Powered Assistance"
            subtext="Our AI algorithms provide personalized recommendations and suggestions to enhance your resume's content and appearance."
          />
          <AboutCard
            img={abouticon3}
            heading="Multiple Resume Sections"
            subtext="We offer a wide range of customizable sections, including experiences,projects, languages, and more, ensuring your resume fits your unique profile."
          />
          <AboutCard
            img={abouticon1}
            heading="Video Resumes"
            subtext="Stand out from the crowd by creating customizable Video Resumes that showcase your personality and communication skills."
          />

          <AboutCard
            img={abouticon2}
            heading="Unique Templates"
            subtext="Explore our vast collection of unique templates, inspired by the creativity of Zety, NovoResume, kickresume, EnhanCv, and more."
          />
          <AboutCard
            img={abouticon3}
            heading="Privacy & Security"
            subtext="Your data's security is our utmost priority. We guarantee the protection of your personal information."
          />
        </div>
        <div>
          <h2 className="text-[#3D3D3D] text-[48px] mt-[71px] font-bold text-center">
            Join JotCV Today!
          </h2>
          <p className="font-poppins  w-[90%] sm:w-[80%]  md:w-[90%] lg:w-[60%] mx-auto text-[22px] font-normal my-[45px]   text-center">
            Whether you're a seasoned professional or just starting your career
            journey, jotcv.com is your trusted partner in crafting resumes that
            open doors to exciting opportunities. Embrace the future of resume
            creation with us and embark on a journey towards career success.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
