export default {

  FetchUser : function(){
    return {
      type: 'USER_FETCH_FULFILLED',
      payload : {
        name : 'John',
        age : 31
      }
    }
  }

};
//
//   return {...state, fetching : true};
// case 'USER_FETCH_ERROR':
//   return {...state, fetching : false, error : action.payload}
// case 'USER_FETCH_COMPLETED':
