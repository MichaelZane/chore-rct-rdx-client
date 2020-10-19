import {
  ADD_CHORES_START, 
  ADD_CHORES_SUCCESS, 
  ADD_CHORES_ERROR
} from './index';

import axiosWithAuth from '../utils/axiosWithAuth';

const addChores = item => async dispatch => {
  dispatch({type: ADD_CHORES_START});

  return await axiosWithAuth()
    .post(`/api/chore/${item.id}`, item)
    .then(res => {
      localStorage.getItem('childId')
      console.log(res);
      localStorage.getItem('userId')
      dispatch({type: ADD_CHORES_SUCCESS, payload: res.data.item });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_CHORES_ERROR, payload: err.res });
    });
};

export default addChores;
