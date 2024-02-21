import { createSlice } from "@reduxjs/toolkit";

const AskExpSlice = createSlice({
  name: "AskExp",
  initialState: {
    selectedExp: "",
  },
  reducers: {
    resetuserExp: (state) => {
      state.selectedExp = "";
    },
    setExp: (state, action) => {
      state.selectedExp = action.payload;
    },
  },
});

export const { setExp,resetuserExp } = AskExpSlice.actions;
export const selectExp = (state) => state.AskExp.selectedExp;
export default AskExpSlice.reducer;