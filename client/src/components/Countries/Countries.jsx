import React from "react";
import axios from "axios";
import Country from "../Country/Country";
import style from "./Countries.module.css";

function Countries(props) {
  return (
    <div className={style.container}>
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
