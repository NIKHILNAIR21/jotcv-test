import { createSlice } from "@reduxjs/toolkit";
import { getFull } from "../actions/allProfieAction";


const initialState = {
  resumeData: "", // for template
};

const  fullProfileSlice= createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetResumeData: (state) => {
      state.resumeData = "";
    },
  },
  extraReducers: {
    [getFull.pending]: (state) => {
      state.loading = true;
    },
    [getFull.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.resumeData = payload;
    },
    [getFull.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});
export const { resetResumeData } = fullProfileSlice.actions;
export default fullProfileSlice.reducer;
