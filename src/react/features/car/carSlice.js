import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunks

export const getAllCars = createAsyncThunk("cars/getAll", async () => {
  const response = await axios.get("http://localhost:8080/api/cars/getAll");
  return response.data;
});

export const getByIdCar = createAsyncThunk("cars/getById", async (id) => {
  const response = await axios.get(`http://localhost:8080/api/cars/getById/${id}`);
  return response.data;
});


// Slice

const initialState = {
  cars: {
    data: [],
    status: "idle",
    error: null,
  },
  car: {
    data: {},
    status: "idle",
    error: null,
  },
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.cars.status = "loading";
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.cars.status = "succeeded";
        state.cars.data = action.payload;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.cars.status = "failed";
        state.cars.error = action.error.message;
      })
      .addCase(getByIdCar.pending, (state) => {
        state.car.status = "loading";
      })
      .addCase(getByIdCar.fulfilled, (state, action) => {
        state.car.status = "succeeded";
        state.car.data = action.payload;
      })
      .addCase(getByIdCar.rejected, (state, action) => {
        state.car.status = "failed";
        state.car.error = action.error.message;
      }) 
      
      
  },
});



export default carSlice.reducer;

// Selectors

//export const selectAllCars = (state) => state.cars.allCars;
//export const selectSelectedCar = (state) => state.car.selectedCar;
