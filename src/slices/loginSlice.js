import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithAuth from '../utils/axiosWithAuth';

export const getUserLogin = createAsyncThunk(
    "login/getUserLogin",
    async ({id, history}, { dispatch, getState }) => {
        const { chore, user } = getState();
        return await axiosWithAuth()
            .post('/api/auth/login', chore, user)
            .then(res => 
                res.data, 
                history.push("/home"), 
                localStorage.setItem('token', res.data.token),
                localStorage.setItem('userId', res.data.user_id))
            .catch(err => err.res);
    }
)

const initialState = {
    user: [],
    chore: [],
    status: null
  };

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        
        loginSuccess: (state, { payload }) => {
            state.isLogging = false
            state.user = payload
            state.chores = payload
        },
        
    },
    extraReducers: {
        [getLogin.pending]: (state) => {
          state.status = "loading";
        },
        [getLogin.fulfilled]: (state, { payload }) => {
          state.user = payload;
          state.status = "success";
        },
        [getLogin.rejected]: (state) => {
          state.status = "failed";
        },
      },
})

export const { loginStart, loginSuccess, loginError } = loginSlice.actions

export default loginSlice.reducer