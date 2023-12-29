const { Country, Activity } = require("../db");

const getCountries = async () => {
  const countries = await Country.findAll({
    include: [
      {
        model: Activity,
        attributes: ["difficulty"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return countries;
};

module.exports = getCountries;
