import React from "react";
import Todo from "./todo";

function todolist({ todos, setTodos }) {
  var messageCompo;
  if (todos.length > 0)
    messageCompo = (
      <p className="notebook-editable-p">Participants get shuffled here</p>
    );

  return (
    <div className="todo-container">
      <ul className="notebook-editable-participant">
        {messageCompo}

        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default todolist;
