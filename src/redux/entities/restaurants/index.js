import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './thunks/getRestaurants';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getRestaurants.fulfilled,
      (state, { payload: restaurants }) => entityAdapter.setAll(state, restaurants)
    ),
  // extraReducers: (builder) =>
  //   builder.addCase(
  //     getRestaurants.fulfilled,
  //     (state, { payload: restaurants }) => {
  //       state.entities = restaurants.reduce((acc, restaurant) => {
  //         acc[restaurant.id] = restaurant;
  //         return acc;
  //       }, {});
  //       state.ids = restaurants.map(({ id }) => id);
  //     }
  //   ),
});
