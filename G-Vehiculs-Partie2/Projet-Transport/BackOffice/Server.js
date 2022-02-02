const app = require("./app");

// getting values from the dotenv file
const dotenv = require("dotenv");

// handle the uncaughtException
process.on("uncaughtException", (err) => {
  console.log(`ERROR: => ${err.message}`);
  console.log(`Shutting down due to uncughtException`);
  process.exit(1);
});

// mongodb configs
const databaseConnection = require("./configs/configs-database");

// ************************************************************************

//setting up config file
dotenv.config({ path: "BackOffice/configs/config.env" });

// Connecting to the database mongodb
databaseConnection();

// ************************************************************************
const server = app.listen(process.env.PORT, () => {
  console.log(
    `the server s running on the port => ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

// handle unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: => ${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
