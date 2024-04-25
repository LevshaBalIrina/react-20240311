import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantDishIds } from '../../restaurants/selector';
import { selectDishesIds } from '../selector';

export const getDishesByRestaurantId = createAsyncThunk(
  'dish/getDishesByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);
      const dishIds = selectDishesIds(state);

      return restaurantDishIds.some((dishId) => !dishIds.includes(dishId));
    },
  }
);
