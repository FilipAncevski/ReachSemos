import React, { useState } from "react";
import { ClassComponent } from "./components/ClassComponent";

export const App = () => {
  const [promenliva1, setPromenliva1] = useState("Vrednost 1");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function vnesenInput(event) {
    setUsername(event.target.value);
  }

  function passwordInput(event) {
    setPassword(event.target.value);
  }
  // function smeniVrednost() {
  //   setPromenliva1("Vrednost 2");
  // }

  return (
    <div id="app">
      <p>{promenliva1}</p>
      <button
        onClick={() => {
          setPromenliva1("Vrednost 2");
        }}
      >
        Smeni Vrednost
      </button>
      <h1>Hello</h1>
      <ClassComponent />
      <hr />
      <input
        type="text"
        placeholder="Enter a username"
        value={username}
        onChange={vnesenInput}
      />
      <p>{username}</p>
      <input
        type="text"
        placeholder="Enter a password"
        value={password}
        onChange={passwordInput}
      />
      <p>{password}</p>
    </div>
  );
};
