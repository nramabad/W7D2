import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo} from './actions/todo_actions';
import {receiveTodos} from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';

// const initialState = {
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// };

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  window.store = configureStore();
  // window.allTodos = allTodos({todos: initialState});
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  ReactDOM.render(
    // <h1>Todo list is working</h1>, root
    <Root store={store}/>, root
  );
});
