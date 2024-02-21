import { createSlice } from "@reduxjs/toolkit";
import { getAllWorkExp } from "../actions/workExperienceAction";


const initialState = {
  list: [], // for work history
};

const workHistorySlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllWorkExp.pending]: (state) => {
      state.loading = true;
    },
    [getAllWorkExp.fulfilled]: (state, { payload }) => {

     
      state.loading = false;
      state.list = payload;
    },
    [getAllWorkExp.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export default workHistorySlice.reducer;
