import axios from 'axios';

import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from './index';
import axiosWithAuth from '../utils/axiosWithAuth';

const login = (user, history) => dispatch => {
  console.log('I am coming from action!!');
  dispatch({type: LOGIN_START});
  return axiosWithAuth()
    .post('/api/auth/login', user)
    .then(res => {
      // console.log('I am ')
      // console.log('I am token: ', res.data.token);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);

      // localStorage.getItem('token');
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
      history.push('/home');
    })
    .catch(err => {
      dispatch({type: 'LOGIN_ERROR', payload: err});
    });
};

export default login;
