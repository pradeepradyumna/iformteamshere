import React from "react";

function todo({ text, todo, todos, setTodos }) {
  const deleteHandler = (e) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
}

export default todo;
