import {
  GET_CHILDREN_ERROR, 
  GET_CHILDREN_START, 
  GET_CHILDREN_SUCCESS
} from '../action';

const initialState = {
  fetchingChildren: false,
  error: '',
  child: []
};

export const getChildrenReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_CHILDREN_START:
      return {
        ...state,
        error: null,
        fetchingChildren: true
      };
    case GET_CHILDREN_SUCCESS:

      return {
        ...state,
        fetchingChildren: false,
        child: action.payload
      };
      
    case GET_CHILDREN_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
