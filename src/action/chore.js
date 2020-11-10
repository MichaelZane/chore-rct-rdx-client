import {
    FETCH_CHORE_START, 
    FETCH_CHORE_SUCCESS, 
    FETCH_CHORE_ERROR
  } from './index';
  import axiosWithAuth from '../utils/axiosWithAuth';
  
  const singleChore = (id, history) => async dispatch => {
    
    dispatch({type: FETCH_CHORE_START});
    
    await axiosWithAuth()
      .get(`/api/chore/singlechore/${id}`)
      .then(res => {
  
        dispatch({type: FETCH_CHORE_SUCCESS, payload: res.data})
        history.push(`/chore/${id}`)   
      })
      .catch(err => {
        console.log(err);
        dispatch({type: FETCH_CHORE_ERROR, payload: err.res });
      });
  };
  
  export default singleChore;