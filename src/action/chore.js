import {
    EDIT_CHORE_START, 
    EDIT_CHORE_SUCCESS, 
    EDIT_CHORE_ERROR
  } from './index';
  import axiosWithAuth from '../utils/axiosWithAuth';
  
  const chore = (id, history) => async dispatch => {
    
    dispatch({type: EDIT_CHORE_START});
    
    await axiosWithAuth()
      .get(`/api/chore/${id}`)
      .then(res => {
  
        dispatch({type: EDIT_CHORE_SUCCESS, payload: res.data})
        history.push(`/chore/${id}`)   
      })
      .catch(err => {
        console.log(err);
        dispatch({type: EDIT_CHORE_ERROR, payload: err.res });
      });
  };
  
  export default chore;