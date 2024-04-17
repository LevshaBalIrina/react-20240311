export const selectReviewsModule = (state) => state.reviews;

export const selectReviewsIds = (state) => selectReviewsModule(state).ids;

export const selectReviewsById = (state, id) =>
  selectReviewsModule(state).entities[id];
