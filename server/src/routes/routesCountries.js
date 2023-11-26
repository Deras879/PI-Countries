const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getCountrieId = require("../controllers/getCountrieId");
const getCountrieName = require("../controllers/getCountrieName");

const routerCountries = Router();

routerCountries.get("/", async (req, res) => {
  try {
    const countries = await getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routerCountries.get("/name", async (req, res) => {
  let { name } = req.query;
  name = decodeURIComponent(name);

  try {
    const countrie = await getCountrieName(name);
    res.status(200).json(countrie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
routerCountries.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const countrie = await getCountrieId(id);
    res.status(200).json(countrie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routerCountries;
