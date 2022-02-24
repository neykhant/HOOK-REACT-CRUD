import React, { useEffect } from "react";

const Form = ({ inputText, setInputText, setTodos, todos, setStatus, editInput, setEditInput }) => {
  //you can type js code and function

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

//update Todo
const updateTodo = (text, id) =>{
  const result = todos.map(el => el.id === id ? {text, id} : el );
  setTodos(result);
  setEditInput("");
}

//useEffect
useEffect(()=>{
if(editInput){
  setInputText(editInput.text)
}else{
  setInputText("");
}
}, [setInputText, editInput])


//submit form
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(!editInput){
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }else{
      // console.log("edit")
      updateTodo(inputText, editInput.id)
    }
  };

  const statusHandler = (e) => {
    // console.log(e.target.value)
    setStatus(e.target.value)
  }


  return (
    <form action="">
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">UnCompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
