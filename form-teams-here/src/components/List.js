import React from "react";
import "../App.css";

function List({ name, todos }) {
  return (
    <div className="card-column">
      {/* <div className="card"> */}
      <div className="notebook-editable">
        <h4 className="notebook-editable-p">{name}</h4>
        <ul>
          {todos.map((todo) => (
            <li key={Math.random() * 1000}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
