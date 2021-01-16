import axiosWithAuth from '../utils/axiosWithAuth';
import {
  CHILD_LOGIN_START, 
  CHILD_LOGIN_SUCCESS,
  CHILD_LOGIN_ERROR
} from './index';

const childLogin = child => async dispatch => {
  dispatch({type: CHILD_LOGIN_START});
  return await axiosWithAuth()
    .post('/api/auth/login/child', child)
    .then(res => {

      dispatch({ type: CHILD_LOGIN_SUCCESS, payload: res.data.user });

      localStorage.setItem('token', res.data.user.token)
      localStorage.setItem('userId', res.data.user.id)
      
    })
    .catch(err => {
      dispatch({ type: CHILD_LOGIN_ERROR, payload: err.res });
    });
};

export default childLogin; 