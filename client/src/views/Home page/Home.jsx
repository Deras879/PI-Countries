import React from "react";
import { Link } from "react-router-dom";
import Countries from "../../components/Countries/Countries";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterCountriesActivity,
  filterCountriesContinent,
  orderCountriesAlf,
  orderCountriesPopulation,
} from "../../redux/actions";
import style from "./Home.module.css";

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

  const handleFilterActivities = (e) => {
    dispatch(filterCountriesActivity(e.target.value));
  };

  const handleFilterContinent = (e) => {
    dispatch(filterCountriesContinent(e.target.value));
    console.log(typeof e.target.value);
  };

  const handleOrderAlf = (e) => {
    dispatch(orderCountriesAlf(e.target.value));
  };

  const handleOrderPop = (e) => {
    dispatch(orderCountriesPopulation(e.target.value));
  };
  return (
    <div className={style.container}>
      <select onChange={handleFilterActivities}>
        Filtrar
        <option value="Todos">- Filtrar -</option>
        <option value="Todos">Todos</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <select onChange={handleFilterContinent}>
        <option value="Todos">- Filtrar Continente -</option>
        <option value="Todos">Todos</option>
        <option value="Asia">Asia</option>
        <option value="Americas">America</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select onChange={handleOrderPop}>
        <option value="none">- Ordenar por Población-</option>
        <option value="ASC">Ascendente</option>
        <option value="DESC">Descendente</option>
      </select>
      <select onChange={handleOrderAlf}>
        <option value="none">- Ordenar Alfabeticamente -</option>
        <option value="ASC">Ascendente</option>
        <option value="DESC">Descendente</option>
      </select>
      <Countries countries={searchCountries} />
    </div>
  );
}

export default Home;
