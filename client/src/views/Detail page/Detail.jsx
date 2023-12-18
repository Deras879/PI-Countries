import React from "react";
import { useParams } from "react-router-dom";
import DetailComponent from "../../components/Detail/DetailComponent";
import style from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  return (
    <div>
      <DetailComponent />
    </div>
  );
}

export default Detail;
