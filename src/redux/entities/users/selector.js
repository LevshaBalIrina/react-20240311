export const selectUsersModule = (state) => state.users;

export const selectUsersIds = (state) =>
  selectUsersModule(state).ids;
export const selectUsersById = (state, id) =>
  selectUsersModule(state).entities[id];
