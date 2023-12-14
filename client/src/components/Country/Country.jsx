import React from "react";
import { Link } from "react-router-dom";
import style from "./Country.module.css";

function Country(props) {
  return (
    <div className={style.container}>
      <Link to={`/Detail/${props.id}`}>
        <img src={props.img} alt="" className={style.img} />
      </Link>
      <h3>Nombre: {props.name}</h3>
      <h3>Continente: {props.continent}</h3>
    </div>
  );
}

export default Country;
