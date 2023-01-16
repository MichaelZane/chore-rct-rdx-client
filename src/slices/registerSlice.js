import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const register = createAsyncThunk('register', async (user) => {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`, user);
  return response.data;
});

const initialState = {
  user: {},
  status: 'idle',
  error: null
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default registerSlice.reducer;
