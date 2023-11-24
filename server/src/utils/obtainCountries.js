// codigo para traer countries de la api a la base de datos

const axios = require("axios");
const { Country } = require("../db");

const createCountries = async () => {
  await axios("http://localhost:5000/countries").then(async (response) => {
    const { data } = response;
    for (const element of data) {
      const {
        name,
        capital,
        population,
        area,
        cca3,
        flags,
        region,
        subregion,
      } = element;
      const { common } = name;
      const { png } = flags;

      let capitalName = "";
      if (Array.isArray(capital) && capital.length > 0) {
        capitalName = capital[0];
      } else {
        continue;
      }

      if (area < 0) {
        continue;
      }

      const country = {
        name: common,
        capital: capitalName,
        image: png,
        population,
        area,
        id: cca3,
        continent: region,
        subRegion: subregion,
      };
      await Country.create(country);
    }
  });
};

module.exports = createCountries;
