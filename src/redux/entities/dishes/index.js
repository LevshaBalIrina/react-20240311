import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constans/normalized-mock';

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: {
    entities: normalizedDishes.reduce((acc, dish) => {
      acc[dish.id] = dish;
      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  },
});
