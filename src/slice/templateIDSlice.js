import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempId: "",
};

const templateIDSlice = createSlice({
  name: "templateId",
  initialState,
  reducers: {
    saveTempId: (state, action) => {
      state.tempId=action.payload
    },
    

  },
});

export const { saveTempId} = templateIDSlice.actions;

export default templateIDSlice.reducer;
