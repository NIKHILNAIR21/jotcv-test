import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Language: [],
  formData: {
    name: "",
  },
};

const LanguageSlice = createSlice({
  name: "Language",
  initialState,
  reducers: {
    restoreLanguage: (state) => {
      state.formData.name = "";
    },

    updateLanguage: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addLanguage: (state, action) => {
  

      state.Language.push(action.payload);
    },
    removeLanguage: (state, action) => {
      const index = action.payload;
      state.Language.splice(index, 1);
    },
    resetLanguage: () => initialState,
  },
});
export const {
  updateLanguage,
  addLanguage,
  removeLanguage,
  resetLanguage,
  restoreLanguage,
} = LanguageSlice.actions;

export default LanguageSlice.reducer;
