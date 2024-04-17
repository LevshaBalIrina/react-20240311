import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReataurantIds } from '../selector';

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3001/api/restaurants');
    const result = await response.json();

    if (result.length === 0) {
      return rejectWithValue('no data');
    }

    return result;
  },
  {
    condition: ({ forceReload = false } = {}, { getState }) => {
      forceReload || !selectReataurantIds(getState())?.length;
    },
  }
);
