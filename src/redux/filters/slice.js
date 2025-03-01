import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  brand: "",
  rentalPrice: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      const { brand, rentalPrice } = action.payload;
      if (brand !== undefined) state.brand = brand;
      if (rentalPrice !== undefined) state.rentalPrice = rentalPrice;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
