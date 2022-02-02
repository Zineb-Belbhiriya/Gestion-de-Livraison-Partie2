const Truck = require("../model/truck");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


exports.createNewTruck = catchAsyncErrors(async (req, res, next) => {
  const { type, brand, model } = req.body;

  const truck = await Truck.create({
    type,
    brand,
    model,
  });
  res.status(201).json({
    success: true,
    truck,
  });
});
