import { createSlice } from '@reduxjs/toolkit';

const selectedProfileSlice = createSlice({
  name: 'selectedProfile',
  initialState: '',
  reducers: {
    setSelectedProfile: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedProfile } = selectedProfileSlice.actions;

export default selectedProfileSlice.reducer;