import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { todos } from './Core/Board/reducers/reducers';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { addTodo } from './Core/Board/Actions/actions';

const allReduces = combineReducers({
  board: todos
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);
const store = createStore(
  allReduces,
  {},
  allStoreEnhancers
  );
console.log(store.getState())

console.log(store.getState())
ReactDOM.render(  
  <Provider store={store}>
  <BrowserRouter>
    <App className="main"/>
  </BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
