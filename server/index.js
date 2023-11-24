const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const obtainCountries = require("./src/utils/obtainCountries.js");

conn
  .sync({ force: true })
  .then(() => {
    obtainCountries();
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
