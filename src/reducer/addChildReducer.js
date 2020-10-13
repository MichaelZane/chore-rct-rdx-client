import {
  ADD_CHILD_START, 
  ADD_CHILD_SUCCESS, 
  ADD_CHILD_ERROR
} from '../action';

const initialState = {
  children: [],
  fetchingChildren: false,
  error: ''
};

export const addChildReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHILD_START:
      return {
        ...state,
        fetchingChildren: true,
        error: null
      };

    case ADD_CHILD_SUCCESS:
      return {
        ...state,
        fetchingChildren: false,
        children: action.payload
      };

    case ADD_CHILD_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
