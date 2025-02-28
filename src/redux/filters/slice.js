import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  brand: "",
  price: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      const { brand, price } = action.payload;
      if (brand !== undefined) state.brand = brand;
      if (price !== undefined) state.price = price;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
