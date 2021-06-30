import axios from 'axios';

import { 
  REGISTER_START, 
  REGISTER_SUCCESS, 
  REGISTER_ERROR 
} from './index';

const register = user => async dispatch => {
  dispatch({type: REGISTER_START});

  return await axios
  
    .post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`, user)
    .then(res => {

      dispatch({type: REGISTER_SUCCESS, payload: res.data });

    })
    .catch(err => {

      dispatch({type: REGISTER_ERROR, payload: err.res});

    });
};

export default register;
