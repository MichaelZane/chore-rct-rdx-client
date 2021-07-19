import axiosWithAuth from '../utils/axiosWithAuth';
import {
  ADD_CHORES_START, 
  ADD_CHORES_SUCCESS, 
  ADD_CHORES_ERROR
} from './index';

const addChores = (chore, history) => async dispatch => {
  
  dispatch({type: ADD_CHORES_START});
  return await axiosWithAuth()
    .post(`/api/chore`, chore)
    .then(res => {

      dispatch({type: ADD_CHORES_SUCCESS, payload: res.data});
     
      localStorage.getItem('childId')
      localStorage.setItem('choreId', res.data.id)
      
      history.push("/home")
            
    })
    
    .catch(err => {

      dispatch({ type: ADD_CHORES_ERROR, payload: err.res });
    });
};

export default addChores;
