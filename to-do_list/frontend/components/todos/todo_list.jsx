import React from 'react'; 
import TodoForm from '../todo_list/todo_form'

const TodoList = ({todos, receiveTodo}) => {
  // {todos} = this.props
  debugger;
  return (
	<div>
    <ul>
      {todos.map( (item, idx) => <li key={idx}>{item.title}</li>)}
    </ul>
    <TodoForm receiveTodo={receiveTodo}/>
	</div>
)}
export default TodoList;