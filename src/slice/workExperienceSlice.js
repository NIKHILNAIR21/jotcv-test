import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isEdit:false,
  currentlyWorking: false,
  showDescriptionInput: false,
  formData: {
    companyName: "",
    location: "",
    jobPosition: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
  },
};

const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    getWorkExpInfoApi: (state, action) => {
      return action.payload
  
  
      },
    toggleCurrentlyWorking: (state) => {
      state.currentlyWorking = !state.currentlyWorking;
      if (state.currentlyWorking) {
        state.formData.endDate = null;
      } else {
        state.formData.endDate = "";
      }
    },
    toggleDescriptionInput: (state) => {
      state.showDescriptionInput = !state.showDescriptionInput;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetWork: () => initialState

  },
});

export const {
  toggleCurrentlyWorking,
  toggleDescriptionInput,
  updateFormData,
  resetWork,
  getWorkExpInfoApi
} = workExperienceSlice.actions;

export default workExperienceSlice.reducer;
