const { Country, Activity } = require("../db");

const getCountrieId = async (id) => {
  if (id.length !== 3) {
    throw new Error("El id debe ser de 3 letras");
  }
  id = id.toUpperCase();
  const countrie = await Country.findByPk(id, { include: Activity });
  if (!countrie) {
    throw new Error("Id no valido");
  }
  return countrie;
};

module.exports = getCountrieId;
