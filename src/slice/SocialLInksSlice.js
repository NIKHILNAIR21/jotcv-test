import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  social: [],
};
const SocialLinksSlice = createSlice({
  name: "SocialLinks",
  initialState,
  reducers: {
    addSocialLinksFromApi: (state, action) => {
      state.social = action.payload;
      return state;
    },
    addSocialLinks: (state, action) => {
      return { ...state, social: [...state.social, action.payload] };
    },
    updateSocialLinks: (state, action) => {
      const updatedSocial = state.social.map((link) =>
        link?.name === action.payload.name
          ? { ...link, ...action.payload }
          : link
      );

      return { ...state, social: updatedSocial };
    },
    deleteSocialLink: (state, action) => {
      const linkIdToDelete = action.payload;
      // Filter out the social link with the specified id
      const updatedSocial = state.social.filter(
        (link) => link.name !== linkIdToDelete
      );
    
      return { ...state, social: updatedSocial };
    },
    resetSocial: () => initialState,
  },
});

export const {
  updateSocialLinks,
  addSocialLinks,
  resetSocial,
  addSocialLinksFromApi,
  deleteSocialLink,
} = SocialLinksSlice.actions;
export default SocialLinksSlice.reducer;
