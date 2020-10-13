import {
  GET_CHILDREN_START, GET_CHILDREN_ERROR, GET_CHILDREN_SUCCESS
} from '.';
import axiosWithAuth from '../utils/axiosWithAuth';

const getChildren = id => async dispatch => {

  dispatch({type: GET_CHILDREN_START});

  await axiosWithAuth()
    .get(`/api/auth/parent/${localStorage.getItem('userId')}`, id)
    .then(res => {
      dispatch({ type: GET_CHILDREN_SUCCESS, payload: res.data });
    })
    .catch(err => {

      dispatch({type: GET_CHILDREN_ERROR, payload: err.res });
    });
};

export default getChildren;
