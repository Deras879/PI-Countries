const { Activity, Country } = require("../db");

const postActivity = async (activity, country_ids) => {
  const { name, difficulty, season, duration } = activity;
  if (!name || !difficulty || !season || !country_ids) {
    throw new Error("Falan datos para crear la actividad!");
  }
  try {
    const countries = await Country.findAll({
      where: {
        id: country_ids,
      },
    });

    if (countries.length !== country_ids.length) {
      throw new Error("No se encontraron todos los países proporcionados");
    }

    const newActivity = await Activity.create(activity);
    await newActivity.addCountries(countries);
    const createdActivity = newActivity.dataValues;

    return createdActivity;
  } catch (error) {
    throw new Error("Error al crear la actividad: " + error.message);
  }
};

module.exports = postActivity;
