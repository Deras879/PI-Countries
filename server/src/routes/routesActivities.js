const { Router } = require("express");

const postActivity = require("../controllers/postActivity");
const getActivities = require("../controllers/getActivities");

const router = Router();

router.post("/", async (req, res) => {
  const { name, season, difficulty, duration, country_ids } = req.body;
  if (!name || !season || !difficulty || !country_ids) {
    return res.status(400).send("Faltan datos");
  }
  const activity = { name, season, difficulty, duration };
  try {
    const newActivity = await postActivity(activity, country_ids);
    res.status(200).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const activities = await getActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
