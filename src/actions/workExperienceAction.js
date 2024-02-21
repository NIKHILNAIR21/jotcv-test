import { createAsyncThunk } from "@reduxjs/toolkit"
import {  getAllWorkExpList, } from "../services/ApiServices"


export const getAllWorkExp = createAsyncThunk(
    'work/list',
    async (arg, { rejectWithValue }) => {
    
      try {
        const { data } = await getAllWorkExpList(arg)
    
        return data
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )