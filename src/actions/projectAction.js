import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProjectList } from "../services/ApiServices";


export const getAllProjects = createAsyncThunk(
    'project/list',
    async (arg, { rejectWithValue }) => {
    
      try {
        const { data } = await getAllProjectList(arg)
    
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