import TodoItem from './TodoItem'

function TodoList({todos,onDelete,toggleCheck, onEdit, editId}) {
  return (
    <div className = "todo-list-wrapper">
      {
        todos.map((todo) => (
          <TodoItem key={todo.id} todo = {todo} onDelete={onDelete} toggleCheck={ toggleCheck} onEdit = {onEdit} editId = {editId}/>
        ))
      }
    </div>
  )
}

export default TodoList;

