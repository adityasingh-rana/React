import React from 'react'
import { useState } from 'react'

function TodoInput({onAdd}) {
  const [inputVal,setInputval] = useState("");
  const handleInput = (e) => {
    setInputval(e.target.value)
  }
  const addTask = () => {
    onAdd(inputVal);
    setInputval("");
  }
  return (
    <div className = "todo-input">
      <input type="text"
       value={inputVal}
       onChange={handleInput}
       placeholder = "Add a new task..."
      />&nbsp;
      <button className='border-4 border-black' onClick={addTask}>ADD</button>
    </div>
  )
}

export default TodoInput
