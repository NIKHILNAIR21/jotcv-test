// sectionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Education: false,
  Professional: false,
  Language: false,
  Certificate: false,
  Interest: false,
  Skills: false,
  Projects: false,
};

const sectionSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    setSectionActive: (state, action) => {
      const section = action.payload;
      state[section] = true;
    },
    removeSection: (state, action) => {
      const section = action.payload;
      state[section] = false;
    },
    allSectionActive: (state, action) => {
      state = action.payload;
      return state
    },
    resetSection: () => initialState,
  },
});

export const {
  setSectionActive,
  removeSection,
  resetSection,
  allSectionActive,
} = sectionSlice.actions;
export default sectionSlice.reducer;
