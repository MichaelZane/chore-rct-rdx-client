import {CHILD_LOGIN_START, CHILD_LOGIN_SUCCESS, CHILD_LOGIN_ERROR} from '../action';

const initialState = {
  user: {},
  isLogging: false,
  error: ''
};

export const childLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHILD_LOGIN_START:
      return {
        ...state,
        isLogging: true,
        error: null
      };

    case CHILD_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: false,
        error: null,
        user: action.payload,
        chores: action.payload
      };

    case CHILD_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
