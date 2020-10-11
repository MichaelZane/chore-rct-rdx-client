import {DELETE_CHORES_START, DELETE_CHORES_SUCCESS} from '../action';

const initialState = {
  choresList: [],
  deletingChore: false,
  error: ''
};

export const deleteChoresReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case DELETE_CHORES_START:
      return {
        ...state,
        deletingChores: true
      };
    case DELETE_CHORES_SUCCESS:
      return {
        ...state,
        deletingChore: false,
        choresList: state.choresList.filter(chore => chore.id !== payload)
      };

    default:
      return state;
  }
};
