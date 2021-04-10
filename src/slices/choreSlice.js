import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosWithAuth from '../utils/axiosWithAuth';

export const getChore = createAsyncThunk(
    "chore/getChore",
    async ({id, history}, { dispatch, getState }) => {
        const { chore } = getState();
        return await axiosWithAuth()
            .get(`/api/chore/singlechore/${id}`, chore)
            .then(res => res.data, history.push(`/chore/${id}`))
            .catch(err => err.res)
    } 
)

const initialState = {
    chore: [],
    status: null,
    
  };

const choreSlice = createSlice({
    name:'chore',
    initialState,
    reducers:{

        addChoreSuccess: (state, { payload }) => {
            localStorage.setItem("choreId", payload.id)
            state.addingChores = "success"
            state.chore = payload
        }
    },
    extraReducers: {
        [getChild.pending]: (state) => {
        state.status = "loading";
        },
        [getChild.fulfilled]: (state, { payload }) => {
        state.child.push(payload);
        state.status = "success";
        },
        [getChild.rejected]: (state) => {
        state.status = "failed";
        },
  },
})

  export const { addChoreStart, addChoreSuccess, addChoreError } = childSlice.actions

  export default choreSlice.reducer