import React from "react";

function form({ todos, setTodos, inputText, setInputText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") return;

    setTodos([
      ...todos,
      {
        text: inputText,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };
  return (
    <form onSubmit={submitTodoHandler}>
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        placeholder="Enter participant's name here"
      />

      {/* <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button> */}
    </form>
  );
}

export default form;
