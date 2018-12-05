import {RECEIVE_TODO} from '../actions/todo_actions';
import {RECEIVE_TODOS} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export default (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TODOS:
        return Object.assign(newState, action.todos);
      case RECEIVE_TODO: 
        return Object.assign(newState, {[action.todo.id]: action.todo});
      default:
        return state;
    }
};