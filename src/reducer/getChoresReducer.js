import {
  FETCH_CHORES_START, 
  FETCH_CHORES_SUCCESS, 
  FETCH_CHORES_ERROR
} from '../action';

const initialState = {
  chore: [],
  isLoading: false,
  error: ''
};

export const getChoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHORES_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_CHORES_SUCCESS:

      return {
        ...state,
        isLoading: false,
        chore: action.payload
      };
    case FETCH_CHORES_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
