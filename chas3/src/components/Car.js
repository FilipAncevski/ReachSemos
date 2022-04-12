import React from "react";
import PropTypes from "prop-types";

export const Car = ({ cars, datum }) => {
  return (
    <div id="car">
      <h2>Car</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Naselba</th>
            <th>Ulica</th>
            <th>Registracija</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => {
            return (
              <tr key={i}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.plates.town.naselba}</td>
                <td>{car.plates.town.ulica}</td>
                <td>{car.plates.oznaka}</td>
                <td>{datum}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Car.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  datum: PropTypes.string,
};
