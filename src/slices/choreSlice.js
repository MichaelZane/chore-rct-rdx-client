import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithAuth from "../utils/axiosWithAuth";

export const getChores = createAsyncThunk("chores/getChores", async (id) => {

  const response = await axiosWithAuth().get(`/api/chore/chores/${id}`);
  return response.data;
});

export const fetchChore = createAsyncThunk("chore/fetchChore", async (id) => {
  const response = await axiosWithAuth().get(`/api/singlechore/${id}`);
  return response.data;
});

export const addChores = createAsyncThunk("chores/addChores", async (chore) => {
  try {
    const response = await axiosWithAuth().post("/api/chore", chore);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
});

export const editChore = createAsyncThunk("chore/editChore", async (chore) => {
  try {
    const { data } = await axiosWithAuth().put(`/api/chore/${chore.id}`, chore);
    return data;
  } catch (error) {
    throw error.response.data;
  }
});

export const deleteChore = createAsyncThunk("chore/deleteChore", async (id) => {
  try {
    const response = await axiosWithAuth().delete(`/api/chore/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const initialState = {
  chores: [],
  status: null,
  error: null,
};

const choreSlice = createSlice({
  name: "chore",
  initialState,
  reducers: {
    resetChore: (state) => {
      state.chores = []
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChores.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getChores.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.chores = action.payload;
      })
      .addCase(getChores.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addChores.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addChores.fulfilled, (state, { payload }) => {
        state.chores.push(payload);
        state.status = "success";
      })
      .addCase(addChores.rejected, (state, { error }) => {
        state.status = "error";
        state.error = error.message;
      })
      .addCase(fetchChore.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChore.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.chores = action.payload;
      })
      .addCase(fetchChore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteChore.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteChore.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.chores = state.chores.filter((chore) => chore.id !== action.payload);
      })
      .addCase(deleteChore.rejected, (state, { error }) => {
        state.status = "error";
        state.error = error.message;
      });
  },
});

export const { resetChore } = choreSlice.actions;

// Selectors
export const selectChores = (state) => state.chore.chores;
export const selectLoading = (state) => state.chore.chores.status === "loading";
export const selectError = (state) => state.chore.chores.error;

export default choreSlice.reducer;
