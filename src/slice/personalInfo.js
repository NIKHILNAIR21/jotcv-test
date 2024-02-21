import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FullName: "",
  profession: "",
  city: "",
  summary: "",
  phoneNumber: "",
  email: "",
  photo: null,
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    editPersonalInfo: (state, action) => {
      state = action.payload;
      return state;
    },

    getPersonalInfoApi: (state, action) => {
      return action.payload;
    },
    updatePersonalInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
    updatePhoto: (state, action) => {
      state.photo = action.payload;
    },

    reset: () => initialState,
  },
});

export const { updatePersonalInfo, updatePhoto, getPersonalInfoApi, reset ,editPersonalInfo } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
