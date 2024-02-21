// profileSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Step 2: Create a new slice
const allProfileComplitionSlice = createSlice({
  name: "profile",
  initialState: {
    isProfileCompleted: false,
    isWorkCompleted: false,
    isEducationCompleted: false,
    isSkillCompleted: false,
    isProjectCompleted: false,
    isInterestCompleted: false,
    isCertificateCompleted: false,
    isLangCompleted: false,
    isSocialCompleted: false,
  },
  reducers: {
    // Step 3: Define reducers for updating the profile completion status
    markProfileAsCompleted: (state) => {
      state.isProfileCompleted = true;
    },
    markWorkAsCompleted: (state) => {
      state.isWorkCompleted = true;
    },
    markEduAsCompleted: (state) => {
      state.isEducationCompleted = true;
    },
    markSkillAsCompleted: (state) => {
      state.isSkillCompleted = true;
    },
    markProjectAsCompleted: (state) => {
      state.isProjectCompleted = true;
    },
    markInterestAsCompleted: (state) => {
      state.isInterestCompleted = true;
    },
    markCertificateAsCompleted: (state) => {
      state.isCertificateCompleted = true;
    },
    markLangAsCompleted: (state) => {
      state.isLangCompleted = true;
    },
    markSocialAsCompleted: (state) => {
      state.isSocialCompleted = true;
    },
    markProfileAsIncomplete: (state) => {
      state.isProfileCompleted = false;
      state.isWorkCompleted = false;
      state.isEducationCompleted = false;
      state.isSkillCompleted = false;
      state.isProjectCompleted = false;
      state.isInterestCompleted = false;
      state.isCertificateCompleted = false;
      state.isLangCompleted = false;
      state.isSocialCompleted = false;

    },
  },
});

// Export the reducer

// Export the actions
export const {
  markProfileAsCompleted,
  markProfileAsIncomplete,
  markWorkAsCompleted,
  markEduAsCompleted,
  markSkillAsCompleted,
  markProjectAsCompleted,
  markInterestAsCompleted,
  markCertificateAsCompleted,
  markSocialAsCompleted,
  markLangAsCompleted,
} = allProfileComplitionSlice.actions;

export default allProfileComplitionSlice.reducer;
