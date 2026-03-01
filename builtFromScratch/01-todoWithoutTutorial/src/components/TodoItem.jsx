import React from 'react'

function TodoItem({todo,onDelete,toggleCheck}) {

  return (
    <>
      <li >
        <input type="checkbox" onChange={() => toggleCheck(todo.id)} checked = {todo.completed}/> &nbsp;
        <span className = {
          todo.completed === true ? "line-through" : ""
        }>
        {todo.text} &nbsp;

        </span>
      <button className='border-1 border-black m-2'
      onClick={() => onDelete(todo.id)}
      >Delete</button>
      </li>
    </>
  )
}

export default TodoItem
