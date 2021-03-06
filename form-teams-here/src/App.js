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
  const [teamCount, setTeamCount] = useState("");
  const [memberCount, setMemberCount] = useState("");
  const [extrasCount, setExtrasCount] = useState(0);
  const listCollection = [];

  useEffect(() => {
    setExtrasCount(todos.length - teamCount * memberCount);
  }, [todos]);

  const inputTeamCountChangeHandler = (e) => {
    console.log(e.target.value);

    if (e.target.value === "" || e.target.value == 0) {
      setMemberCount("");
      setTeamCount("");
      setExtrasCount("");
      return;
    }

    if (!(e.target.value > 0) && !(todos.length > 0)) return;

    var count = Math.floor(e.target.value);
    if (!isFinite(count)) count = 0;

    setTeamCount(count);

    var tempMemberCount = Math.floor(todos.length / count);

    setMemberCount(tempMemberCount);
    // setExtrasCount(todos.length % count);
    setExtrasCount(todos.length - count * tempMemberCount); // BODMAS
  };

  const inputMemberCountChangeHandler = (e) => {
    console.log(e.target.value);

    if (e.target.value === "" || e.target.value == 0) {
      setTeamCount("");
      setMemberCount("");
      setExtrasCount("");
      return;
    }

    if (!(e.target.value > 0) && !(todos.length > 0)) return;

    var count = Math.floor(e.target.value);
    if (!isFinite(count)) count = 0;

    var tempTeamCount = Math.floor(todos.length / count);

    setMemberCount(count);
    setTeamCount(tempTeamCount);

    // var tempExtrasCount = Math.floor(todos.length % tempTeamCount);

    // if (tempTeamCount == 1) tempExtrasCount = Math.floor(todos.length - count);

    // setExtrasCount(tempExtrasCount);

    setExtrasCount(todos.length - tempTeamCount * count);
  };

  var startIndex = 0;
  var endIndex = memberCount;

  var randomTodos = [];
  // randomTodos.push(todos);
  randomTodos = todos.sort(() => Math.random() - 0.5);

  var extrasCompo = "";

  if (extrasCount > 0 && teamCount > 0 && memberCount > 0)
    extrasCompo = (
      <Extras
        key={`key-${extrasCount}`}
        name="Extras"
        items={randomTodos.slice(-extrasCount)}
      />
    );

  if (randomTodos.length == 0 && (memberCount > 0 || teamCount > 0))
    extrasCompo = <Message text="Oops! You don't have any participants yet" />;

  if (teamCount > randomTodos.length && randomTodos.length)
    extrasCompo = (
      <Message text="Oops! The number of teams you want is more than the total number of participants you have" />
    );

  if (memberCount > randomTodos.length && randomTodos.length)
    extrasCompo = (
      <Message text="Oops! The number of participants per team you want is more than the total number of participants you have" />
    );

  for (let i = 1; i <= teamCount; i++) {
    if (teamCount > randomTodos.length) {
      console.log("Team count cannot be more than participants");
      break;
    }

    if (memberCount > randomTodos.length) {
      console.log("Member count cannot be more than number of participants");
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
    endIndex = startIndex + memberCount;
  }

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

        <div className="float-child">
          <form onSubmit={teamsSubmitHandler}>
            <div className="float-child">
              <input
                value={teamCount}
                type="text"
                className="todo-input"
                onChange={inputTeamCountChangeHandler}
                placeholder="How many teams?"
              />
            </div>
            <div className="float-child">
              <input
                value={memberCount}
                type="text"
                className="todo-input"
                onChange={inputMemberCountChangeHandler}
                placeholder="How many participants per team?"
              />
            </div>
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
