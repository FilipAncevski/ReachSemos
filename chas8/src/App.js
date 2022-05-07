import React, { useEffect, useState } from "react";
import { About } from "./components/Abouts";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Child } from "./components/Child";
import { ClassComponent } from "./components/ClassComponent";
import { NotFound } from "./components/NotFound";
import { Users } from "./components/Users";

export const App = () => {
  const [users, setUsers] = useState([]);

  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="us" element={<Child />} />
        </Route>
        <Route path="/class-component" element={<ClassComponent />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users" element={<Users usersList={users} />} />
      </Routes>
    </div>
  );
};
