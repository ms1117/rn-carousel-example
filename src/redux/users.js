import { createReducer, createActions } from 'reduxsauce';
import _ from 'lodash';

/ ------------- Types and Action Creators ------------- /
const { Types, Creators } = createActions({
  addUsers: ['users'],
  clearUsers: []
});

export const UsersTypes = Types;
export default Creators;

/ ------------- Initial State ------------- /

const defaultState = {
  users: [],
};

/ ------------- Reducers ------------- /
const addUsers = (state, { users }) => {
  const updatedUsers = _.cloneDeep(state.users);
  updatedUsers.push(...users);
  return { ...state, users: updatedUsers };
}

const clear = () => ({ ...defaultState });

export const usersReducer = createReducer(defaultState, {
  [Types.ADD_USERS]: addUsers,
  [Types.CLEAR_USERS]: clear
});