export const selectRestaurantsModule = (state) => state.restaurants;

export const selectReataurantIds = (state) =>
  selectRestaurantsModule(state).ids;

export const selectRestaurantById = (state, id) =>
  selectRestaurantsModule(state).entities[id];

export const selectRestaurantDishIds = (state, id) =>
  selectRestaurantById(state, id).menu;

export const selectRestaurantReviewIds = (state, id) =>
  selectRestaurantById(state, id).reviews;
