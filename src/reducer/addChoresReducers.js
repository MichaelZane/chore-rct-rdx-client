import {
  ADD_CHORES_START, 
  ADD_CHORES_SUCCESS, 
  ADD_CHORES_ERROR
} from '../action';

const initialStates = {
  chore: [],
  addingChores: false,
  error: ''
};

export const addChoresReducers = (state = initialStates, action) => {
  switch (action.type) {
    case ADD_CHORES_START:
      return {
        ...state,
        addingChores: true,
        error: null
      };
    case ADD_CHORES_SUCCESS:
      localStorage.setItem("choreId", action.payload.id)
      return {
        ...state,
        addingChores: false,
        chore: action.payload
      };
    case ADD_CHORES_ERROR:
      return {
        ...state,
        error: action.payload
      };
      default:
        return state;
  }
};
