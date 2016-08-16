import React from 'react';
import store from 'WeatherStore';
import {connect} from 'react-redux';
import DialogMessage from 'DialogMessage';
import MessageConstants from 'MessageConstants';

class WeatherConditions extends React.Component{

  render(){

    if(this.props.weather.response && this.props.weather.current_observation){
      var {display_location, weather, temp_f, feelslike_f, wind_string, wind_dir, relative_humidity, icon_url} = this.props.weather.current_observation;

      return (
        <div id="weatherConditions">
          <div className="weather-summary">{display_location.full}</div>
          <div className="weather-summary">{weather}</div>
          <div id="weather-icon"><img src={icon_url} /></div>
          <div id="temperature">Temperate: {temp_f} <small id="feels-like">(Feels like {feelslike_f})</small></div>
          <div className="bar-item"><strong>Wind:</strong> {wind_string} {wind_dir}</div>
          <div className="bar-item"><strong>Humidity:</strong> {relative_humidity}</div>
        </div>
      );
    } else if(this.props.weather.response){
      return (
        <DialogMessage show="true" text={MessageConstants.ERROR_LOCATION_NOT_FOUND} type="alert alert-danger" glyphicon="glyphicon glyphicon-remove-circle" />
      );
    }
    return null;
  };
};

export default connect((store) => {
  return {
    weather: store.WeatherState.weather,
  }
})(WeatherConditions);
