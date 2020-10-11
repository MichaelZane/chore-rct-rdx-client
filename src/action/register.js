import axios from 'axios';

import {REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR} from './index';

const register = user => dispatch => {
  console.log('I am coming from action: ');
  dispatch({type: REGISTER_START});
  return axios
    .post('https://chore-tracker1.herokuapp.com/api/auth/register', user)
    .then(res => {
      console.log(res);

      dispatch({type: REGISTER_SUCCESS, payload: res});
    })
    .catch(err => {
      dispatch({type: REGISTER_ERROR, payload: err});
    });
};

export default register;
