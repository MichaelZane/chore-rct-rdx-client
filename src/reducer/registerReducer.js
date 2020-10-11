import {REGISTER_START, REGISTER_SUCCESS} from '../action/index.js';

const initialState = {
  users: {},
  isRegistering: false,
  error: ''
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        error: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        error: null,
        user: action.payload
      };
    default:
      return state;
  }
};
