const User = require("../model/user");
const Conductor = require("../model/conductor");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwToken");
const Truck = require("../model/truck");
const logger = require("../utils/winston");

// register new user under the url /api/v1/register
exports.register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "public_id_user1",
      url: "https://api.github.com/",
    },
  });
  logger.info(`login: User Created successfully`);

  sendToken(user, 200, res);
});

// Login user user the uri => /api/v1/login
exports.login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // check if email and password is entred by the user
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Your Email And Password", 400));
  }

  // finding user in the database
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  // checks if the password correct or Not
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  logger.info(`login: User logged in successfully!`);

  // res.json("allo");
  sendToken(user, 200, res);
});

// Logout the  user under the uri => /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User logged out",
  });
});

//
// exports.login = catchAsyncErrors(async (req, res) => {});

// create managers
exports.addNewManager = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const manager = await User.create({
    name,
    email,
    password,
    role,
    avatar: {
      public_id: "public_id_user1",
      url: "https://api.github.com/",
    },
  });
  res.status(201).json({
    success: true,
    manager,
  });

  // sendToken(user, 200, res);
});

// create conductor
exports.addNewConductor = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const truck = await Truck.findById(req.params.id);

  if (!truck) {
    return next(new ErrorHandler("Truck Not Found", 404));
  }

  const conductor = await Conductor.create({
    name,
    email,
    password,
    truck: truck,
    avatar: {
      public_id: "public_id_user1",
      url: "https://api.github.com/",
    },
  });
  // sendToken(conductor, 200, res);
  res.status(201).json({
    success: true,
    conductor,
  });
});

// create managers
exports.addNewResponsableDuLivraison = catchAsyncErrors(
  async (req, res, next) => {
    const { name, email, password, role } = req.body;

    const manager = await User.create({
      name,
      email,
      password,
      role,
      avatar: {
        public_id: "public_id_user1",
        url: "https://api.github.com/",
      },
    });
    res.status(201).json({
      success: true,
      manager,
    });

    // sendToken(user, 200, res);
  }
);
