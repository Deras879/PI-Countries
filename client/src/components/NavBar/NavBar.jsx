import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
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
    </div>
  );
}

export default NavBar;
