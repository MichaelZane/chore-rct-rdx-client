import axiosWithAuth from '../utils/axiosWithAuth';
import {
  ADD_CHILD_START, 
  ADD_CHILD_ERROR, 
  ADD_CHILD_SUCCESS
} from '.';

const addChild = child => async dispatch => {
  dispatch({type: ADD_CHILD_START});
  await axiosWithAuth()
    .post('/api/auth/register/child', child)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userId', res.data.user_id)
      dispatch({ type: ADD_CHILD_SUCCESS, payload: res.data });
     
    })

    .catch(err => {

      dispatch({type: ADD_CHILD_ERROR, payload: err.res });
    });
};

export default addChild;
