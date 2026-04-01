import { useContext } from "react"
import TodoContext from "../context/TodoContext"

function TodoInput() {

  const storedValues = useContext(TodoContext);
  const {addTodo} = storedValues;
  const {addInput} = storedValues;
  const {value} = storedValues;
  const {onkeyboardBtnDown} = storedValues;
  const {editId} = storedValues;
  return (

    <div className = "todo-input">
      <input type="text"
      onKeyDown = {onkeyboardBtnDown}
       value={value}
       onChange={addInput}
       placeholder = "Add a new task..."
      /> &nbsp;
      <button
      className='border-4 border-black'
      onClick={addTodo}
      disabled = {value === ""}
    >
    {
      (editId != null) ? "Update" : "Add"
    }
    </button>
    </div>
  )
}

export default TodoInput
