import {
  UPDATE_CHILD_START, 
  UPDATE_CHILD_SUCCESS, 
  UPDATE_CHILD_ERROR
} from '.';
import axiosWithAuth from '../utils/axiosWithAuth';

const updateChild = item => async dispatch => {
  dispatch({type: UPDATE_CHILD_START});
  return await axiosWithAuth()
    .put(`/api/auth/child/${item.id}`, item)
    .then(res => {

      dispatch({type: UPDATE_CHILD_SUCCESS, payload: res.data});
    })
    .catch(err => {

      dispatch({type: UPDATE_CHILD_ERROR, payload: err.res});
    });
};

export default updateChild;
