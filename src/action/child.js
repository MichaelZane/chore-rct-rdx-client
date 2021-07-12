import {
    CHILD_START, 
    CHILD_SUCCESS, 
    CHILD_ERROR
  } from '.';
  
  import axiosWithAuth from '../utils/axiosWithAuth';
  
  const details = (id, history )=> dispatch => {
    dispatch({type: CHILD_START});
    return axiosWithAuth()
      .get(`/api/auth/child/justchild/${id}`)
      .then(res => {
        
        dispatch({type: CHILD_SUCCESS, payload: res.data });
  
        // history.push(`/childdetails/${id}`)
  
      })
      .catch(err => {
  
        dispatch({type: CHILD_ERROR, payload: err.res});
      });
  };
  
  export default details;