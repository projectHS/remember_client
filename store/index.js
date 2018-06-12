import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import allWords from './allWords';
import user from './user';
import book from './book';

const reducer = combineReducers({ allWords, user })
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })))

const store = createStore(reducer, middleware);

export default store;
export * from './allWords';
export * from './user'