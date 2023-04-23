import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../features/car/carSlice";
import postSlice from "../features/car/postSlice";


export const store =  configureStore({
    reducer: {
       cars : carSlice,
       car : postSlice
    }
})