import {GET_CHILDREN_ERROR, GET_CHILDREN_START, GET_CHILDREN_SUCCESS} from '../action';

const initialState = {
  fetchingChildren: false,
  error: '',
  children: []
};

export const getChildrenReducer = (state = initialState, {type, payload}) => {
  switch (type) {
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
        children: payload
      };
    case GET_CHILDREN_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};
