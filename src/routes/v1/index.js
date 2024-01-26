const express = require("express");
const { infoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const aiportRoutes = require("./airport-routes");
const flightRoutes = require("./flight-routes");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", aiportRoutes);
router.use("/flights", flightRoutes);

router.get("/info", infoController.info);

module.exports = router;
