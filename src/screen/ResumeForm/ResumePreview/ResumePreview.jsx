import React from "react";
import "./resume.css";
import { useSelector } from "react-redux";
import NoImg from "../../../assets/NoImage.jpg";
const ResumePreview = () => {
  const personalData = useSelector((state) => state.personalInfo);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.skills);
  const summary = useSelector((state) => state.summary);
  const { formData } = useSelector((state) => state.workExperience);

  return (
    <div className="resume m-0 ">
      <div className="resume_left">
        <div className="resume_profile">
          {personalData.photo ? (
            <img
              src={personalData.photo}
              alt="Preview"
              className=" mb-2 w-40 h-40 "
            />
          ) : (
            <img src={NoImg} alt="Preview" className=" mb-2 w-20 h-20 " />
          )}
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold">{personalData.FullName}</p>
              <p className="data" id="Profession">
                {personalData.profession}
              </p>
            </div>
            <p className="regular" id="Profession">
              {personalData.summary}
            </p>
            <ul>
              <li>
                <div className="data">
                  {personalData.city} {personalData.pinCode} <br />
                  {personalData.country}
                </div>
              </li>
              <li></li>
              <li>
                <div className="data" id="email">
                  {personalData.email}
                </div>
              </li>
              <li>
                <div className="data">{personalData.phoneNumber}</div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_skills">
            <div className="title">
              <p className="bold">skills</p>
            </div>
            <ul>
              {skills.skills.map((skill, index) => (
                <li>
                  <div className="skill_name" key={index}>
                    {skill.name}
                  </div>
                </li>
              ))}
              {/* Other skill items */}
            </ul>
          </div>
        </div>
      </div>
      <div className="resume_right">
        <div className="resume_item resume_about">
          <div className="title">
            <p className="bold">About us</p>
          </div>
          <p>{summary.summary}</p>
        </div>
        <div className="resume_item resume_work">
          <div className="title">
            <p className="bold">Work Experience</p>
          </div>
          <ul>
            <li>
              <div className="date">
                {formData.startDate} - {formData.endDate}
              </div>
              <div className="info">
                <p className="semi-bold">{formData.companyName}</p>
                <p className="semi-bold">{formData.jobPosition}</p>
                <p className="regular">{formData.location}</p>
                <p>{formData.jobDescription}</p>
              </div>
            </li>
            {/* Other work experience items */}
          </ul>
        </div>
        <div className="resume_item resume_education">
          <div className="title">
            <p className="bold">Education</p>
          </div>
          <ul>
            <li>
              <div className="date">
                {education.formData.startDate} - {education.formData.endDate}
              </div>
              <div className="info">
                <p className="semi-bold">
                  {education.formData.degree} {education.formData.fieldOfStudy}{" "}
                  ({education.formData.schoolName})
                </p>
                <p>{education.formData.description}</p>
              </div>
            </li>
            {/* Other education items */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
