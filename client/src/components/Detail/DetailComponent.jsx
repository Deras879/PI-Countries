import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();

  const [country, setCountry] = useState();

  useEffect(() => {
    {
    }
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      if (data.id) {
        setCountry(data);
      } else {
        window.alert("No hay pais con ese ID");
      }
    });
    return setCountry(null);
  }, [id]);
  return (
    <div>
      {country ? (
        <div>
          <div>
            <h1>{country.name}</h1>
            <h1>ID: {country.id}</h1>
            <img src={country.image} alt="" />
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.subRegion}</p>
            <p>
              Area: {country.area} kms<sup>2</sup>
            </p>
          </div>
        </div>
      ) : (
        "Cargando..."
      )}
    </div>
  );
}

export default Detail;
