const { Country } = require("../db");

const getCountrieName = async (name) => {
  if (typeof name !== "string") {
    throw new Error("No se proporcionó el nombre");
  }
  name = name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  const countrie = await Country.findAll({ where: { name } });
  if (!countrie.length) {
    throw new Error("El pais no existe");
  }
  return countrie;
};

module.exports = getCountrieName;
