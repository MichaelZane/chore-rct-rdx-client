import axiosWithAuth from '../utils/axiosWithAuth';
import {
  ADD_CHILD_START, 
  ADD_CHILD_ERROR, 
  ADD_CHILD_SUCCESS
} from './index';

const addChild = (child, history ) => async dispatch => {
  dispatch({type: ADD_CHILD_START});
  return await axiosWithAuth()
    .post('/api/auth/register/child', child)
    .then(res => {
          
      dispatch({ type: ADD_CHILD_SUCCESS, payload: res.data });

      localStorage.getItem('userId')
      localStorage.setItem('childId', res.data.child.id) 
      history.push("/home")
    })

    .catch(err => {

      dispatch({type: ADD_CHILD_ERROR, payload: err.res });
      
    });
};

export default addChild;
