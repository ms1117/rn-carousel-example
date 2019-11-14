import { createReducer, createActions } from 'reduxsauce';
import _ from 'lodash';

/ ------------- Types and Action Creators ------------- /
const { Types, Creators } = createActions({
  addUserImages: ['images'],
  clearUserImages: []
});

export const SelectedUserTypes = Types;
export default Creators;

/ ------------- Initial State ------------- /

const defaultState = {
  images: []
};

/ ------------- Reducers ------------- /

const addUserImages = (state, { images }) => {
  const updatedImages = _.cloneDeep(state.images);
  updatedImages.push(...images);
  return { ...state, images: updatedImages };
}

const clearUserImages = (state) => ({ ...state, images: [] });

export const selectedUserReducer = createReducer(defaultState, {
  [Types.ADD_USER_IMAGES]: addUserImages,
  [Types.CLEAR_USER_IMAGES]: clearUserImages
});
