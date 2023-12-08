import React from "react";
import { Link } from "react-router-dom";
import Countries from "../../components/Countries/Countries";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/countries");
        setCountriesData(response.data); // Guardar los datos obtenidos en el estado
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData(); // Llamar a la función para obtener los datos cuando el componente se monte
  }, []);
  return (
    <div>
      <h1>Este es el home</h1>
      <Countries countries={countriesData} />
      <Link to="/Form">
        <button>go Form</button>
      </Link>
    </div>
  );
}

export default Home;
