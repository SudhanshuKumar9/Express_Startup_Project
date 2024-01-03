const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /city
 * req-body {name: string}
 */
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * POST : /cities
 * req-body {}
 */
async function getCities(req, res) {
  try {
    const cities = await CityService.getCities();
    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * POST : /cities/:id
 * req-body {}
 */
async function getCity(req, res) {
  try {
    const cities = await CityService.getCity(req.params.id);
    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /cities/:id
 * req-body {}
 */
async function destroyCity(req, res) {
  try {
    const cities = await CityService.destroyCity(req.params.id);
    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *PATCH  : /cities/:id
 * req-body {name: string}
 */
async function updateCity(req, res) {
  try {
    const cities = await CityService.updteAirplane(req.params.id, {
      name: req.body.name,
    });
    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  getCities,
  getCity,
  createCity,
  updateCity,
  destroyCity,
};
