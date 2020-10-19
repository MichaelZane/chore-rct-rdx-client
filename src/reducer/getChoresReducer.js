import {
  FETCH_CHORES_START, 
  FETCH_CHORES_SUCCESS, 
  FETCH_CHORES_ERROR
} from '../action';

const initialState = {
  chore: [],
  fetchingChoresList: false,
  error: ''
};

export const getChoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHORES_START:
      return {
        ...state,
        fetchingChoresList: true,
        error: null
      };
    case FETCH_CHORES_SUCCESS:
      console.log("<<<<<ACTION>>>>>", action.payload)
      return {
        ...state,
        fetchingChoresList: false,
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
