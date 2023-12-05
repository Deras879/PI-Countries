import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Este es el Detail page de {id}</h1>
    </div>
  );
}

export default Detail;
