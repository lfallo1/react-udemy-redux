export default {

  FetchTodos : function(){
    return {
      type: 'TODOS_FETCH_COMPLETED',
      payload : [
        {id:1, name:'Buy food', completed:false},
        {id:2,name:'Meet for lunch', completed: false},
        {id:3,name:'Eat a cake', completed: true}
      ]
    }
  }

};
//
//   return {...state, fetching : true};
// case 'USER_FETCH_ERROR':
//   return {...state, fetching : false, error : action.payload}
// case 'USER_FETCH_COMPLETED':
