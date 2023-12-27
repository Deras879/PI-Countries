import React from "react";
import axios from "axios";
import Country from "../Country/Country";
import style from "./Countries.module.css";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

function Countries(props) {
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalCountries = props.countries.length;

  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;

  return (
    <div className={style.container}>
      {props.countries
        .map((country) => {
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
        })
        .slice(firstIndex, lastIndex)}
      <Pagination
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCountries={totalCountries}
      />
    </div>
  );
}

export default Countries;
