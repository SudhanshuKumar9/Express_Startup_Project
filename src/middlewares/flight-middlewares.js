const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

const AppError = require("../utils/errors/app-error");
const { compareDate } = require("../utils/helper/dateHelper");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["flightNumber not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["airplaneId not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      [
        "arrivalAirportId not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      [
        "departureAirportId not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (req.body.arrivalAirportId === req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["Arrival and Departure Can't be same"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["arrivalTime not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["departureTime not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (compareDate(req.body.arrivalTime, req.body.departureTime) == 0) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["Arrival & Departure Time cannot be same"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["price not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
module.exports = {
  validateCreateRequest,
};
