import {CHILD_LOGIN_START, CHILD_LOGIN_SUCCESS, CHILD_LOGIN_ERROR} from '../action';

const initialState = {
  user: {},
  isLogging: false,
  error: ''
};

export const childLoginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
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
        user: payload
      };

    case CHILD_LOGIN_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};
