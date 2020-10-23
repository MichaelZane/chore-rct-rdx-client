import {
    CHILD_START, 
    CHILD_SUCCESS, 
    CHILD_ERROR
  } from '.';
  import axiosWithAuth from '../utils/axiosWithAuth';
  
  const child = (child, history )=> dispatch => {
    dispatch({type: CHILD_START});
    return axiosWithAuth()
      .put(`/api/auth/child/justchild${localStorage.getItem("childId")}`, child)
      .then(res => {
        
        dispatch({type: CHILD_SUCCESS, payload: res.data});
  
        history.push(`/child`)
  
      })
      .catch(err => {
  
        dispatch({type: CHILD_ERROR, payload: err.res});
      });
  };
  
  export default child;