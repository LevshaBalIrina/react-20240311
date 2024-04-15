import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    incrementProduct: (state, { payload: id }) => {
      const product = state[id];
      state[id] = product ? product + 1 : 1;
    },
    decrementProduct: (state, { payload: id }) => {
      state[id] = (state[id] || 0) - 1;
      if (state[id] <= 0) {
        delete state[id];
      }
    },
  },
});

export const { incrementProduct, decrementProduct } = cartSlice.actions;
