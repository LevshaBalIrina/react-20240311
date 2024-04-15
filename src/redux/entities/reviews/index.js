import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getReviewsByRestaurantId } from './thunks/getReviewsByRestaurantId';

const entityAdapter = createEntityAdapter();

export const rewiewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantId.fulfilled,
      (state, { payload: reviews }) => entityAdapter.upsertMany(state, reviews)
    ),
});
