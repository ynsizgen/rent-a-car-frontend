import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
// Async Thunks

export const addCar = createAsyncThunk("cars/addCar", async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/api/cars/addCar",data );
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
});
// Slice

const initialState = {
  post: {
    data: {},
    status: "idle",
    error: null,
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCar.pending, (state) => {
      state.post.status = "loading";
    });
    builder.addCase(addCar.fulfilled, (state, action) => {
      state.post.status = "succeeded";
      state.post.data = action.payload;
    });
    builder.addCase(addCar.rejected, (state, action) => {
      state.post.status = "failed";
      state.post.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
