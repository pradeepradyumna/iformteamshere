import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todolist";
import List from "./components/List";
import Extras from "./components/Extras";
import Message from "./components/Message";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState("");
  const listCollection = [];

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    setTotal(e.target.value);
  };

  const numberOfPplInTeam = Math.floor(todos.length / total);
  const extraPplInTeam = todos.length % total;

  var startIndex = 0;
  var endIndex = numberOfPplInTeam;

  var randomTodos = [];
  randomTodos.push(todos);
  randomTodos = todos.sort(() => Math.random() - 0.5);

  var extrasCompo = "";
  if (extraPplInTeam > 0)
    extrasCompo = (
      <Extras
        key={`key-${extraPplInTeam}`}
        name="Extras"
        items={randomTodos.slice(-extraPplInTeam)}
      />
    );

  if (total > randomTodos.length)
    extrasCompo = (
      <Message text="Oops! The number of teams you want is more than the number of participants you have" />
    );

  for (let i = 1; i <= total; i++) {
    if (total > randomTodos.length) {
      console.log("Team count cannot be more than participants");
      break;
    }

    listCollection.push(
      <List
        key={`key-${i}`}
        name={`Team ${i}`}
        todos={randomTodos.slice(startIndex, endIndex)}
      />
    );
    startIndex = endIndex;
    endIndex = startIndex + numberOfPplInTeam;
  }

  // var shuffledCompo;
  // if (todos.length > 0)
  //   shuffledCompo = <Shuffled name="Participants Shuffled" todos={todos} />;

  const teamsSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header>
        <h1>I form TEAMS here</h1>
      </header>
      <div className="float-container">
        <div className="float-child">
          <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
          />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
        {/* {shuffledCompo} */}
        <div className="float-child">
          <form onSubmit={teamsSubmitHandler}>
            <input
              value={total}
              type="text"
              className="todo-input"
              onChange={inputChangeHandler}
              placeholder="How many teams?"
            />
          </form>
          {listCollection}
          {extrasCompo}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
