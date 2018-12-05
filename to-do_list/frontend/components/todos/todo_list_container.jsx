import React from 'react';
import todoList from './todo_list';
import {connect} from 'react-redux';
import {receiveTodo, receiveTodos} from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
