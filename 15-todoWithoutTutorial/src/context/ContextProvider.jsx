import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

 const ContextProvider = ({children}) => {
  const [editId,setEditId] = useState(null);
  const [inputVal,setInputVal] = useState("");
  const [todos,setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    if (saved ) {
      const prased = JSON.parse(saved);
      if ( prased.length !== 0) return prased;
    }
    return [{id: Date.now(), text: "Demo", completed: false}];
  });

  const [filter, setFilter] = useState("all");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  const addInput = (e) => {
    setInputVal(e.target.value)
  }
  const addTask = () => {
    handleAddInput(inputVal);
    setInputVal("");
  }
  const updateTask = () => {
    const updateTodos = todos.map((todo) => {
      return (todo.id === editId) ? {... todo, text: inputVal} : todo
    });
    setTodos(updateTodos);
    setInputVal("");
    setEditId(null);
  }
  const onkeyboardBtnDown = (e) => {
    if (e.key === "Enter") {
    if (editId != null) {
      updateTask();
    } else {
      addTask();
    }
  }
  }


  const handleAddInput = (text) => {
    const trimmedTxt = text.trim();
    if (trimmedTxt === "") return;
    const newTodo = {
      id: Date.now(),
      text: trimmedTxt,
      completed: false,
    }
    setTodos(prev => [... prev,newTodo]);
  }

  const onDelete = (id) => {
    {
      setTodos(
        todos.filter((todo) =>(todo.id !== id))
      )
    }
  }

    const toggleCheck = (id) => {
      setTodos(
        todos.map((todo) => (
          todo.id === id ? {... todo, completed: !todo.completed}: todo
        ))
      );
  }

  const onEdit = (id) => {
    const todo = todos.find( todo => todo.id === id);
    if(todo) {
      setInputVal(todo.text);
      setEditId(id);
    }
  }

  const addTodo = ( ) => {
    if(editId == null){
      addTask();
    }else{
      updateTask();
    }
  }

  const filterAll = () => {
    setFilter("all");
  }
   const filterCompleted = () => {
    setFilter("completed");
  }
   const filterPending = () => {
    setFilter("pending");
  }

  const filteredTodos = todos.filter(todo => {
  if (filter === "completed") return todo.completed;
  if (filter === "pending") return !todo.completed;
  return true;
  });


  return (
    <TodoContext.Provider value = {{
      addTodo,
      addInput,
      value: inputVal,
      onkeyboardBtnDown,
      editId,
      filterAll, filterCompleted, filterPending, crrState: filter,
      todos: filteredTodos,
      onDelete,
      toggleCheck,
      onEdit
      }}>
      {children}
    </TodoContext.Provider>
  );
 }

 export default ContextProvider;