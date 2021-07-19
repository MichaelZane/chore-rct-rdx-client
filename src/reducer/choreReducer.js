import {
  CHORES_START, 
  CHORES_SUCCESS, 
  CHORES_ERROR,
  ADD_CHORES_START,
  ADD_CHORES_SUCCESS,
  ADD_CHORES_ERROR,
  EDIT_CHORE_START,
  EDIT_CHORE_SUCCESS,
  EDIT_CHORE_ERROR,
  DELETE_CHORES_START, 
  DELETE_CHORES_SUCCESS,
  DELETE_CHORES_ERROR,
} from "../action";

const initialState = {
  chore: [],
  isLoading: false,
  addingChores: false, 
  error: "",
};

export const choreReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHORES_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case CHORES_SUCCESS:

      return {
        ...state,
        isLoading: false,
        chore: action.payload
      };
    case CHORES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ADD_CHORES_START:
      return {
        ...state,
        addingChores: true,
        error: null,
      };
    case ADD_CHORES_SUCCESS:
      localStorage.setItem("choreId", action.payload.id);
      return {
        ...state,
        addingChores: false,
        chore: action.payload,
      };
    case ADD_CHORES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_CHORE_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case EDIT_CHORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chore: action.payload,
      };
    case EDIT_CHORE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
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
    case DELETE_CHORES_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
