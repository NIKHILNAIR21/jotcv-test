import * as api from "../request";

export const googleLogin = async (body) => {
  return await api.PostReq(`/api/auth/google/`, body);
};

export const getProfilePic = async () => {
  return await api.PostReq(`/api/auth/update-user-pic`);
};

export const getProfileData = async () => {
  return await api.GetReq(`/api/auth/profile`);
};

// export const getAllTemplates = async () => {
//   return await api.GetReq(`/api/resumes/templates-list`);
// };

export const getProfileUpdate = async (body) => {
  return await api.PostReq(`/api/auth/profile`, body);
};

export const createCVProfile = async (body) => {
  return await api.PostReq(`/api/candidate/profile`, body);
};

export const updateCVProfile = async (id, body) => {
  return await api.PatchReq(`/api/candidate/profile/${id}`, body);
};

export const getCVProfile = async (id) => {
  return await api.GetReq(`/api/candidate/profile/${id}`);
};
export const getFullProfile = async (id) => {
  return await api.GetReq(`/api/candidate/full-profile/${id}`);
};
export const getAllResume = async () => {
  return await api.GetReq(`/api/candidate/all-profiles`);
};
export const deleteResumeByid = async (id) => {
  return await api.delReq(`/api/candidate/profile/${id}`);
};

// Education Api

export const createEducationProfile = async (body) => {
  return await api.PostReq(`/api/candidate/education`, body);
};

export const getAllEducationList = async (id) => {
  return await api.GetReq(`/api/candidate/education-list/${id}`);
};
export const getSingleEduById = async (id) => {
  return await api.GetReq(`/api/candidate/education/${id}`);
};
export const upDateEduById = async (id, body) => {
  return await api.PatchReq(`/api/candidate/education/${id}`, body);
};
export const deleteEduByid = async (id) => {
  return await api.delReq(`/api/candidate/education/${id}`);
};

// Experience
export const createWorkExp = async (body) => {
  return await api.PostReq(`/api/candidate/experience`, body);
};
export const getAllWorkExpList = async (id) => {
  return await api.GetReq(`/api/candidate/experience-list/${id}`);
};

export const getSingleWorkExpById = async (id) => {
  return await api.GetReq(`/api/candidate/experience/${id}`);
};

export const upDateWorkExpById = async (id, body) => {
  return await api.PatchReq(`/api/candidate/experience/${id}`, body);
};
export const deleteWorkExpByid = async (id) => {
  return await api.delReq(`/api/candidate/experience/${id}`);
};
// projects api
export const createProject = async (body) => {
  return await api.PostReq(`/api/candidate/project`, body);
};
export const getAllProjectList = async (id) => {
  return await api.GetReq(`/api/candidate/project-list/${id}`);
};

export const getSingleProjectById = async (id) => {
  return await api.GetReq(`/api/candidate/project/${id}`);
};

export const updateProjectById = async (id, body) => {
  return await api.PatchReq(`/api/candidate/project/${id}`, body);
};
export const deleteProjectByid = async (id) => {
  return await api.delReq(`/api/candidate/project/${id}`);
};
// interest apis
export const createInterest = async (body) => {
  return await api.PostReq(`/api/candidate/interest`, body);
};
export const getAllIntrests = async (id) => {
  return await api.GetReq(`/api/candidate/interest/${id}`);
};
export const deleteInterests = async (id) => {
  return await api.delReq(`/api/candidate/interest/${id}`);
};
//skills

export const createSkills = async (body) => {
  return await api.PostReq(`/api/candidate/skill`, body);
};
export const getAllSkills = async (id) => {
  return await api.GetReq(`/api/candidate/skills/${id}`);
};
export const deleteSKills = async (id) => {
  return await api.delReq(`/api/candidate/skills/${id}`);
};
//certiifcate
export const createCertificate = async (body) => {
  return await api.PostReq(`/api/candidate/certificate`, body);
};
export const getAllCertificates = async (id) => {
  return await api.GetReq(`/api/candidate/certificates/${id}`);
};
export const deleteCertificate = async (id) => {
  return await api.delReq(`/api/candidate/certificates/${id}`);
};
//language
export const createLanguage = async (body) => {
  return await api.PostReq(`/api/candidate/language`, body);
};
export const getAllLanguage = async (id) => {
  return await api.GetReq(`/api/candidate/languages/${id}`);
};
export const deleteLanguage = async (id) => {
  return await api.delReq(`/api/candidate/languages/${id}`);
};
// social links
export const createSocialLinks = async (body) => {
  return await api.PostReq(`/api/candidate/social`, body);
};
export const getAllSocialLinks = async (id) => {
  return await api.GetReq(`/api/candidate/social/${id}`);
};
export const deleteSocialLinks = async (id) => {
  return await api.delReq(`/api/candidate/social/${id}`);
};

export const getTemplatePreview = async (tempId, id) => {
  return await api.GetReq(
    `/api/resumes/template/template-${tempId}/profile-${id}`
  );
};

export const getTemplateWithoutLogin = async () => {
  return await api.GetReq(`/api/resumes/home-page-top-temp`);
};
export const getTemplateImgView = async (tempId) => {
  return await api.GetReq(`/api/resumes/template-view/template-${tempId}`);
};

export const getSubscription = async () => {
  return await api.GetReq(`/api/main/subscriptions`);
};

export const createPayment = async (id) => {
  return await api.GetReq(`/api/wallet/create-payment?plan_id=${id}`);
};

export const getQuestions = async (id) => {
  return await api.GetReq(`/api/candidate/video-questons?profile_id=${id}`);
};
// patch
export const uploadVideo = async (id, body) => {
  return await api.PatchReq(`/api/candidate/video-answer/${id}`, body);
};
export const deleteAnswerByid = async (id) => {
  return await api.delReq(`/api/candidate/video-answer/${id}`);
};

export const createPhonePay = async (id) => {
  return await api.GetReq(`/api/wallet/create-phonepe-payment?plan_id=${id}`);
};

export const logout = async () => {
  return await api.GetReq(`/api/logout`);
};
export const savePortfolio = async (body) => {
  return await api.PostReq(`/api/candidate/web-portfolio`, body);
};
export const newLetter = async (body) => {
  return await api.PostReq(`/api/auth/subscribe_to_newsletter/`, body);
};
export const Contact = async (body) => {
  return await api.PostReq(`/contact/`, body);
};
// export const SaveEmailTemplate = async (body) => {
//   return await api.PostReq(`api/candidate/email`, body);
// };
// JOB and Email apis
export const UserEmailTemplate = async (body) => {
  return await api.PostReq(`api/company/send-test-email/`, body);
};
export const SaveEmailTemp = async (body) => {
  return await api.PostReq(`api/candidate/email`, body);
};
export const EditName = async (id, body) => {
  return await api.PatchReq(`api/candidate/profile-name/${id}`, body);
};
export const IndustryCategory = async () => {
  return await api.GetReq("api/main/all-categories");
};
export const GetAllEmail = async () => {
  return await api.GetReq(`api/candidate/all-email`);
};
export const deleteEmailTemp = async (id) => {
  return await api.delReq(`api/candidate/email-delete/${id}/`);
};
export const GetCompanyList = async (params) => {
  const queryString = typeof params === 'string' ? params : new URLSearchParams(params).toString();
  return await api.GetReq(`api/company/jobs/?${queryString}`);
};
export const GetCompanyDetails = async (id) => {
  return await api.GetReq(`api/company/jobs/?q=${id}`);
};
export const SendEmail = async (body) => {
  return await api.PostReq(`api/company/email-send`, body);
};
export const GetAppliedJobs = async () => {
  return await api.GetReq(`api/company/user/job-applications/`);
};
export const GetFilterJobs = async (location,company,role,skills) => {
  return await api.GetReq(`api/company/jobs?location=${location}&company_name=${company}&job_title=${role}&skill=${skills}`);
};