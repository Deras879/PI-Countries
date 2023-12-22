import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Form() {
  const paises = useSelector((state) => state.allCountries);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: value });
  };

  const [continente, setContinente] = useState("");
  const [paisesContinente, setPaisesContinente] = useState([]);
  const [pais, setPais] = useState("");

  const seleccionContinente = (event) => {
    setContinente(event.target.value);
    setPaisesContinente(
      paises.filter((pais) => pais.continent === event.target.value)
    );

    handleChange(event);
  };

  const seleccionPais = (event) => {
    const opciones = event.target.options;
    let valor = [];
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].selected) {
        valor.push(opciones[i].value);
      }
    }
    setPais(valor);

    setData({ ...data, pais: valor });
  };

  const [season, setSeason] = useState("");
  const seleccionSeason = (event) => {
    setSeason(event.target.value);
    handleChange(event);
  };

  const [dificultad, setDificultad] = useState("");
  const seleccionDificultad = (event) => {
    setDificultad(event.target.value);
    handleChange(event);
  };

  const [hora, setHora] = useState("");
  const [minutos, setMinutos] = useState("");
  const [seccionHora, setSeccionHora] = useState(`${hora}:${minutos}:00`);
  const handleHoraChange = async (event) => {
    await setHora(event.target.value.toString().padStart(2, "0"));
    await setSeccionHora(`${event.target.value}:${minutos}:00`);

    setData({ ...data, seccionHora: `${event.target.value}:${minutos}:00` });
  };

  const handleMinutosChange = async (event) => {
    await setMinutos(event.target.value.toString().padStart(2, "0"));
    await setSeccionHora(`${hora}:${event.target.value}:00`);

    setData({ ...data, seccionHora: `${hora}:${event.target.value}:00` });
  };

  const handleNameChange = (event) => {
    setData({ ...data, name: event.target.value });
  };
  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleNameChange}
          />
        </div>

        <label htmlFor="">
          Dificultad
          <select name="difficulty" id="" onChange={seleccionDificultad}>
            <option value="">Elige una dificultad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <div>
          <label>
            Hora:
            <input
              name="hour"
              type="number"
              placeholder="Hora"
              value={hora}
              onChange={handleHoraChange}
              min="0"
              max="23"
            />
            :
            <input
              name="minutes"
              type="number"
              placeholder="Minutos"
              value={minutos}
              onChange={handleMinutosChange}
              min="0"
              max="59"
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Temporada
            <select name="season" id="" onChange={seleccionSeason}>
              <option value="">- seleccione temporada -</option>
              <option value="Verano">Verano</option>
              <option value="Primavera">Primavera</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
            </select>
          </label>
          <div>
            <label htmlFor="">
              Continente
              <select name="continent" id="" onChange={seleccionContinente}>
                <option value="">- seleccione continente -</option>
                <option value="Americas">América</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="">
              Pais
              <select multiple name="country" id="" onChange={seleccionPais}>
                <option value="">- seleccione pais -</option>
                {paisesContinente.map((pais) => (
                  <option key={pais.id} value={pais.name}>
                    {pais.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
