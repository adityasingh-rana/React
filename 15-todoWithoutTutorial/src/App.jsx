import React, { useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState } from 'react'
import './App.css';

function App() {
  const [editId,setEditId] = useState(null);
  const [inputVal,setInputval] = useState("");
  const [todos,setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : []
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  const handleInput = (e) => {
    setInputval(e.target.value)
  }
  const addTask = () => {
    handleAddInput(inputVal);
    setInputval("");
  }
  const updateTask = () => {
    const updateTodos = todos.map((todo) => {
      return (todo.id === editId) ? {... todo, text: inputVal} : todo
    });
    setTodos(updateTodos);
    setInputval("");
    setEditId(null);
  }
  const handleKeydown = (e) => {
    if(e.key === "Enter") addTask(inputVal);
    if (editId != null && e.key === "Enter") updateTask();
  }


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

  const handleEdit = (id) => {
    todos.map((todo) => {
      if(todo.id == id) {
        setInputval(todo.text);
        setEditId(id);
      }
    })
  }

  const onClick = ( ) => {
    if(editId == null){
      addTask();
    }else{
      updateTask();
    }
  }

  return (
    <div className = "main-box">
    <div className = 'todo-container'>
      <TodoInput
        editId = {editId}
        handleClick = {onClick}
        onChange = {handleInput}
        onKeyDown = {handleKeydown}
        value = {inputVal}
      />
    </div>
      <TodoList
        todos= {todos}
        onDelete = {handleDelete}
        onEdit = {handleEdit}
        toggleCheck = {handleToggle}
        editId = {editId}
      />
    </div>
  )
}

export default App
