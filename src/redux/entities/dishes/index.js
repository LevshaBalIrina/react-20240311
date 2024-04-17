import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDishesByRestaurantId } from './thunks/getDishesByRestaurantId';


const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getDishesByRestaurantId.fulfilled,
      (state, { payload: dishes }) => entityAdapter.upsertMany(state, dishes)
    ),
});
