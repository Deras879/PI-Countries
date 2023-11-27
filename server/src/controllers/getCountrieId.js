const { Country, Activity } = require("../db");

const getCountrieId = async (id) => {
  if (id.length !== 3) {
    throw new Error("El id debe ser de 3 letras");
  }
  id = id.toUpperCase();
  const country = await Country.findByPk(id, {
    include: [
      {
        model: Activity,
        through: { attributes: [] },
      },
    ],
  });
  if (!country) {
    throw new Error("Id no valido");
  }
  return country;
};

module.exports = getCountrieId;
