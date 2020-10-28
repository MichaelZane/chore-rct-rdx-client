import {
  FETCH_CHORES_START, 
  FETCH_CHORES_SUCCESS, 
  FETCH_CHORES_ERROR
} from './index';
import axiosWithAuth from '../utils/axiosWithAuth';

const getChores = (child_id) => async dispatch => {
  
  dispatch({type: FETCH_CHORES_START});
  
  await axiosWithAuth()
    .get(`/api/auth/child/${child_id}`)
    .then(res => {

      dispatch({type: FETCH_CHORES_SUCCESS, payload: res.data})
          
    })
    .catch(err => {
      console.log(err);
      dispatch({type: FETCH_CHORES_ERROR, payload: err.res });
    });
};

export default getChores;
