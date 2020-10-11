import {FETCH_CHORES_START, FETCH_CHORES_SUCCESS, FETCH_CHORES_ERROR} from '.';
import axiosWithAuth from '../utils/axiosWithAuth';

const getChores = id => dispatch => {
  dispatch({type: FETCH_CHORES_START});

  return axiosWithAuth()
    .get(`/api/auth/child/${id}`)
    .then(res => {
      console.log(res.data.chore);
      dispatch({type: FETCH_CHORES_SUCCESS, payload: res.data.chore});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: FETCH_CHORES_ERROR, payload: err});
    });
};

export default getChores;
