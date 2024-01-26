const express = require("express");
const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");

const router = express.Router();

// api/v1/airports POST
router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

// api/v1/airports GET
router.get("/", AirportController.getAirports);

// api/v1/airports/:id
router.get("/:id", AirportController.getAirport);

module.exports = router;
