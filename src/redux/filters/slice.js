import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  brand: "",
  rentalPrice: "",
  mileageFrom: "",
  mileageTo: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      const { brand, rentalPrice, mileageFrom, mileageTo } = action.payload;
      if (brand !== undefined) state.brand = brand;
      if (rentalPrice !== undefined) state.rentalPrice = rentalPrice;
      if (mileageFrom !== undefined) state.mileageFrom = mileageFrom;
      if (mileageTo !== undefined) state.mileageTo = mileageTo;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
