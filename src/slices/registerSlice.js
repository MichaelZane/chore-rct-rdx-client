import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const register = createAsyncThunk('register', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`, user);
    return response.data;
  } catch(error) {
    return rejectWithValue(error.response.data.message);
  }
});

const initialState = {
  user: {},
  loading: false,
  error: null
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError } = registerSlice.actions;

export const selectLoading = state => state.register.loading;
export const selectError = state => state.register.error;

export default registerSlice.reducer;
