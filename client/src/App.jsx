import { useState } from "react";
import "./App.css";
import Landing from "./views/Landing page/Landing";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./views/Home page/Home";
import Form from "./views/Form page/Form";
import Detail from "./views/Detail page/Detail";
import NavBar from "./components/NavBar/NavBar";
import Error404 from "./views/Error 404/Error404";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
