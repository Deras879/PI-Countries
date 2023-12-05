import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Este es el home</h1>
      <Link to="/Form">
        <button>go Form</button>
      </Link>
    </div>
  );
}

export default Home;
