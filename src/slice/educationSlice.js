// slices/educationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentlyStudying: false,
  showDescriptionInput: false,
  formData: {
    schoolName: "",
    schoolLocation: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "", 
    description: "",
  },
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    getEducationInfoApi: (state, action) => {
      return action.payload
  
  
      },
    toggleCurrentlyStudying: (state) => {
      state.currentlyStudying = !state.currentlyStudying;
    },
    toggleDescriptionInput: (state) => {
      state.showDescriptionInput = !state.showDescriptionInput;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetEdu: () => initialState

  },
});

export const {
  toggleCurrentlyStudying,
  toggleDescriptionInput,
  updateFormData,
  resetEdu,
  getEducationInfoApi
} = educationSlice.actions;

export default educationSlice.reducer;
