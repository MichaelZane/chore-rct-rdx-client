import {
    CHILD_START, 
    CHILD_SUCCESS, 
    CHILD_ERROR
  } from '../action';
  
  const initialState = {
    details: {},
    updatingChild: false,
    error: ''
  };
  
  export const childReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHILD_START:
        return {
          ...state,
          updatingChild: true,
          error: null
        };
      case CHILD_SUCCESS:
        return {
          ...state,
          updatingChild: false,
          details: action.payload
        };
      case CHILD_ERROR:
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };