import {FETCH_CHORES_START, FETCH_CHORES_SUCCESS, FETCH_CHORES_ERROR} from '../action';

const initialState = {
  choresList: [],
  fetchingChoresList: false,
  error: ''
};

export const getChoresReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CHORES_START:
      return {
        ...state,
        fetchingChoresList: true,
        error: null
      };
    case FETCH_CHORES_SUCCESS:
      return {
        ...state,
        fetchingChoresList: false,
        choresList: payload
      };
    case FETCH_CHORES_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};
