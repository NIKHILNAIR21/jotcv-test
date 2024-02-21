import { createAsyncThunk } from "@reduxjs/toolkit"
import { getFullProfile } from "../services/ApiServices"



export const getFull = createAsyncThunk(
    'profile/fullProfile',
    async (arg, { rejectWithValue }) => {
      try {
        const { data } = await getFullProfile(arg)
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