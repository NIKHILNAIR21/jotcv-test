import React from "react";

import { useSelector } from "react-redux";
const Resume = () => {
  const personalData = useSelector((state) => state.personalInfo);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.skills);
  const { summary } = useSelector((state) => state.summary);
  const { formData } = useSelector((state) => state.workExperience);
  return (
    <>
        <div className="resume" style={{ width: "47rem" }}>
      <div className="resume_left" style={{ width: "7.4rem" }}>
        <div className="resume_profile">
          {/* {personalData.photo ? (
            <img
              src={URL.createObjectURL(personalData.photo)}
              alt="Preview"
              className=" mb-2 w-60 h-60 "
            />
          ) : (
            <img src={NoImg} alt="Preview" className=" mb-2 w-60 h-60 " />
          )} */}
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold" style={{ fontSize: "13px" }}>
                {personalData.firstName} {personalData.lastName}
              </p>
              <p
                className="regular"
                id="Profession"
                style={{ fontSize: "10px", fontWeight: "bolder" }}
              >
                {personalData.profession}
              </p>
            </div>
            <ul>
              <li>
                <div
                  className="data"
                  style={{ fontSize: "9px", fontWeight: "bold" }}
                >
                  {personalData.city} {personalData.pinCode} <br />
                  {personalData.country}
                </div>
              </li>
              <li></li>
              <li>
                <div className="data" id="email" style={{ fontSize: "10px" }}>
                  {personalData.email}
                </div>
              </li>
              <li>
                <div className="data" style={{ fontSize: "10px" }}>
                  {personalData.phoneNumber}
                </div>
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
          <p>{summary}</p>
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
    </>

  );
};

export default Resume;

