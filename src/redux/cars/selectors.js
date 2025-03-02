export const selectCars = (state) => state.cars.cars;
export const selectCarByID = (state) => state.cars.carByID;
export const selectCarsBrand = (state) => state.cars.carBrands;
export const selectFavouriteCars = (state) => state.cars.favouriteCars;

export const selectTotalPages = (state) => state.cars.totalPages;
export const selectPage = (state) => state.cars.page;

export const Loading = (state) => state.cars.loading;
export const Error = (state) => state.cars.error;
