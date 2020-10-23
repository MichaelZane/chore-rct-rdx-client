import {
  UPDATE_CHILD_START, UPDATE_CHILD_SUCCESS, UPDATE_CHILD_ERROR
} from '../action';

const initialState = {
  newChild: {},
  updatingChild: false,
  error: ''
};

export const updateChildReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHILD_START:
      return {
        ...state,
        updatingChild: true,
        error: null
      };
    case UPDATE_CHILD_SUCCESS:
      return {
        ...state,
        updatingChild: false,
        newChild: action.payload
      };
    case UPDATE_CHILD_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
