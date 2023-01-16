import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithAuth from "../utils/axiosWithAuth";

export const fetchChildren = createAsyncThunk(
  'children/fetchChildren',
  async (userId, { dispatch }) => {
    try {
      const res = await axiosWithAuth().get(`/api/auth/parent/${userId}`);
      
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  }
);
export const fetchChildDetails = createAsyncThunk(
  'children/fetchChildDetails',
  async (childId, { dispatch }) => {
    try {
      const res = await axiosWithAuth().get(`/api/auth/child/justchild/${childId}`);
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  }
);
export const addChild = createAsyncThunk(
  'children/addChild',
  async (child, { dispatch }) => {
    try {
      const res = await axiosWithAuth().post('/api/auth/register/child', child);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
);
export const getChild = createAsyncThunk(
  'children/getChild',
  async (childId, { dispatch, thunkAPI }) => {
    try {
      const res = await axiosWithAuth().get(`/api/auth/register/child/${childId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getChildDetails = createAsyncThunk(
  'children/getChildDetails',
  async (childId, { dispatch, thunkAPI }) => {
    try {
      const res = await axiosWithAuth().get(`/api/auth/child/justchild/${childId}`);
      localStorage.setItem("childId", res.data.child.id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const updateChild = createAsyncThunk(
  "child/updateChild",
  async (id, thunkAPI) => {
    try {
      const response = await axiosWithAuth().put(`/api/auth/child/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteChild = createAsyncThunk(
  "children/deleteChild",
  async (childId, { dispatch }) => {
    try {
      await axiosWithAuth().delete(`/api/auth/child/${childId}`);
      return childId;
    } catch (err) {
      throw err.response.data;
    }
  }
);

const initialState = {
  children: [],
  status: null,
  childDetails: null,
  isLoading: false,
  error: null,
};
const childSlice = createSlice({
  name: "children",
  initialState,
  reducers: {
    resetChildren: (state) => {
      state.children = []
      }
      },
    extraReducers: (builder) => {
    builder
      .addCase(fetchChildren.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChildren.fulfilled, (state, { payload }) => {
        state.children = payload;
        state.status = "succeeded";
      })
      .addCase(fetchChildren.rejected, (state, { error }) => {
        state.status = "failed";
        state.error = error.message;
      })
      .addCase(fetchChildDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChildDetails.fulfilled, (state, { payload }) => {
        state.childDetails = payload;
        state.status = "succeeded";
      })
      .addCase(fetchChildDetails.rejected, (state, { error }) => {
        state.status = "failed";
        state.error = error.message;
      })
      .addCase(addChild.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addChild.fulfilled, (state, { payload }) => {
        state.children.push(payload);
      })
      .addCase(updateChild.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateChild.fulfilled, (state, { payload }) => {
        const index = state.child.findIndex((c) => c.id === payload.id);
        state.children[index] = payload;
        state.status = 'succeeded';
      })
      .addCase(updateChild.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(deleteChild.pending, (state) => {
        state.status = 'loading';
        })
        .addCase(deleteChild.fulfilled, (state, { payload }) => {
        state.children = state.children.filter(child => child.id !== payload);
        state.status = 'succeeded';
        })
        .addCase(deleteChild.rejected, (state, { error }) => {
        state.error = error;
        state.status = 'failed';
      }); 
    },
  });
        
  export const { resetChildren } = childSlice.actions;

  // Selectors
  export const selectChildren = (state) => state.child.children;
  export const selectChildDetails = (state) => state.child.children.childDetails;
  export const selectLoading = (state) => state.child.children.status === 'loading';
  export const selectError = (state) => state.child.children.error;

export default childSlice.reducer;

