const { Router } = require("express");

const postActivity = require("../controllers/postActivity");
const getActivities = require("../controllers/getActivities");

const router = Router();

router.post("/", async (req, res) => {
  const { id, name, season, difficulty, duration, country_id } = req.body;
  if (!id || !name || !season || !difficulty || !country_id) {
    return res.status(400).send("Faltan datos");
  }
  const activity = { id, name, season, difficulty, duration };
  try {
    const newActivity = await postActivity(activity, country_id);
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
