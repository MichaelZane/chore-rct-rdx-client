
import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 

} from './index';

import axiosWithAuth from '../utils/axiosWithAuth';

const login = (user, history) => async (dispatch) => {
  dispatch({type: LOGIN_START})
  await axiosWithAuth()
    .post('/api/auth/login', user)
    .then(res => {

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.user_id)
      history.push("/home")
    })
    
    .catch(err => {
      dispatch({type: LOGIN_ERROR, payload: err.res });
    });
};

export default login;

