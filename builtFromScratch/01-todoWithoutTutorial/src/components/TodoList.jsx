import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,onDelete,toggleCheck}) {
  return (
    <div>
      {
        todos.map((todo) => (
          <TodoItem key={todo.id} todo = {todo} onDelete={onDelete} toggleCheck={ toggleCheck} />
        ))
      }
    </div>
  )
}

export default TodoList

