import { createSlice } from '@reduxjs/toolkit';

const portfolioProfile = createSlice({
  name: 'portfolioProfile',
  initialState: '',
  reducers: {
    setPortfolioProfile: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPortfolioProfile } = portfolioProfile.actions;

export default portfolioProfile.reducer;