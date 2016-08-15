export function FetchUser(){
  return {
    type: 'USER_FETCH_COMPLETED',
    payload : {
      name : 'John',
      age : 31
    }
  }
};
//
//   return {...state, fetching : true};
// case 'USER_FETCH_ERROR':
//   return {...state, fetching : false, error : action.payload}
// case 'USER_FETCH_COMPLETED':
