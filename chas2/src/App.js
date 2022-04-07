import React from "react";
import { Welcome } from "./components/Welcome";
import { Comments } from "./components/Comments";
import { Student } from "./components/Student";
import { StudentClass } from "./components/StudentClass";
import { FruitList } from "./components/FruitList";
import { Example } from "./components/Example";

var ime = "Filip";
var lastname = "Anchevski";
var age = 23;
var hasComments = true;
var student = {
  name: "Filip",
  lastName: "Anchevski",
  college: "Ekonomski",
};

let listaNaOvosje = ["apple", "orange", "banana"];

export function App() {
  return (
    <div id="app">
      <StudentClass student={student} />
      <hr />
      <Welcome ime={"Petar"} lastName={"Perovski"} godini={15} />
      <hr />
      <h2>Some Content</h2>
      <hr />
      <Welcome ime={ime} lastName={lastname} godini={age} />
      <hr />
      <Comments hasComments={hasComments} multipleComments={true} />
      <hr />
      <Student student={student} />
      <hr />
      <FruitList listOffFruits={listaNaOvosje} />
      <hr />
      <Example ime={ime} prezime={lastname} age={age} />
    </div>
  );
}
