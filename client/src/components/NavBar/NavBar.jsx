import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getCountries } from "../../redux/actions";
import style from "./Navbar.module.css";

function NavBar() {
  const location = useLocation();
  const rutaValida = /^\/(Home|Form|Activities|(Detail\/\w+))$/;

  if (!rutaValida.test(location.pathname)) {
    return null;
  }

  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    let value = event.target.value;
    if (!value) {
      dispatch(getCountries());
    }
    setInput(value);
    onSearch(value);
  };
  const onSearch = (id) => {
    dispatch(getCountry(id));
  };
  return (
    <div className={style.container}>
      <div>
        <Link to="/Home">
          <button className={style.button}>Home</button>
        </Link>
        <Link to="/Activities">
          <button className={style.button}>Activities</button>
        </Link>
        <Link to="/Form">
          <button className={style.button}>Create Activity</button>
        </Link>
      </div>
      <div className={style.inputBox}>
        <input type="text" onChange={handleChange} />
        <span>Id o nombre del pais</span>
      </div>
    </div>
  );
}

export default NavBar;
