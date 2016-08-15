import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

var url = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  fetching : false,
  fetched : false,
  posts : [],
  error : null
};

const fetchingState = {
  fetching : true,
  fetched : false,
  posts : [],
  error : null
};

const fetchErrorState = {
  fetching : false,
  fetched : true,
  posts : []
};

//handle dispatched events.
//cycle through different types of actions and set the state accordingly
const reducer = (state=initialState, action) =>{
  switch (action.type) {
    case 'FETCH_POSTS_START':
      return fetchingState;
    case 'FETCH_POSTS_ERROR':
      return {... fetchErrorState, error : action.payload};
    case 'RECEIVE_POSTS':
      return {... state, fetching : false, fetched : true, posts : action.payload, error : null};
    default:
      return state;
  }
};

const middleware = applyMiddleware(logger(), thunk);

//create a store with reducer
const store = createStore(reducer, middleware);

//listen for changes on store
store.subscribe(()=>{});

//dispatch an action - reducer will handle
store.dispatch((dispatch)=>{
  dispatch({
    type : 'FETCH_POSTS_START'
  });
  axios.get(url + 'sdfg').then((res)=>{
    dispatch({
      type : 'RECEIVE_POSTS',
      payload : res.data
    })
  }).catch((err)=>{
    dispatch({
      type : 'FETCH_POSTS_ERROR',
      payload : err
    });
  });
});
