import React from "react";
import Team from "./team";

function teamlist({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Team participant={participant} />
        ))}
      </ul>
    </div>
  );
}

export default teamlist;
