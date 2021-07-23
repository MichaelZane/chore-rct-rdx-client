import axiosWithAuth from '../utils/axiosWithAuth';
import {
  URL_START,  
  URL_SUCCESS,
  URL_ERROR
} from './index';

const addChild = (id) => async dispatch => {
  dispatch({type: URL_START});
  return await axiosWithAuth()
    .post(`/api/auth/url/${id}`)
    .then(res => {
          
      dispatch({ type: URL_SUCCESS, payload: res.data });
    //   history.push("/home")
    })

    .catch(err => {

      dispatch({type: URL_ERROR, payload: err.res });
      
    });
};

export default addChild;