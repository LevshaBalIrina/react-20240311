import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurants';
import { dishesSlice } from './entities/dishes';
import { rewiewsSlice } from './entities/reviews';
import { usersSlice } from './entities/users';

export const store = configureStore({
  reducer: combineSlices(
    restaurantsSlice,
    dishesSlice,
    rewiewsSlice,
    usersSlice
  ),
});
