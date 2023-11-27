const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const routerCountries = require("./routes/routesCountries");
const routerActivities = require("./routes/routesActivities");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use("/countries", routerCountries);
server.use("/activities", routerActivities);
server.use(router);

module.exports = server;
