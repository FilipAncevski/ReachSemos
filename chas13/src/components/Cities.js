import React, { useState } from "react";
import "../css/Cities.css";
import { api } from "../constants/apiConstants";

export const Cities = () => {
  const [city, setCity] = useState("");

  function searchWeather() {
    fetch(`${api.root}/weather?q=${city}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => alert(err));
  }

  return (
    <div className="cities">
      <div className="search-box">
        <input
          className="search-bar"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button onClick={searchWeather} className="search-button">
        Search
      </button>
    </div>
  );
};
