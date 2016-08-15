import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';

//handle dispatched events.
//cycle through different types of actions and set the state accordingly
const reducer = (state=0, action) =>{
  switch (action.type) {
    case 'INC':
      console.log('incrementing by ' + action.payload);
      return state + action.payload;
      break;
    case 'DEC':
    console.log('decrementing by ' + action.payload);
      return state - action.payload;
      break;
    default:
      return state;
  }
};

//create a store with reducer
const store = createStore(reducer, 0);

//listen for changes on store
store.subscribe(()=>{
  console.log('store changed...', store.getState());
});

//dispatch an action - reducer will handle
store.dispatch({
  type: 'INC',
  payload: 1
});
store.dispatch({
  type: 'DEC',
  payload: 1
});
