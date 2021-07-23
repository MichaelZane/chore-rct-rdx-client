import {
  UPDATE_CHILD_START,
  UPDATE_CHILD_SUCCESS,
  UPDATE_CHILD_ERROR,
} from ".";
import axiosWithAuth from "../utils/axiosWithAuth";

const updateChild = ( id ) => (dispatch) => {
  
  dispatch({ type: UPDATE_CHILD_START });
  return axiosWithAuth()
    .put(`/api/auth/child/${id}`)
    .then((res) => {
      dispatch({ type: UPDATE_CHILD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_CHILD_ERROR, payload: err.res });
    });
};

export default updateChild;
