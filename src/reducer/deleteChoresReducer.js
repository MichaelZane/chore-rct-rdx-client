import {
  DELETE_CHORES_START, DELETE_CHORES_SUCCESS
} from '../action';

const initialState = {
  chore: [],
  deletingChore: false,
  error: ''
};

export const deleteChoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CHORES_START:
      return {
        ...state,
        deletingChores: true
      };
    case DELETE_CHORES_SUCCESS:
      return {
        ...state,
        deletingChore: false,
        chore: state.choresList.filter(chores => chores.id !== action.payload)
      };

    default:
      return state;
  }
};
