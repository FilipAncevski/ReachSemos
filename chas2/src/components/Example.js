import React from "react";

export const Example = ({ ime, prezime, age }) => {
  return (
    <div id="example">
      <h2>Example</h2>
      <p> {ime} </p>
      <p> {prezime} </p>
      <p> {age} </p>
    </div>
  );
};
