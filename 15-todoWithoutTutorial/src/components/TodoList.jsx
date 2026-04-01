import { useContext, useState } from 'react';
import TodoItem from './TodoItem'
import TodoContext from '../context/TodoContext';

function TodoList() {
  const storedValues = useContext(TodoContext);
  const {todos} = storedValues;

return (
    <div className = "todo-list-wrapper">
      {
        todos.map((todo) => (
          <TodoItem key={todo.id} todo = {todo}/>
        ))
      }
    </div>
  )
}

export default TodoList;

