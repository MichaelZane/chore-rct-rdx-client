import {
  ADD_CHORES_START, 
  ADD_CHORES_SUCCESS, 
  ADD_CHORES_ERROR
} from './index';

import axiosWithAuth from '../utils/axiosWithAuth';

const addChores = (chore, history) => async dispatch => {
  dispatch({type: ADD_CHORES_START});

  return await axiosWithAuth()
    .post(`/api/chore/`, chore)
    .then(res => {

      localStorage.getItem('childId')
      localStorage.getItem('userId')
      localStorage.setItem('choreId', res.data)
      dispatch({type: ADD_CHORES_SUCCESS, payload: res.data});
      history.push("/home")
    })
    .catch(err => {

      dispatch({ type: ADD_CHORES_ERROR, payload: err.res });
    });
};

export default addChores;
