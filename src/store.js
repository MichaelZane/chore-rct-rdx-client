import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import childReducer from "./slices/childSlice";
import choreReducer from "./slices/choreSlice";
import loginReducer from "./slices/loginSlice";
import registerReducer from "./slices/registerSlice";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = configureStore({

  reducer: {
    //this being an object requires child. to be attached state
    child: childReducer,
    //this being an object requires chore. to be attached state
    chore: choreReducer,
    //this being an object requires login. to be attached to state 
    login: loginReducer,
    //this being an object requires register. to be attached to state 
    register: registerReducer,
  },
  middleware: [logger, thunk]
});


export const useThunkDispatch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch = dispatch;
  }, [dispatch]);
  return store.dispatch;
};


export default store;
