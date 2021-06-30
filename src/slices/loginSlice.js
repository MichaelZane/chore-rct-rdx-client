import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithAuth from '../utils/axiosWithAuth';

export const getUserLogin = createAsyncThunk(
    "login/getUserLogin",
    async ({ history }, { dispatch, getState }) => {
        const { chore, user } = getState();
        return await axiosWithAuth()
            .post('/api/auth/login', {chore, user})
            .then(res => 
                localStorage.setItem('token', res.data.token),
                history.push("/home")) 
                
            .catch(err => console.log(err.res));
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
        [getUserLogin.pending]: (state) => {
          state.status = "loading";
        },
        [getUserLogin.fulfilled]: (state, { payload }) => {
          state.user.push(payload);
          state.chore.push(payload)
          state.status = "success";
        },
        [getUserLogin.rejected]: (state) => {
          state.status = "failed";
        },
      },
})

export const { loginStart, loginSuccess, loginError } = loginSlice.actions

export default loginSlice.reducer