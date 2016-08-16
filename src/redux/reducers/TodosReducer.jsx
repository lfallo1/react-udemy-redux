const initialState = [];

export default (state=initialState, action)=> {
  switch (action.type) {
    case 'TODOS_FETCH_COMPLETED':
      return action.payload;
  }
  return state;
};
