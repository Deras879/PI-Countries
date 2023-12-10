import React from "react";
import { Link } from "react-router-dom";
import Countries from "../../components/Countries/Countries";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";

function Home() {
  const [countriesData, setCountriesData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/countries");
  //       setCountriesData(response.data); // Guardar los datos obtenidos en el estado
  //     } catch (error) {
  //       console.error("Error fetching countries:", error);
  //     }
  //   };

  //   fetchData(); // Llamar a la función para obtener los datos cuando el componente se monte
  // }, []);

  const allCountries = useSelector((state) => state.allCountries);
  const searchCountries = useSelector((state) => state.searchCountries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {}, [searchCountries]);

  return (
    <div>
      <h1>Este es el home</h1>
      <Countries countries={searchCountries} />
      <Link to="/Form">
        <button>go Form</button>
      </Link>
    </div>
  );
}

export default Home;
