const initialState = {
    todos : [],
    fetching : false,
    fetched : false,
    error : null
};

const generateId = (todos) =>{
  var max = 1;
  todos.forEach(t=>max = Math.max(t.id,max))
  return max;
};

export default (state=initialState, action)=> {
  let idx = -1;
  switch (action.type) {
    case 'TODOS_FETCH':
      break;

    case 'TODOS_FETCH_FULFILLED':
      return {...state, fetching : false, fetched : true, error : null, todos : action.payload};
      break;

    case 'TODOS_FETCH_ERROR':
      break;

    case 'TODOS_ADD':
      action.payload.id = generateId(state.todos);
      return {...state, todos : [...state.todos, action.payload]};

    case 'TODO_TOGGLE_COMPLETED':
      idx = action.payload;
      let completedTodo = {...state.todos[idx], completed : !state.todos[idx].completed};
      return {...state, todos : [...state.todos.slice(0,idx), completedTodo, ...state.todos.slice(idx+1)]};

    case 'TODOS_DELETE':
      idx = action.payload;
      return {...state, todos : [...state.todos.slice(0, idx), ...state.todos.slice(idx + 1)]};
  }
  return state;
};
