import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsers } from './thunks/getUsers';

const entityAdapter = createEntityAdapter();
export const usersSlice = createSlice({
  name: 'users',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload: users }) =>
      entityAdapter.setAll(state, users)
    ),
});
