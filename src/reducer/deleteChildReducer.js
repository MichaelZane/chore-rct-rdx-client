import {DELETE_CHILD_START, DELETE_CHILD_SUCCESS, DELETE_CHILD_ERROR} from '../action';

const initialState = {
  children: [],
  deletingChildern: false,
  error: ''
};

export const deleteChildReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case DELETE_CHILD_START:
      return {
        ...state,
        deleteingChilderen: true,
        error: null
      };
    case DELETE_CHILD_SUCCESS:
      return {
        ...state,
        deleteingChildren: false,
        children: state.children.filter(child => child.id !== payload)
      };

    case DELETE_CHILD_ERROR: {
      return {
        ...state,
        error: payload
      };
    }
    default:
      return state;
  }
};
