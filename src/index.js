import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { todos } from './Core/Board/reducers/reducers';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { createStore, combineReducers } from 'redux';
import { addTodo } from './Core/Board/Actions/actions';

const allReduces = combineReducers({
  board: todos
})
const store = createStore(
  allReduces,
  {board: ['init']},
  window.devToolsExtension && window.devToolsExtension()
  );
console.log(store.getState())
store.dispatch(addTodo());
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
