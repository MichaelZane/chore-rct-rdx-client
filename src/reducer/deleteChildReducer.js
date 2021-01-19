import {
  DELETE_CHILD_START, 
  DELETE_CHILD_SUCCESS, 
  DELETE_CHILD_ERROR
} from '../action';

const initialState = {
  children: [],
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

      return {
        ...state,
        deletingChildren: false,
        child: state.filter(chld => chld.id !== action.payload)
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
