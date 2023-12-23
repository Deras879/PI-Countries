const validations = ({
  name,
  difficulty,
  season,
  country,
  hour,
  continent,
}) => {
  const errors = {};

  if (!name) {
    errors.name = "El nombre es requerido";
  }
  if (!difficulty) {
    errors.difficulty = "La dificultad es requerida";
  }
  if (!season) {
    errors.season = "La temporada es requerida";
  }
  if (!country) {
    errors.country = "El pais es requerido";
  }
  if (!hour) {
    errors.hour = "La sección de hora es requerida";
  }
  if (!continent) {
    errors.continent = "El continente es requerido";
  }

  console.log({
    name,
    difficulty,
    season,
    country,
    hour,
    continent,
  });
  return errors;
};

export { validations };
