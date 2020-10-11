import {UPDATE_CHILD_START, UPDATE_CHILD_SUCCESS, UPDATE_CHILD_ERROR} from '.';
import axiosWithAuth from '../utils/axiosWithAuth';

const updateChild = item => dispatch => {
  dispatch({type: UPDATE_CHILD_START});
  return axiosWithAuth()
    .put(`/api/auth/child/${item.id}`, item)
    .then(res => {
      console.log(res.data);
      dispatch({type: UPDATE_CHILD_SUCCESS, payload: item});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: UPDATE_CHILD_ERROR, type: err});
    });
};

export default updateChild;
