import {DELETE_CHORES_START, DELETE_CHORES_SUCCESS, DELETE_CHORES_ERROR} from '.';
import axiosWithAuth from '../utils/axiosWithAuth';

const deleteChores = id => dispatch => {
  dispatch({type: DELETE_CHORES_START});

  return axiosWithAuth()
    .delete(`/api/chore/${id}`)
    .then(res => {
      console.log(res);
      dispatch({type: DELETE_CHORES_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: DELETE_CHORES_ERROR, payload: err});
    });
};

export default deleteChores;
