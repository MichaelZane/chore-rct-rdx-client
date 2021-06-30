import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getParent = createAsyncThunk(
    "parent/getParent",
    async ({}, { dispatch, getState }) => {
        const { user } = getState();
        
        return await axios 
            .post(process.env.REACT_APP_BACKEND_URL`/api/auth/register`, user)
            .then(res => res.data)
            .catch(err => err.res)
    }   
)

const initialState = {
    user: [],
    status: null
}

export const parentSlice = createSlice({
    name: "parent",
    initialState,
    reducers: {
        registerParent: (state, { payload }) => {
            state.user = payload
            state.status = "success"
        }
    },
    extraReducers:{
        [getParent.pending]: (state) => {
            state.status = "loading";
          },
          [getParent.fulfilled]: (state, { payload }) => {
            state.user = payload;
            state.status = "success";
          },
          [getParent.rejected]: (state) => {
            state.status = "failed";
          },
    }
})

export const { registerParent } = parentSlice.actions

export default parentSlice.reducer