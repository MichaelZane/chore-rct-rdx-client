import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 
import combineReducers from './reducer/';
import './index.css';
import App from './App';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
  
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
    
  document.getElementById('root')
);

