const Livraison = require("../model/Livraison");
const Conductor = require("../model/conductor");
const Truck = require("../model/truck");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createNewLivraison = catchAsyncErrors(async (req, res, next) => {
  const { poid } = req.body;

  console.log(poid);

  const truck = await Truck.findById(req.params.id);
  const conductor = await Conductor.findById(req.params.id);

  if (!truck) {
       return next(new ErrorHandler("Truck Not Found", 404));
  }

   if (!truck) {
     return next(new ErrorHandler("Conductor Not Found", 404));
   }

  if (poid > 0 && poid <= 200){

  }
});
