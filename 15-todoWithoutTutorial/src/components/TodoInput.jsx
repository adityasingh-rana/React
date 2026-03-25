function TodoInput({handleClick, onChange, value, onKeyDown, editId}) {
  return (
    <div className = "todo-input">
      <input type="text"
      onKeyDown = {onKeyDown}
       value={value}
       onChange={onChange}
       placeholder = "Add a new task..."
      /> &nbsp;
      <button
      className='border-4 border-black'
      onClick={handleClick}
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
