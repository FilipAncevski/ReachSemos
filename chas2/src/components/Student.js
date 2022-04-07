import React from "react";

export const Student = (props) => {
  console.log(props);
  return (
    <div id="student">
      <p>Name:{props.student.name}</p>
      <p>Lastname: {props.student.lastName}</p>
      <p>College:{props.student.college}</p>
    </div>
  );
};
