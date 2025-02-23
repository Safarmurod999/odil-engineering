import { createSelector } from "@reduxjs/toolkit";
import { selectUsersData, selectUsersFilter } from "store/selectors/users";

export const authData = createSelector(selectUsersData, (users) => ({
  users: users.usersList,
  userData: users.userData,
}));
export const usersFilter = createSelector(
  selectUsersFilter,
  (users) => users.filter
);
