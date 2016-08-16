import React from 'react';
import ReactDom from 'react-dom';
import WeatherApp from 'WeatherApp';
import {Provider} from "react-redux";
import Store from 'WeatherStore';

ReactDom.render(
  <Provider store={Store}>
    <WeatherApp />
  </Provider>,
document.getElementById("app"));
