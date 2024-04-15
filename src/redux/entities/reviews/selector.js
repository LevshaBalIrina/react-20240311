import { selectRestaurantById } from '../restaurants/selector';

export const selectReviewsModule = (state) => state.reviews;

export const selectReviewsIds = (state) => selectReviewsModule(state).ids;

export const selectReviewsById = (state, id) =>
  selectReviewsModule(state).entities[id];

export const selectRestaurantReviewIds = (state, id) =>
  selectRestaurantById(state, id).reviews;
