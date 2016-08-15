import {combineReducers} from 'redux';
import Todos from 'TodosReducer';
import User from 'UserReducer';

export default combineReducers({Todos, User});
