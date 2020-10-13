
import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 
  USER_SIGNIN_GOOGLE_SUCCESS, 
  USER_SIGNIN_GOOGLE 
} from './index';

import axiosWithAuth from '../utils/axiosWithAuth';

const login = form => async (dispatch) => {
  dispatch({type: LOGIN_START})
  await axiosWithAuth()
    .post('/api/auth/login', form)
    .then(res => {

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.user_id)
      

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
    .then((response) => {
      localStorage.setItem("token", response.data.token)

      return dispatch({
        type: USER_SIGNIN_GOOGLE_SUCCESS,
        payload: response.data
      })
    }) 
}