import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./DetailComponent.module.css";

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
    <div className={style.majorContainer}>
      {country ? (
        <div className={style.container}>
          <div className={style.details1}>
            <h1>Nombre: {country.name}</h1>
            <h1>ID: {country.id}</h1>
          </div>
          <img src={country.image} className={style.img} />
          <div className={style.details2}>
            <p className={style.p}>Capital: {country.capital}</p>
            <p className={style.p}>Población: {country.population}</p>
            <p className={style.p}>Región: {country.subRegion}</p>
            <p className={style.p}>
              Área: {country.area} kms<sup>2</sup>
            </p>
          </div>
        </div>
      ) : (
        <h1>"Cargando..."</h1>
      )}
    </div>
  );
}

export default Detail;
