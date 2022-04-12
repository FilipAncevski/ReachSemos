import React from "react";
import { Users } from "./components/Users";
import { Comments } from "./components/Comments";
import { Car } from "./components/Car";

const user1 = {
  ime: "Filip",
  username: "filipanc",
  mail: "filipanchevski@gmail.com",
};

const numId = 123;

let comments = [
  {
    author: "Filip",
    content: "This is my first comment",
  },
  {
    author: "Pero",
    content: "Second comment",
  },
  {
    author: "Simon",
    content: "Third comment",
  },
];

const cifra = 5;

let register = [
  {
    town: {
      naselba: "Radisani",
      ulica: "Nesto",
    },
    oznaka: "SK-0000-AB",
  },
  {
    town: {
      naselba: "NestoPr2",
      ulica: "UlicaPr2",
    },
    oznaka: "SK-5555-AB",
  },
  {
    town: {
      naselba: "NestoPr3",
      ulica: "UlicaPr3",
    },
    oznaka: "SK-4444-AB",
  },
];

let cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    year: 2003,
    plates: register[0],
  },
  {
    brand: "Opel",
    model: "Corsa",
    year: 2011,
    plates: register[1],
  },
  {
    brand: "Zastava",
    model: "101",
    year: 1987,
    plates: register[2],
  },
];

let data = "12/14/2022";

export const App = () => {
  return (
    <div id="app">
      <h2>App</h2>
      <Users korisnik1={user1} korisnik2={numId} />
      <Comments listOfComments={comments} cifra={cifra} />
      <Car cars={cars} datum={data} />
    </div>
  );
};
