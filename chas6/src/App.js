import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import { Todos } from "./components/Todos";

export const App = () => {
  const [car, setCar] = useState({
    model: "BMW",
    year: 2004,
  });

  const [person, setPerson] = useState({
    firstName: "1",
    lastName: "2",
  });

  const [days, setDays] = useState(["Monday", "Tuesday", "Wednesday"]);

  const [todos, setTodos] = useState([
    { id: 0, text: "Learn React", done: false },
    { id: 1, text: "Eat something", done: false },
    { id: 2, text: "Go to Sleep", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log(person);
  }, [person]);

  function newCar() {
    setCar({
      ...car,
      year: 2020,
    });
  }

  function addDays() {
    setDays([[...days, "Thursday"]]);
  }

  function addNewTodo() {
    if (newTodo.trim() !== "") {
      let newObject = {
        id: todos.length,
        text: newTodo,
        done: false,
      };
      setTodos([...todos, newObject]);
      setNewTodo("");
    } else {
      alert("No value");
    }
  }

  function markTodoAsDone(todo) {
    setTodos([
      ...todos.map((item) =>
        item.id === todo.id
          ? { id: item.id, text: item.text, done: !item.done }
          : item
      ),
    ]);
  }

  return (
    <div id="app">
      <input
        type="text"
        placeholder="Enter First Name"
        value={person.firstName}
        onChange={(e) => {
          setPerson({ ...person, firstName: e.target.value });
        }}
      />

      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Last Name"
        value={person.lastName}
        onChange={(e) => {
          setPerson({ ...person, lastName: e.target.value });
        }}
      />
      <h2>Car:</h2>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <button onClick={newCar}>Buy new Car</button>
      <ul>
        {days.map((day, i) => {
          return <li key={i}>{day}</li>;
        })}
      </ul>
      <button onClick={addDays}>Add new day</button>
      <br />
      <br />
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="Enter New Todo"
      />
      <button onClick={addNewTodo}>Add New Todo</button>
      <Todos listOfTodos={todos} onChange={markTodoAsDone} />
    </div>
  );
};
