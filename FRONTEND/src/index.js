import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './components/App';
import { createStore } from "redux";
import rootstate from "./Reducers"
import { Provider } from 'react-redux';





const Store = createStore(rootstate);


ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);



