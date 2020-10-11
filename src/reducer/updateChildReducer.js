import {UPDATE_CHILD_START, UPDATE_CHILD_SUCCESS, UPDATE_CHILD_ERROR} from '../action';

const initialState = {
  child: {},
  updatingChild: false,
  error: ''
};

export const updateChildReducer = (state = initialState, {type, payload}) => {
  switch (type) {
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
        child: payload
      };
    case UPDATE_CHILD_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};
