import {
  UPDATE_CHILD_START, 
  UPDATE_CHILD_SUCCESS, 
  UPDATE_CHILD_ERROR
} from '.';
import axiosWithAuth from '../utils/axiosWithAuth';



const updateChild = (newChild, id, history )=> dispatch => {
  dispatch({type: UPDATE_CHILD_START});
  return axiosWithAuth()
    .put(`/api/auth/child/${id}`, newChild)
    .then(res => {
      
      dispatch({type: UPDATE_CHILD_SUCCESS, payload: res.data});
      
      // history.push(`/childdetail/${id}`)

    })
    .catch(err => {

      dispatch({type: UPDATE_CHILD_ERROR, payload: err.res});
    });
};

export default updateChild;