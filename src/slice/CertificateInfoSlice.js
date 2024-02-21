import { createSlice } from "@reduxjs/toolkit";

const initialState = {
Certificate: [],
  formData:{
    name:"",
  }
 
};

const CertificateSlice = createSlice({
  name: "Certificates",
  initialState,
  reducers: {
 
    restoreCertificate: (state) => {
      state.formData.name =""
    },
    updateCertificate: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addCertificate: (state,action) => {
      state.Certificate.push(action.payload);
    },
    removeCertificate: (state, action) => {
      const index = action.payload;
      state.Certificate.splice(index, 1);
    },
    resetCertificate: () => initialState

  },
});
export const { updateCertificate, addCertificate, removeCertificate,resetCertificate,restoreCertificate } = CertificateSlice.actions;

export default CertificateSlice.reducer;
