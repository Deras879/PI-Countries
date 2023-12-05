import { useState } from "react";
import "./App.css";
import Landing from "./views/Landing page/Landing";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./views/Home page/Home";
import Form from "./views/Form page/Form";
import Detail from "./views/Detail page/Detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
