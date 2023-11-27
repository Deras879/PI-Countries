const { Country } = require("../db");

const getCountryName = async (name) => {
  if (typeof name !== "string") {
    throw new Error("No se proporcionó el nombre");
  }
  name = name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  const country = await Country.findAll({ where: { name } });
  if (!country.length) {
    throw new Error("El pais no existe");
  }
  return country;
};

module.exports = getCountryName;
