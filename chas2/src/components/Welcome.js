import React from "react";

export function Welcome(props) {
  //   console.log(props);
  return (
    <div className="welcome">
      <p>
        Hi and Welcome to my App, Your name is {props.ime} {props.lastName} Age:
        {props.godini}
      </p>
    </div>
  );
}
