import React from "react";
import { Link } from "react-router-dom";
import style from "./Country.module.css";

function Country(props) {
  return (
    // <div classNameName={style.container}>
    //   <Link to={`/Detail/${props.id}`}>
    //     <img src={props.img} alt="" classNameName={style.img} />
    //   </Link>
    //   <h3>Nombre: {props.name}</h3>
    //   <h3>Continente: {props.continent}</h3>
    // </div>
    <Link to={`/Detail/${props.id}`} style={{ textDecoration: "none" }}>
      <div className={style.card}>
        <svg
          className={style.img}
          style={{ backgroundImage: `url(${props.img})` }}
        ></svg>
        <div className={style.textBox}>
          {" "}
          <p className={style.name}>{props.name}</p>
          <span>{props.capital}</span>
          <p className={style.continent}>{props.continent}</p>
        </div>
      </div>
    </Link>
  );
}

export default Country;
