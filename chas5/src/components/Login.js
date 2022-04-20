import React, { useEffect, useState } from "react";
import { Input } from "./Input";

export const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [fieldType, setFieldType] = useState("password");

  useEffect(() => {
    console.log("Username:", username);
    console.log("Password:", password);
  }, [username, password]);

  function setToggle() {
    setFieldType(fieldType === "password" ? "text" : "password");
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert("Submited form");
  }

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type={fieldType}
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          setToggle={setToggle}
        />
        <button className="action-button">Sign in</button>
      </form>
    </div>
  );
};
