import {
    CHORE_START, 
    CHORE_SUCCESS, 
    CHORE_ERROR
  } from './index';
  import axiosWithAuth from '../utils/axiosWithAuth';
  
  const chore = (id, history) => async dispatch => {
    
    dispatch({type: CHORE_START});
    
    await axiosWithAuth()
      .get(`/api/singlechore/${id}`)
      .then(res => {
  
        dispatch({type: CHORE_SUCCESS, payload: res.data})
        history.push(`/chore/${id}`)   
      })
      .catch(err => {
        console.log(err);
        dispatch({type: CHORE_ERROR, payload: err.res });
      });
  };
  
  export default chore;