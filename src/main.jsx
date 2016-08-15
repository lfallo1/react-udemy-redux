import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from 'redux';

//handle dispatched events.
//cycle through different types of actions and set the state accordingly
const reducer = (state=0, action) =>{
  switch (action.type) {
    case 'INC':
      console.log('incrementing by ' + action.payload);
      return state + action.payload;
    case 'DEC':
      console.log('decrementing by ' + action.payload);
      return state - action.payload;
    case 'ERR':
      throw new Error('Bad type: ' + action.type);
    default:
      return state;
  }
};

const logger = (store)=>(next)=>(action)=>{
    console.log('Action triggered...', action);
    if(action.type === 'DEC'){
      action.payload *= 100;
    }
    next(action);
};

const error = (store)=>(next)=>(action)=>{
    try{
        next(action);
    } catch(e){
      console.log(e);
    }
};

const middleware = applyMiddleware(logger, error);

//create a store with reducer
const store = createStore(reducer, 0, middleware);

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
store.dispatch({
  type: 'ERR',
  payload: -1
});
