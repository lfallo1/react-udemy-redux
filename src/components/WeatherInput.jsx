import React from 'react';
import WeatherActions from 'WeatherActions';
import axios from 'axios';
import store from 'WeatherStore';
import {connect} from 'react-redux';

const key = 'da189b2d63010329';
const generateRequestUrl = function(type, state, city){
  return `http://api.wunderground.com/api/${key}/${type}/q/${state}/${city}.json`;
};
const requestTypes ={
  'FORECAST_TEN_DAY' : 'forecast10day',
  'CONDITIONS' : 'conditions'
};

class WeatherInput extends React.Component{

  getWeather = () =>{

    const {city, state} = this.refs;

    this.props.dispatch((dispatch)=>{
      dispatch(WeatherActions.FetchWeatherStart());
      axios.get(generateRequestUrl(requestTypes.CONDITIONS, state.value, city.value)).then((res)=>{
        dispatch(WeatherActions.FetchWeatherFulfilled(res.data))
      }).catch((err)=>{
        dispatch(WeatherActions.FetchWeatherError(err));
      });
    });
  };

  render(){
    return (
      <div id="weatherForm">
        <input ref="city" className="form-control" type="text" placeholder="City" />
        <input ref="state" className="form-control" type="text" placeholder="State" />
        <button className="btn btn-default" onClick={this.getWeather}>Submit</button>
      </div>
    );
  };
};

export default connect((store) => {return { }})(WeatherInput);
