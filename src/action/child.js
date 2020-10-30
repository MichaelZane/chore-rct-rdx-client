import {
    CHILD_START, 
    CHILD_SUCCESS, 
    CHILD_ERROR
  } from '.';
  import axiosWithAuth from '../utils/axiosWithAuth';
  
  const child = (id, history )=> dispatch => {
    dispatch({type: CHILD_START});
    return axiosWithAuth()
      .get(`/api/auth/child/${id}`)
      .then(res => {
        
        dispatch({type: CHILD_SUCCESS, payload: id });
  
        history.push(`/childdetails`)
  
      })
      .catch(err => {
  
        dispatch({type: CHILD_ERROR, payload: err.res});
      });
  };
  
  export default child;