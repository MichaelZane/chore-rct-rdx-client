import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithAuth from '../utils/axiosWithAuth';

export const getChild = createAsyncThunk(
  "child/getChild",
  async (obj, { dispatch, getState }) => {
    const { child } = getState();
    return await axiosWithAuth()
      .post("/api/auth/register/child", child)
      .then((res) => {
        localStorage.getItem("userId");
        localStorage.setItem("childId", res.data.child.id);
        // history.push("/home");
      })
      .catch(err => err.res)      
  }
);

const initialState = {
  child: [],
  status: null,
};
const childSlice = createSlice({
  name: "child",
  initialState,
  reducers: {
    childSuccess: (state, { payload }) => {
      localStorage.getItem("userId", payload.user_id);
      localStorage.setItem("childId", payload.child_id);
      state.push.child = payload;
    },
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
});

export const { ChildStart, ChildSuccess, ChildError } = childSlice.actions;

export default childSlice.reducer;