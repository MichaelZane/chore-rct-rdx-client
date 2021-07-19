import {
  CHILD_START,
  CHILD_SUCCESS, 
  CHILD_ERROR  
} from './index';
import axiosWithAuth from '../utils/axiosWithAuth';

const getChildren = () => async dispatch => {
  
  dispatch({type: CHILD_START});

  await axiosWithAuth()
    .get(`/api/auth/parent/${localStorage.getItem('userId')}`)
    .then(res => {
      dispatch({ type: CHILD_SUCCESS, payload: res.data });

    })
    .catch(err => {

      dispatch({type: CHILD_ERROR, payload: err.res});
      
    });
};

export default getChildren;
