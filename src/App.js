import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";

const App = () => {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useeffetc once time
  useEffect(() => {
    getLocalStorage();
  }, [])

  //USEEFFECT run every time
  useEffect(() =>{
    filterHandler();
    saveLocalStorage();
  }, [todos, status])


//functions
const filterHandler = () =>{
  switch(status){
    case "completed":
      setFilteredTodos(todos.filter( todo => todo.completed === true));
      break;
    case "uncompleted":
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
}

//save local
const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

//get local
const getLocalStorage = () => {
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos", JSON.stringify([]));
  }else{
    const todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
}

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
};

export default App;
