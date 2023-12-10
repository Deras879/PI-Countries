import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getCountries } from "../../redux/actions";

function NavBar() {
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
    <div>
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <Link to="/Activities">
        <button>Activities</button>
      </Link>
      <Link to="/Form">
        <button>Create Activity</button>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Id o nombre del pais"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default NavBar;
