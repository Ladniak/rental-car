import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById, fetchCarsBrand } from "./operations";

const savedFavourites = JSON.parse(localStorage.getItem("favouriteCars")) || [];

const INITIAL_STATE = {
  cars: [],
  carByID: [],
  favouriteCars: savedFavourites,
  carBrands: [],
  page: 1,
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    toggleFavourite: (state, action) => {
      const car = action.payload;
      const exists = state.favouriteCars.find((fav) => fav.id === car.id);

      if (exists) {
        state.favouriteCars = state.favouriteCars.filter(
          (fav) => fav.id !== car.id
        );
      } else {
        state.favouriteCars.push(car);
      }
      localStorage.setItem(
        "favouriteCars",
        JSON.stringify(state.favouriteCars)
      );
    },
    nextPage: (state) => {
      if (state.page < state.totalPages) {
        state.page += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        if (action.payload.page === 1) {
          state.cars = action.payload.cars;
        } else {
          state.cars = [...state.cars, ...action.payload.cars];
        }

        state.totalPages = action.payload.totalPages;
        state.page = action.payload.page;
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

export const { toggleFavourite, nextPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
