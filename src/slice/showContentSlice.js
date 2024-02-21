import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeForm: false,
  PersonalInfoFormShow: false,
  EducationInfoFormShow: false,
  SkillInfoFormShow: false,
  ExperienceInfoFormShow: false,
  ProjectInfoFormShow: false,
  LanguageInfoFormShow: false,
  CertificateInfoFormShow: false,
  interestInfoFormShow: false,
};

const showFormSlice = createSlice({
  name: "showForm",
  initialState,
  reducers: {
    setActiveForm: (state, action) => {
      const formName = action.payload;

      Object.keys(state).forEach((key) => {
        if (key !== formName) {
          state[key] = false;
        } else {
          state[key] = true;
          state.activeForm = true;
        }
      });
    },
    resetForm: () => initialState,
  },
});
export const { setActiveForm, resetForm } = showFormSlice.actions;
export default showFormSlice.reducer;
