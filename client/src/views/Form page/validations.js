const validations = ({
  name,
  difficulty,
  season,
  country_ids,
  duration,
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
  if (!country_ids) {
    errors.country = "El pais es requerido";
  }
  if (!duration) {
    errors.hour = "La sección de hora es requerida";
  }
  if (!continent) {
    errors.continent = "El continente es requerido";
  }

  return errors;
};

export { validations };
