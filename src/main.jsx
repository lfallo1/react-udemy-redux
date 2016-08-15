import React from 'react';
import ReactDom from 'react-dom';
import {combineReducers, createStore} from 'redux';

const userReducer = (state={}, action)=> {
  switch (action.type) {
    case 'USER_CHANGE_USERNAME':
        state = {...state, name: action.payload};
        return state;
      break;
    case 'USER_CHANGE_AGE':
        state = {...state, age: action.payload};
        return state;
      break;
  }

  return state;
};

const postReducer = (state=[], action)=> {
  switch (action.type) {
    case 'POST_NEW':
      return Object.assign({}, state, {
        posts : [
          ...state,
          action.payload
        ]
      });
      break;
  }

  return state;
};

const reducers = combineReducers({
  user: userReducer,
  posts: postReducer
});

const store = createStore(reducers);

store.subscribe(()=>{
  console.log('Store changed...', store.getState());
});

store.dispatch({
  type : 'POST_NEW',
  payload : {
    title : 'Post one title',
    body : 'This is the body of the post'
  }
});

store.dispatch({
  type : 'USER_CHANGE_USERNAME',
  payload : 'lfallo1'
});

store.dispatch({
  type : 'USER_CHANGE_AGE',
  payload : 30
});
