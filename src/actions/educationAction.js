import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAllEducationList, } from "../services/ApiServices"


export const getAllEducation = createAsyncThunk(
    'education/list',
    async (arg, { rejectWithValue }) => {
    
      try {
        const { data } = await getAllEducationList(arg)
    
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