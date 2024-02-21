import { createSlice } from '@reduxjs/toolkit';

const pickedSlice = createSlice({
  name: 'picked',
  initialState: null,
  reducers: {
    setPicked: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPicked } = pickedSlice.actions;

export default pickedSlice.reducer;