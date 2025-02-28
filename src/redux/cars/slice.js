import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById, fetchCarsBrand } from "./operations";

const INITIAL_STATE = {
  cars: [],
  carByID: [],
  carBrands: [],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder;
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCarById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.carByID = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCarsBrand.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarsBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.carBrands = action.payload;
      })
      .addCase(fetchCarsBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
