import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithAuth from '../utils/axiosWithAuth';

export const updateResult = createAsyncThunk(
    "update/updateResult",
    async ({id, history}, { dispatch, getState }) => {
        const { chore, user } = getState();
        return await axiosWithAuth()
            .post(`/api/auth/child/${id}`, user, chore)
            .then(res => 
                res.data, 
                history.push(`/childdetails/${id}`))
            .catch(err => err.res)
    }
)

const initialState = {
    child: [],
    user: [],
    status: null
  };

const updateSlice = createSlice({
    name: "update",
    initialState,
    reducers: {
        
        updateSuccess: (state, { payload }) => {
            state.status = "success"
            state.child = payload
        }
        
    },
    extraReducers: {
        [update.pending]: (state) => {
          state.status = "loading";
        },
        [update.fulfilled]: (state, { payload }) => {
          state.child.push(payload);
          state.status = "success";
        },
        [update.rejected]: (state) => {
          state.status = "failed";
        },
      },
})

export const { updateStart, updateSuccess, updateError } = updateSlice.actions

export default updateSlice.reducer