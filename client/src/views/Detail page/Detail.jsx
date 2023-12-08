import React from "react";
import { useParams } from "react-router-dom";
import DetailComponent from "../../components/Detail/DetailComponent";

function Detail() {
  const { id } = useParams();
  return (
    <div>
      <DetailComponent />
      <h1>Este es el Detail page de {id}</h1>
    </div>
  );
}

export default Detail;
