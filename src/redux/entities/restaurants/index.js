import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constans/normalized-mock';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
      acc[restaurant.id] = restaurant;
      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
});
