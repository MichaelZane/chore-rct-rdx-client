import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_ERROR,
  USER_SIGNIN_GOOGLE,
  USER_SIGNIN_GOOGLE_SUCCESS,
  USER_SIGNIN_GOOGLE_FAILURE, 
} 
  from '../action/index.js';

const initialState = {
  userId: "",
  isFetching: false,
  userData: {},
  googleData: {},
  user: {},
  error: "",
  token: "",
  userInfo: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("userId", action.payload.user_id)
      return {
        ...state,
        isFetching: false,
        error: "",
        user: action.payload,

        
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      };

//OATH GOOGLE

    case USER_SIGNIN_GOOGLE:
      return {
        ...state,
        isFetching: true
      }

    case USER_SIGNIN_GOOGLE_SUCCESS:
      localStorage.setItem("googleId", action.payload.user.googleId)
      return {
        ...state,
        isFetching: false,
        userData: action.payload.user
      }
    
    case USER_SIGNIN_GOOGLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
