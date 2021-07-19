import {
  CHORES_START, 
  CHORES_SUCCESS, 
  CHORES_ERROR
} from './index';
import axiosWithAuth from '../utils/axiosWithAuth';

const getChores = (chore) => async dispatch => {
  
  dispatch({type: CHORES_START});
  
  await axiosWithAuth()
    .get(`/api/chore`, chore)
    .then(res => {

      dispatch({type: CHORES_SUCCESS, payload: res.data})
       
    })
    .catch(err => {
      console.log(err);
      dispatch({type: CHORES_ERROR, payload: err.res });
    });
};

export default getChores;
