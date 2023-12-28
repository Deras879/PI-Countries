import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities } from "../../redux/actions";

const Activities = () => {
  const Activities = useSelector((state) => state.Activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <div>
      <h1></h1>
      {Activities.map((activity) => {
        return (
          <div key={activity.id}>
            <h1>Nombre: {activity.name}</h1>
            <h1>Temporada: {activity.season}</h1>
            <h1>Dificultad: {activity.difficulty}</h1>
            <h1>Duración: {activity.duration} Horas</h1>
            <h1>
              Paises:
              {activity.Countries.map((country, index) => {
                return (
                  <span key={country.id}>
                    {country.name}
                    {index !== activity.Countries.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
