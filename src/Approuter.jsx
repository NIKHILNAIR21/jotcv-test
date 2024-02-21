import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import ScrollToTopOnNavigation from "./component/ScrollToTopOnNavigation";
import TemplatesPage from "./screen/templates/TemplatesPage";
import LoginModal from "./component/Modals/LoginModal";
import Education from "./screen/ResumeForm/Education";

import Skill from "./screen/ResumeForm/Skill";
import WorkExp from "./screen/ResumeForm/WorkExp";
import Profile from "./component/Profile";

import ConfirmationPage from "./screen/Pricing/ConfirmationPage";
import AddProjectForm from "./screen/ResumeForm/AddProjectForm";
import EducationHistory from "./screen/ResumeForm/Cards/EducationHistory";
import ProjectHistoryCard from "./screen/ResumeForm/Cards/ProjectHistoryCard";
import WorkHistoryCard from "./screen/ResumeForm/Cards/WorkHistoryCard";
import CertificateUI from "./screen/ResumeForm/CertificateUI";
import InterestUi from "./screen/ResumeForm/InterestUi";
import LanguageForm from "./screen/ResumeForm/LanguageForm";
import SocialLinkForm from "./screen/ResumeForm/SocialLinkForm";
import Preview from "./screen/preview/Preview";
import AskExp from "./screen/questions/AskExp";
import AskJobTitle from "./screen/questions/AskJobTitle";
import AskSkills from "./screen/questions/AskSkills";
import Edutips from "./screen/questions/Edutips";
import PickTemplate from "./screen/questions/PickTemplate";
import Worktips from "./screen/questions/Worktips";
import { getToken } from "./session";
import NavBar from "./NewComponent/Navbar/NavBar";
import AboutUs from "./screen/NewAbout/AboutUs";
import Home from "./screen/NewHome/Home";
import ResumeContainer from "./screen/ResumeContainer";
import "./App.css";
import Contactus from "./screen/NewContactUs/Contactus";
import QuestionList from "./VideoProfileComponent/QuestionList";
import VideoPage from "./VideoProfileComponent/Videopage";

import PricingHome from "./screen/NewHome/sub-section/Pricing";
import PrivacyPolicy from "./screen/NewHome/sub-section/PrivacyPolicy";
import Template from "./screen/NewHome/sub-section/Template";
import TermsAndConditon from "./screen/NewHome/sub-section/TermsAndConditon";
import NotFound from "./screen/NotFound";

import { WebPortfolio } from "./screen/Web-Portfolio/WebPortfolio";
import ComapanyList from "./screen/companylist/ComapanyList";
import EmailTemplate from "./screen/companylist/EmailTemplate";
import ResumeLayout from "./templates/ResumeLayout";
import DetailsPage from "./screen/companylist/DetailsPage";
import AppliedJobs from "./screen/companylist/AppliedJobs";
import ResumeBuild from "./screen/ResumeForm/ResumeBuild";
import Document from "./screen/MyDocument/Document";
const Approuter = () => {
  const location = useLocation();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const toggleModal = (modalType) => {
    if (modalType === "login") {
      setLoginModalOpen((prevState) => !prevState);
    } else if (modalType === "signup") {
      setSignupModalOpen((prevState) => !prevState);
    }
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <>
      {getToken() ? (
        <header>
          <Navbar onLoginClick={() => toggleModal("login")} />
        </header>
      ) : (
        <header>
          <NavBar onLoginClick={() => toggleModal("login")} />
        </header>
      )}
      <ScrollToTopOnNavigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home onLoginClick={() => toggleModal("login")} />}
          />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditon />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/pricing-plans"
            element={<PricingHome loginclick={() => toggleModal("login")} />}
          />
          <Route
            path="/our-templates"
            element={<Template loginclick={() => toggleModal("login")} />}
          />

          <Route
            path="/job-details"
            element={<DetailsPage login={() => toggleModal("login")} />}
          />
          <Route path="/company-list" element={<ComapanyList />} />
          {getToken() ? (
            <>
              {" "}
              <Route path="web-portfolio" element={<WebPortfolio />} />
              <Route path="/my-document" element={<Document />} />
              <Route path="/education" element={<Education />} />
              <Route path="/workexp" element={<WorkExp />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/experience-level" element={<AskExp />} />
              <Route path="/choose-template" element={<PickTemplate />} />
              <Route path="/edutips" element={<Edutips />} />
              <Route path="/worktips" element={<Worktips />} />
              <Route path="/askjobtitle" element={<AskJobTitle />} />
              <Route path="/askskills" element={<AskSkills />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/add-projects" element={<AddProjectForm />} />
              <Route path="/work-history" element={<WorkHistoryCard />} />
              <Route path="/education-history" element={<EducationHistory />} />
              <Route path="/resumes" element={<ResumeContainer />} />
              <Route path="/project-history" element={<ProjectHistoryCard />} />
              <Route path="/interests" element={<InterestUi />} />
              <Route path="/video/:questionId" element={<VideoPage />} />
              <Route path="/certificates" element={<CertificateUI />} />
              <Route path="/languages" element={<LanguageForm />} />
              <Route path="/social" element={<SocialLinkForm />} />
              <Route path="/temp" element={<ResumeLayout />} />
              <Route path="/video-profile" element={<QuestionList />} />
              <Route path="/resume-build" element={<ResumeBuild />} />
              <Route path="/email-template" element={<EmailTemplate />} />
              <Route path="/applied-jobs" element={<AppliedJobs />} />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>
      </main>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default Approuter;
