import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul id="nav">
      <li>
        <Link to="/gallery">Galery</Link>
      </li>
    </ul>
  );
};
