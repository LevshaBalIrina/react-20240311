import { selectRestaurantById } from "../restaurants/selector";

export const selectDishesModule = (state) => state.dishes;

export const selectDishesIds = (state) => selectDishesModule(state).ids;
export const selectDishesById = (state, id) =>
  selectDishesModule(state).entities[id];

  export const selectRestaurantDishIds = (state, id) =>
  selectRestaurantById(state, id).menu;