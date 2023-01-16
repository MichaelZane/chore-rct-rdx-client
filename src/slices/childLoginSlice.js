import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithAuth from '../utils/axiosWithAuth';

export const childLogin = createAsyncThunk(
  "childLogin/childLogin",
  async (child, { dispatch, getState }) => {
    return await axiosWithAuth()
      .post("/api/auth/login/child", child)
      .then((res) => {
        localStorage.setItem("token", res.data.user.token);
        localStorage.setItem("userId", res.data.user.id);
        return res.data.user;
      })
      .catch((err) => {
        throw err.res;
      });
  }
);

const initialState = {
  user: {},
  status: null,
  error: null,
};

const childLoginSlice = createSlice({
  name: "childLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(childLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(childLogin.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.status = "success";
      })
      .addCase(childLogin.rejected, (state, { error }) => {
        state.status = "error";
        state.error = error.message;
      });
  },
});

export default childLoginSlice.red
