import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summary: "",
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    updateSummary: (state, action) => {
      state.summary = action.payload;
    },
    resetSummary: () => initialState

  },
});

export const { updateSummary,reset,resetSummary } = summarySlice.actions;

export default summarySlice.reducer;
