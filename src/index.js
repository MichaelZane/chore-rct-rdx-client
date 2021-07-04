import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger';
import combineReducers from './reducer/';
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux'; 
import './index.css';
// import store from './store'
import App from './App';
import 'reactjs-popup/dist/index.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
  
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,   
    
  document.getElementById('root')

)
