const winston = require("winston");
require("winston-mongodb");
// const db = process.env.LOCAL_DATABASE_URI;

const levels = {
  error: 0,
  info: 1,
};

const colors = {
  error: "red",
  info: "green",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss:ms",
  }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(winston.format.colorize(), format),
  }),
  new winston.transports.MongoDB({
    db: "mongodb+srv://Belbhiriyazineb:153624@marocship.lak9e.mongodb.net/db_marocship?authSource=admin&replicaSet=atlas-rwzte9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    options: {
      useUnifiedTopology: true,
    },
    collection: "loggers_info",
    level: "info",
  }),
  new winston.transports.MongoDB({
    db: "mongodb+srv://Belbhiriyazineb:153624@marocship.lak9e.mongodb.net/db_marocship?authSource=admin&replicaSet=atlas-rwzte9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    options: {
      useUnifiedTopology: true,
    },
    collection: "loggers_error",
    level: "error",
  }),
];

const logger = winston.createLogger({
  levels,
  format,
  transports,
});

module.exports = logger;
