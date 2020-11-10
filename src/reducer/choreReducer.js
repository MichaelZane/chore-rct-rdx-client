import {
    FETCH_CHORE_START, 
    FETCH_CHORE_SUCCESS, 
    FETCH_CHORE_ERROR
  } from '../action';
  
  const initialState = {
    chore: [],
    isLoading: false,
    error: ''
  };
  
  export const choreReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHORE_START:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case FETCH_CHORE_SUCCESS:
  
        return {
          ...state,
          isLoading: false,
          chore: action.payload
        };
      case FETCH_CHORE_ERROR:
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };