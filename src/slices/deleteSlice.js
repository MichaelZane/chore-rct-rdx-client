import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    child: [],
    chore: [],
    status: null,
    error: ''
  };

const deleteSlice = createSlice({
    name: "delete",
    initialState,
    reducers:{

        deleteSuccess: (state, { payload }) => {
            state.deletingChildern = "success"
            state.child = state.filter(chld => chld.id !== payload)
        },
        
    },
    extraReducers: {
        [deleteChild.pending]: (state) => {
          state.status = "loading";
        },
        [deleteChild.fulfilled]: (state, { payload }) => {
          state.child.delete(payload);
          state.status = "success";
        },
        [deleteChild.rejected]: (state) => {
          state.status = "failed";
        },
      },
})
export const { deleteStart, deleteSuccess, deleteError } = deleteSlice.actions

export default deleteSlice.reducer