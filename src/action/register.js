import axios from 'axios';

import { 
  REGISTER_START, 
  REGISTER_SUCCESS, 
  REGISTER_ERROR 
} from './index';

const register = user => async dispatch => {
  dispatch({type: REGISTER_START});

  return await axios
  
    .post('https://chore-backend.herokuapp.com/api/auth/register', user)
    .then(res => {

      dispatch({type: REGISTER_SUCCESS, payload: res.data });

    })
    .catch(err => {

      dispatch({type: REGISTER_ERROR, payload: err.res});

    });
};

export default register;
