import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Form() {
  const paises = useSelector((state) => state.allCountries);
  const [paisesSeleccionados, setPaisesSeleccionados] = useState([]);
  const [filtro, setFiltro] = useState("");

  const handlePaisSeleccionado = (event) => {
    const paisId = event.target.value;
    let updatedSelection = [...paisesSeleccionados];

    // Si el país ya está seleccionado, se quita de la lista; de lo contrario, se agrega
    if (updatedSelection.includes(paisId)) {
      updatedSelection = updatedSelection.filter((id) => id !== paisId);
    } else {
      updatedSelection.push(paisId);
    }

    // Actualiza el estado local con la lista actualizada de países seleccionados
    setPaisesSeleccionados(updatedSelection);
  };

  const filtrarPaises = () => {
    if (!filtro) {
      return paises; // Si no hay filtro, devolver la lista completa de países
    }

    const filtroMinusculas = filtro.toLowerCase();

    return paises.filter((pais) =>
      pais.nombre.toLowerCase().includes(filtroMinusculas)
    );
  };

  const [hora, setHora] = useState("");
  const [minutos, setMinutos] = useState("");
  const SeccionHora = useState({ hora, minutos, segundos: "00" });
  const handleHoraChange = (event) => {
    console.log("paises", paises);
    setHora(event.target.value);
  };

  const handleMinutosChange = (event) => {
    setMinutos(event.target.value);
  };
  return (
    <div>
      <form action="">
        <div>
          <input type="text" name="name" placeholder="Nombre" />
        </div>

        <label htmlFor="">
          Dificultad
          <select name="" id="">
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
              type="number"
              placeholder="Hora"
              value={hora}
              onChange={handleHoraChange}
              min="0"
              max="23"
            />
            :
            <input
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
            <select name="" id="">
              <option value="">- seleccione temporada -</option>
              <option value="">Verano</option>
              <option value="">Primavera</option>
              <option value="">Otoño</option>
              <option value="">Invierno</option>
            </select>
          </label>
          <div>
            <h2>Selecciona países:</h2>
            <input
              type="text"
              placeholder="Buscar país..."
              onChange={filtrarPaises}
            />
            {filtrarPaises() && filtrarPaises().length > 0 ? (
              filtrarPaises().map((pais) => (
                <div key={pais.id}>
                  <label>
                    <input
                      type="checkbox"
                      value={pais.id}
                      onChange={handlePaisSeleccionado}
                      checked={paisesSeleccionados.includes(pais.id)}
                    />
                    {pais.nombre}
                  </label>
                </div>
              ))
            ) : (
              <p>No se encontraron países</p>
            )}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
