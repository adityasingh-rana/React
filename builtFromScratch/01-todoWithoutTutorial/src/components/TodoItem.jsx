import React from 'react'
import '../App.css';

function TodoItem({todo,onDelete,toggleCheck}) {

  return (
    <>
      <div className={`todo-item ${todo.completed ? "completed" : ""}`} >
        <div className = 'task-left'>
        <input type="checkbox" onChange={() => toggleCheck(todo.id)} checked = {todo.completed}/> &nbsp;
        <span className = {
          todo.completed === true ? "line-through" : ""
        }>
        {todo.text} &nbsp;

        </span>
        </div>
      <button
      onClick={() => onDelete(todo.id)}
      className = "delete-btn"
      > ❌</button>
      </div>
    </>
  )
}

export default TodoItem
