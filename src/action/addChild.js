import axiosWithAuth from '../utils/axiosWithAuth';
import {ADD_CHILD_START, ADD_CHILD_ERROR, ADD_CHILD_SUCCESS} from '.';

const addChild = child => dispatch => {
  dispatch({type: ADD_CHILD_START});
  return axiosWithAuth()
    .post('/api/auth/register/child', child)
    .then(res => {
      console.log(res);
      dispatch({type: ADD_CHILD_SUCCESS, payload: child});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: ADD_CHILD_ERROR, paylod: err});
    });
};

export default addChild;
