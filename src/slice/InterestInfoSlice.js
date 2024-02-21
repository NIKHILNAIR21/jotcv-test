import { createSlice } from "@reduxjs/toolkit";

const initialState = {
Interest: [],
  formData:{
    name:"",
  }
 
};

const InterestSlice = createSlice({
  name: "Interests",
  initialState,
  reducers: {
    restoreInterests: (state) => {
      state.formData.name =""
    },
  
    updateInterests: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addInterests: (state,action) => {
      
      
      state.Interest.push(action.payload);
    },
    removeInterests: (state, action) => {
      const index = action.payload;
      state.Interest.splice(index, 1);
    },
    resetInterests: () => initialState

  },
});
export const { updateInterests, addInterests, removeInterests,resetInterests,restoreInterests } = InterestSlice.actions;

export default InterestSlice.reducer;
