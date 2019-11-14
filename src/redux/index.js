import { combineReducers } from 'redux';
import configureStore from './createStore';
import UserActions, { usersReducer as user } from './users';
import SelectedUserActions, { selectedUserReducer as selectedUser } from './selectedUser';

export default () => {
  / ------------- Assemble The Reducers ------------- /
  const rootReducer = combineReducers({
    user,
    selectedUser
  });
  return configureStore(rootReducer);
};

export {
  UserActions,
  SelectedUserActions
};
