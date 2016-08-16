export default {
  FetchWeatherStart : function(){
    return {
      type: 'WEATHER_FETCH_START'
    }
  },
  FetchWeatherFulfilled : function(weather){
    return {
      type: 'WEATHER_FETCH_FULFILLED',
      payload : weather
    }
  },
  FetchWeatherError : function(error){
    return {
      type: 'WEATHER_FETCH_ERROR',
      payload : error
    }
  },
  ClearWeather : function(){
    return {
      type : 'CLEAR_WEATHER'
    }
  }
};
