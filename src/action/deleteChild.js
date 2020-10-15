import {
  DELETE_CHILD_START, 
  DELETE_CHILD_SUCCESS, 
  DELETE_CHILD_ERROR
} from './index';
import axiosWithAuth from '../utils/axiosWithAuth';

const deleteChild = id => async dispatch => {
  dispatch({type: DELETE_CHILD_START});
  return await axiosWithAuth()
    .delete(`/api/auth/child/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_CHILD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_CHILD_ERROR, payload: err.res });
    });
};

export default deleteChild;
