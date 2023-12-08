import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();

  const [country, setCountry] = useState();

  useEffect(() => {
    {
      console.log(id);
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
  console.log(country);
  return <div>{country ? <img src={country.image} alt="" /> : null}</div>;
}

export default Detail;
