export default {
  FetchTodos : function(){
    return {
      type: 'TODOS_FETCH_FULFILLED',
      payload : [
        {id:1, name:'Buy food', completed:false},
        {id:2,name:'Meet for lunch', completed: false},
        {id:3,name:'Eat a cake', completed: true}
      ]
    }
  },
  AddTodo : function(name){
    return {
      type: 'TODOS_ADD',
      payload : {name: name, completed:false}
    }
  },
  ToggleCompleted : function(idx){
    return {
      type: 'TODO_TOGGLE_COMPLETED',
      payload : idx
    }
  },
  DeleteTodo : function(idx){
    return {
      type : 'TODOS_DELETE',
      payload : idx
    }
  }
};
//
//   return {...state, fetching : true};
// case 'USER_FETCH_ERROR':
//   return {...state, fetching : false, error : action.payload}
// case 'USER_FETCH_COMPLETED':
