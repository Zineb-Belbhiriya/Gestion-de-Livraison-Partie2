
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const middleware = require("./middleware/errors");
app.use(express.json());
app.use(cookieParser());

// import all routes
const auth = require("./route/auth");

app.use("/api/v1", auth);

// middleware to handle Errors
app.use(middleware);

module.exports = app;
