
import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 
  USER_SIGNIN_GOOGLE_SUCCESS, 
  USER_SIGNIN_GOOGLE 
} from './index';

import axiosWithAuth from '../utils/axiosWithAuth';

const login = (user, history) => async (dispatch) => {
  dispatch({type: LOGIN_START})
  await axiosWithAuth()
    .post('/api/auth/login', user)
    .then(res => {

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.user_id)

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      history.push("/home")
    })
    
    .catch(err => {
      dispatch({type: LOGIN_ERROR, payload: err.res });
    });
};

export default login;

export const signUpGoogle = (signUpData) => async   (dispatch) => {
  dispatch({ 
    type: USER_SIGNIN_GOOGLE, 
    payload: signUpData 
  })
  await axiosWithAuth()
    .post("/api/oath/login", {
      token: localStorage.getItem("token")
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token)

      return dispatch({
        type: USER_SIGNIN_GOOGLE_SUCCESS,
        payload: res.data
      })
    }) 
}