import { 
  REGISTER_START, 
  REGISTER_SUCCESS, 
  REGISTER_ERROR 
} from '../action/index.js';

const initialState = {
  user: {},
  isRegistering: false,
  error: null
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        user: action.payload
      };

    case REGISTER_ERROR:
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      }

    default:
      return state;
  }
};
