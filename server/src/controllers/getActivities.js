const { Activity, Country } = require("../db");

const getActivities = async () => {
  return await Activity.findAll({
    include: [
      {
        model: Country,
        attributes: ["name", "continent", "id"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

module.exports = getActivities;
