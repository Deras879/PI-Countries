import React from "react";
import { Link } from "react-router-dom";

function Country(props) {
  return (
    <div>
      <Link to={`/Detail/${props.id}`}>
        <img src={props.img} alt="" />
      </Link>
      <h3>{props.name}</h3>
    </div>
  );
}

export default Country;
