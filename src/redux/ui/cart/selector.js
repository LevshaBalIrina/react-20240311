export const selectCartModule = (state) => state.cart;

export const selectCartDishIds = (state) => selectCartModule(state);

export const selectDishAmount = (state, dishId) => selectCartDishIds(state)[dishId] || 0;
