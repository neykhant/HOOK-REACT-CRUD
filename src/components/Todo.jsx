import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  //Events
  const handleDelete = () => {
    // console.log(todo)
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={todo.completed ? "todo-item completed" : "todo-item"}>{todo.text}</li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
