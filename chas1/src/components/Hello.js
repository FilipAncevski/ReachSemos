import React from "react";

const Hello = () => {
  return (
    <React.Fragment>
      <h2 style={{ color: "red", backgroundColor: "green" }}>
        Hello Component
      </h2>
    </React.Fragment>
    /* <>
      <h2>Hello Component</h2>
    </> */ //Isto raboti
  );
};

export default Hello;
