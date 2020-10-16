import {
  DELETE_CHILD_START, DELETE_CHILD_SUCCESS, DELETE_CHILD_ERROR
} from '../action';

const initialState = {
  children: [],
  id: "",
  deletingChildern: false,
  error: ''
};

export const deleteChildReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CHILD_START:
      return {
        ...state,
        deletingChildren: true,
        error: null
      };
    case DELETE_CHILD_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        deletingChildren: false,
        children: state.children.filter(child =>    child.id !== action.payload)
      };

    case DELETE_CHILD_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
