import { createSlice } from "@reduxjs/toolkit";
import { getAllProjects } from "../actions/projectAction";


const initialState = {
  list: [], // for project history
};

const projectHistorySlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProjects.pending]: (state) => {
      state.loading = true;
    },
    [getAllProjects.fulfilled]: (state, { payload }) => {

     
      state.loading = false;
      state.list = payload;
    },
    [getAllProjects.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export default projectHistorySlice.reducer;
