const initialState = {
  user : {
    id: null,
    name: null,
    age: null
  },
  fetching : false,
  fetched : false,
  error: null
};

export default (state=initialState, action)=> {
  switch (action.type) {
    case 'USER_FETCH':
      return {...state, fetching : true};
    case 'USER_FETCH_ERROR':
      return {...state, fetching : false, error : action.payload}
    case 'USER_FETCH_COMPLETED':
      return {...state, fetching : false, fetched : true, user : action.payload, error : null}
  }

  return state;
};
