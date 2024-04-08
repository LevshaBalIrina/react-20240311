import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../constans/normalized-mock';

export const rewiewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    entities: normalizedReviews.reduce((acc, review) => {
      acc[review.id] = review;
      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
});
