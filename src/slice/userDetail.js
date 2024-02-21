import { createSlice } from "@reduxjs/toolkit";

const userDetailSlice = createSlice({
  name: "user",
  initialState: {
    profileData: {
      id: null,
      last_login: null,
      username: null,
      date_joined: null,
      first_name: null,
      last_name: null,
      mobile_no: "",
      email: "",
      is_first_login: false,
      profile_picture: null,
      address: null,
      city: null,
      state: null,
    },
  },
  reducers: {
    setProfileData: (state, action) => {
      state.profileData = { ...action.payload.data }; //response_data
    },
  },
});

export const { setProfileData } = userDetailSlice.actions;
export default userDetailSlice.reducer;
