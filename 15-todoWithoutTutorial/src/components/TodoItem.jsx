import React, { useContext } from 'react';
import '../App.css';
import EditIcon from './EditIcon';
import TodoContext from '../context/TodoContext';

function TodoItem({todo}) {
  const storedValues = useContext(TodoContext);
  const {onDelete} = storedValues;
  const {toggleCheck} = storedValues;
  const {onEdit} = storedValues;
  const {editId} = storedValues;

  return (
    <>
      <div className={`todo-item ${todo.completed ? "completed" : ""}`} >
        <div className='task-left'>
          <input type="checkbox" onChange={() => toggleCheck(todo.id)} checked={todo.completed} /> &nbsp;
          <span className={`
            ${todo.completed === true ? "line-through" : ""}
            ${todo.id === editId ? "bg-amber-200 text-black" : ""}`
          }>
            {todo.text} &nbsp;

          </span>
        </div>
        <div id = "editBtn">
        <button
          onClick = {() => onEdit(todo.id)}
          className = {(editId != null) ? "hidden":"cursor-pointer"}
        >
          <EditIcon></EditIcon>
        </button>
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="delete-btn"
        > ❌</button>
      </div>
    </>
  )
}

export default TodoItem
