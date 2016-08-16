const key = 'da189b2d63010329';
const generateUrl = function(city, state){
  return `http://api.wunderground.com/api/${key}/conditions/q/${state}/${city}.json`;
}

const initialState = {
    weather : {},
    fetching : false,
    fetched : false,
    error : null
};

export default (state=initialState, action)=> {
  let idx = -1;
  switch (action.type) {
    case 'WEATHER_FETCH':
      return {...state, fetching : true, fetched : false, error : null};

    case 'WEATHER_FETCH_FULFILLED':
      return {...state, fetching : false, fetched : true, error : null, weather : action.payload};

    case 'WEATHER_FETCH_ERROR':
      return {...state, error : action.payload}
      break;
  }
  return state;
};
