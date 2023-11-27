const { Activity, Country } = require("../db");

const postActivity = async (activity, country_id) => {
  const { id, name, difficulty, season, duration } = activity;
  if (!id || !name || !difficulty || !season || !country_id) {
    throw new Error("Falan datos para crear la actividad!");
  }
  try {
    const country = await Country.findByPk(country_id);

    if (country) {
      const newActivity = await Activity.create(activity);
      await newActivity.addCountry(country);
      const createdActivity = newActivity.dataValues;

      return createdActivity;
    } else {
      throw new Error("No se encontró el país con el ID proporcionado");
    }
  } catch (error) {
    throw new Error("Error al crear la actividad: " + error.message);
  }
};

module.exports = postActivity;
