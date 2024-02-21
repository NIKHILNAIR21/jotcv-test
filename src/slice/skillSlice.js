import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
  formData:{
    name:"",
    type:'1',
  }
 
};

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
 
    restoreSkill: (state) => {
      state.formData.name =""
      state.formData.type="1"
    },
    updateSkill: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addSkill: (state,action) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action) => {
      const index = action.payload;
      state.skills.splice(index, 1);
    },
    resetSkil: () => initialState

  },
});

export const { updateSkill, addSkill, removeSkill,resetSkil,restoreSkill } = skillSlice.actions;

export default skillSlice.reducer;
