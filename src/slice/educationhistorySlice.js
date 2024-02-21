import { createSlice } from "@reduxjs/toolkit";
import { getAllEducation } from "../actions/educationAction";


const initialState = {
  list: [], // for education history
};

const educationhistorySlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllEducation.pending]: (state) => {
      state.loading = true;
    },
    [getAllEducation.fulfilled]: (state, { payload }) => {

     
      state.loading = false;
      state.list = payload;
    },
    [getAllEducation.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export default educationhistorySlice.reducer;
