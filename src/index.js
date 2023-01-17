import React from 'react';
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import './index.css';
import App from './App';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);


root.render(
<React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
</React.StrictMode>

);
