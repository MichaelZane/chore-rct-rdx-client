import {
    EDIT_CHORE_START, 
    EDIT_CHORE_SUCCESS, 
    EDIT_CHORE_ERROR
  } from '../action';
  
  const initialState = {
    chore: {},
    isLoading: false,
    error: ''
  };
  
  export const choreReducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_CHORE_START:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case EDIT_CHORE_SUCCESS:
  
        return {
          ...state,
          isLoading: false,
          chore: action.payload
        };
      case EDIT_CHORE_ERROR:
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };