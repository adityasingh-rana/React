import React, { useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {
  const [todos,setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : []
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  const handleAddInput = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    }
    setTodos(prev => [... prev,newTodo]);
  }


  const handleDelete = (id) => {
    {
      setTodos(() => (
        todos.filter((todo) =>(todo.id !== id))
      ))
    }
  }

    const handleToggle = (id) => {
      setTodos(() => (
        todos.map((todo) => (
          todo.id === id ? {... todo, completed: !todo.completed}: todo
        ))
      ))
  }

  return (
    <div>
      <TodoInput onAdd = {handleAddInput} />
      <TodoList
        todos= {todos}
        onDelete = {handleDelete}
        toggleCheck = {handleToggle}
      />
    </div>
  )
}

export default App
