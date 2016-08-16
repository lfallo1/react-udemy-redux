import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from 'PrimaryReducer';

const middleware = applyMiddleware(logger(),thunk);

//create a store with reducer
export default createStore(reducers, middleware);
