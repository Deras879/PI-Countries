const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        primaryKey: true,
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 3],
          is: /^[a-zA-Z]{3}$/,
        },
      },
      continent: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /\.(jpg|jpeg|png|gif)$/i,
        },
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subRegion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          isDecimal: true,
          min: 0,
        },
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
