import {
  CHILD_START,
  CHILD_SUCCESS,
  CHILD_ERROR,
  ADD_CHILD_START,
  ADD_CHILD_SUCCESS,
  ADD_CHILD_ERROR,
  DELETE_CHILD_START,
  DELETE_CHILD_SUCCESS,
  DELETE_CHILD_ERROR,
  UPDATE_CHILD_START,
  UPDATE_CHILD_SUCCESS,
  UPDATE_CHILD_ERROR,
} from "../action";

const initialState = {
  child: [],
  isLoading: false,
  deletingChild: false,
  addChild: false,
  error: "",
};

export const childReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHILD_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CHILD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        child: payload,
      };
    case CHILD_ERROR:
      return {
        ...state,
        error: payload,
      };
    case ADD_CHILD_START:
      return {
        ...state,
        addChild: true,
        error: null,
      };

    case ADD_CHILD_SUCCESS:
      localStorage.getItem("userId", payload.user_id);
      localStorage.setItem("childId", payload.child_id);

      return {
        ...state,
        addChild: false,
        child: payload,
      };

    case ADD_CHILD_ERROR:
      return {
        ...state,
        error: payload,
      };

    case DELETE_CHILD_START:
      return {
        ...state,
        deletingChild: true,
        error: null,
      };
    case DELETE_CHILD_SUCCESS:
      return {
        ...state,
        deletingChild: false,
        child: state.filter(({ id }) => id !== payload.id)
      
      };

    case DELETE_CHILD_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    case UPDATE_CHILD_START:
      return {
        ...state,
        updatingChild: true,
        error: null,
      };
    case UPDATE_CHILD_SUCCESS:
      return {
        updatingChild: false,
        child: state.map((child) => {
          if (child.id === payload.id) {
            return {
              ...child,
              ...payload
            }
          } else {
            return child;
          }
        }),
      };
    case UPDATE_CHILD_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
