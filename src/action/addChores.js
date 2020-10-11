import {ADD_CHORES_START, ADD_CHORES_SUCCESS, ADD_CHORES_ERROR} from '.';

import axiosWithAuth from '../utils/axiosWithAuth';

const addChores = item => dispatch => {
  dispatch({type: ADD_CHORES_START});

  return axiosWithAuth()
    .post(`/api/chore/${item.id}`, item)
    .then(res => {
      console.log(res);
      dispatch({type: ADD_CHORES_SUCCESS, payload: item});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: ADD_CHORES_ERROR, payload: err});
    });
};

export default addChores;
