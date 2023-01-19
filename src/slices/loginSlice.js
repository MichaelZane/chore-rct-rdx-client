import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithAuth from '../utils/axiosWithAuth';

export const login = createAsyncThunk(
  "login/login",
  async (user) => {
    try {
      const res = await axiosWithAuth().post("/api/auth/login", user);
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user_id);

      return res.data;
    } catch (err) {
      throw err.res.data;
    }
  }
);

const initialState = {
  userId: "",
  status: null,
  error: null,
  token: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.userId = payload.user_id;
        state.token = payload.token;
        state.status = "success";
      })
      .addCase(login.rejected, (state, { error }) => {
        state.status = "error";
        state.error = error.message;
      });
  },
});
//selectors
export const selectLogin = (state) => state.login;
export const selectUserId = (state) => state.login.userId;
export const selectToken = (state) => state.login.token;
export const selectLoginLoading = (state) => state.login.status === 'loading';
export const selectLoginError = (state) => state.login.error;

export const { resetLogin } = loginSlice.actions;

export default loginSlice.reducer;
