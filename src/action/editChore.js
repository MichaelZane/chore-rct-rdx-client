import {
    EDIT_CHORE_START, 
    EDIT_CHORE_SUCCESS, 
    EDIT_CHORE_ERROR
  } from '.';
  import axiosWithAuth from '../utils/axiosWithAuth';
  
  
  
  const editChore= ( id )=> dispatch => {
    dispatch({type: EDIT_CHORE_START});
    return axiosWithAuth()
      .put(`/api/auth/child/${id}`)
      .then(res => {
        
        dispatch({type: EDIT_CHORE_SUCCESS, payload: res.data});
        
        
  
      })
      .catch(err => {
  
        dispatch({type: EDIT_CHORE_ERROR, payload: err.res});
      });
  };
  
  export default editChore;
