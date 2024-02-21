// slices/educationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectName: "",
  startDate: "",
  endDate: "",
  description: "",
  projectLink: "",
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    getProjectInfoApi: (state, action) => {
      return action.payload
  
  
      },
    updateFormData: (state, action) => {
      state = { ...state, ...action.payload };
      return state
    },
    resetProject: () => initialState,
  },
});

export const { updateFormData, resetProject ,getProjectInfoApi} = projectSlice.actions;

export default projectSlice.reducer;
