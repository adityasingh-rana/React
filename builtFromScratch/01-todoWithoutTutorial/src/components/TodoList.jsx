import TodoItem from './TodoItem'

function TodoList({todos,onDelete,toggleCheck}) {
  return (
    <div className = "todo-list-wrapper">
      {
        todos.map((todo) => (
          <TodoItem key={todo.id} todo = {todo} onDelete={onDelete} toggleCheck={ toggleCheck} />
        ))
      }
    </div>
  )
}

export default TodoList;

