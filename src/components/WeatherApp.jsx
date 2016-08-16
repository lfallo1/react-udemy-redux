import React from 'react';
import store from 'WeatherStore';
import {connect} from 'react-redux';
import WeatherActions from 'WeatherActions';
import WeatherConditions from 'WeatherConditions';
import WeatherInput from 'WeatherInput';
import DialogMessage from 'DialogMessage';
import MessageConstants from 'MessageConstants';

class WeatherApp extends React.Component{

  render(){
    const {weather, fetching, fetched, error} = this.props.weatherState;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 id="page-title">Weather Spy</h2>
            <DialogMessage show={fetching} text={MessageConstants.FETCHING} type="alert alert-warning" glyphicon="glyphicon glyphicon-info-sign" />
            <DialogMessage show={error} text={MessageConstants.ERROR_FATAL} type="alert alert-danger" glyphicon="glyphicon glyphicon-remove-circle" />
            <WeatherConditions />
            <WeatherInput />
          </div>
        </div>
      </div>
    );
  };
};

export default connect((store) => {
  return {
    weatherState: store.WeatherState,
  }
})(WeatherApp);
