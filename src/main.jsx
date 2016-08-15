import React from 'react';
import ReactDom from 'react-dom';
import App from 'App';
import {Provider} from "react-redux";
import Store from 'Store';

ReactDom.render(
  <Provider store={Store}>
    <App />
  </Provider>, 
document.getElementById("app"));
