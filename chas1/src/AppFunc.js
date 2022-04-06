import React from "react";
import { Hello } from "./components/Hello";
import "./css/AppFunc.css";
import { Filip } from "./components/Filip";

function AppFunc() {
  return (
    <div className="filip" id="app-func">
      <h2>Functional Component Text</h2>
      <Hello />
      <p>{5 + 3}</p>
      <Filip />
    </div>
  );
}

export default AppFunc;
