import React from "react";

function ShuffledList({ name, todos }) {
  return (
    <div className="todo">
      <div className="todo-item">
        <h4>{name}</h4>

        <ul className="">
          {todos.map((todo) => (
            <li key={Math.random() * 1000}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShuffledList;
