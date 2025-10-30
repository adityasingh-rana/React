import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

  let [todos,setTodos]=useState([{ task: "Sample Task", id: uuidv4()}]);
  let [newTodo,setNewTodo]=useState("");

  let deleteTask = (id) => {
   setTodos((prevTodos) => {
    return prevTodos.filter((todo) => todo.id != id)
   });
  }

  let Add = () => {
    setTodos((prevTodos) => {
      return [...prevTodos,{task: newTodo, id: uuidv4()}]
    });
    setNewTodo("");
  }

  let updateValue = (event) => {
    setNewTodo(event.target.value);
  }

  let upperCase = () => {
    setTodos((prevTodos) => (prevTodos.map(
      (todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase()
        }
      }
    )));
  }

  let upperCaseSingle = (id) => {
    setTodos((prevTodos) => (prevTodos.map(
      (todo) => {
        if(todo.id === id){
          return {
            ...todo,
            task: todo.task.toUpperCase()
          }
        }else{
          return todo;
        }
      })));
  }

  return (
    <>
      <div className="input">
        <input type="text" placeholder="Add a Task" value={newTodo} onChange={updateValue} onKeyDown={(event) => {
          if(event.key==="Enter"){
            Add();
          }
        }}/> &nbsp; <button onClick={Add} style={{backgroundColor: "green"}}>Add</button>
      </div>
      <div className="todoList" >
        <h3>
          You have to do following tasks:
        </h3>
        <div className="tasks" style={{marginTop: "20px", height: "300px", overflowY: "scroll", backgroundColor: "rgba(255,255,155,0.3)", padding: "10px", borderRadius: "5px", color: "black",}}>
        <ul>
          {
            todos.map((todo)=>(
              <>
              <li key={todo.id}>
                {todo.task} &nbsp;
                <button style={{backgroundColor: "red",}} onClick={() => deleteTask(todo.id)} >Delete</button> &nbsp;
                <button style={{backgroundColor: "orange", color: "black"}} onClick={() => upperCaseSingle(todo.id)}>Show In Uppercase</button>
              </li><br/>
              </>
            ))
          }
        </ul></div>
      </div><br/>
        <button onClick={upperCase} style={{backgroundColor: "yellow", color: "black"}}>UpperCase All</button>
    </>
  );
}