import { createSelector } from 'reselect';

const user$ = state => state.user;
export const userSelector = createSelector(user$, user => ({
  user
}));

const selectedUser$ = state => state.selectedUser;
export const selectedUserSelector = createSelector(selectedUser$, selectedUser => ({
  selectedUser
}));
