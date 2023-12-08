import React from "react";
import axios from "axios";
import Country from "../Country/Country";

function Countries(props) {
  return (
    <div>
      {props.countries.map((country) => {
        return (
          <Country
            key={country.id}
            name={country.name}
            continent={country.continent}
            img={country.image}
            capital={country.capital}
            id={country.id}
          />
        );
      })}
    </div>
  );
}

export default Countries;
