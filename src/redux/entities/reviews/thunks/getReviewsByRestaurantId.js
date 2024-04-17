import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviewIds } from '../../restaurants/selector';
import { selectReviewsIds } from '../selector';

export const getReviewsByRestaurantId = createAsyncThunk(
  'reviews/getReviewsByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const reataurantReviewIds = selectRestaurantReviewIds(
        state,
        restaurantId
      );
      const reviewIds = selectReviewsIds(state);

      return reataurantReviewIds.some((id) => !reviewIds.includes(id));
    },
  }
);
