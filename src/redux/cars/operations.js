import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async ({ filters, page }, thunkApi) => {
    try {
      const params = { page };
      if (filters.brand) params.brand = filters.brand;
      if (filters.rentalPrice) params.rentalPrice = filters.rentalPrice;
      if (filters.mileageFrom) params.minMileage = filters.mileageFrom;
      if (filters.mileageTo) params.maxMileage = filters.mileageTo;

      const { data } = await axios.get("/cars", { params });

      return { cars: data.cars, totalPages: data.totalPages, page };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "car/fetchById",
  async (id, thunkApi) => {
    try {
      const data = await axios.get(`/cars/${id}`);
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarsBrand = createAsyncThunk(
  "brands/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await axios.get("/brands");
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
