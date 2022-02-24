import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, editInput, setEditInput }) => {
    // console.log("first", filteredTodos)
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
            //   text={todo.text}
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              editInput={editInput}
              setEditInput={setEditInput}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
