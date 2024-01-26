const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportRepositroy = new AirportRepository();

async function createAirport(data) {
  try {
    console.log(data);
    const airport = await airportRepositroy.create(data);
    return airport;
  } catch (error) {
    console.log(error);
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirports() {
  try {
    const airports = await airportRepositroy.getAll();
    return airports;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirport(id) {
  try {
    const airplane = await airportRepositroy.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airport you requested is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of all the airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
};
