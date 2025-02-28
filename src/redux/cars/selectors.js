export const selectCars = (state) => state.cars.cars;
export const selectCarByID = (state) => state.cars.carByID;
export const selectCarsBrand = (state) => state.cars.carBrands;

export const Loading = (state) => state.cars.loading;
export const Error = (state) => state.cars.error;
