const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose.connect(process.env.LOCAL_DATABASE_URI).then((connection) => {
    console.log(
      `MongoDB Database connected with HOST => ${connection.connection.host}`
    );
  });
};

module.exports = databaseConnection;
