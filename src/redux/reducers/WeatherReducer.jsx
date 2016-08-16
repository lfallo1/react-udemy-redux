const initialState = {
    weather : {},
    fetching : false,
    fetched : false,
    error : null
};

export default (state=initialState, action)=> {
  switch (action.type) {
    case 'WEATHER_FETCH_START':
      return {...state, fetching : true, fetched : false, error : null};

    case 'WEATHER_FETCH_FULFILLED':
      return {...state, fetching : false, fetched : true, error : null, weather : action.payload};

    case 'WEATHER_FETCH_ERROR':
      return {...state, fetching : false, fetched : false, weather : {}, error : action.payload}
      break;
    case 'CLEAR_WEATHER':
      return initialState;
  }
  return state;
};
