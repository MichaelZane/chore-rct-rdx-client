import {
  ADD_CHILD_START, 
  ADD_CHILD_SUCCESS, 
  ADD_CHILD_ERROR
} from '../action';

const initialState = {
  child: [],
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
      localStorage.getItem("userId", action.payload.user_id)
      localStorage.setItem("childId", action.payload.child_id)

      return {
        ...state,
        fetchingChildren: false,
        child: action.payload
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
