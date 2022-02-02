// importthe Content Model
const Content = require("../model/content");

// import the data from the contents-data.json file
const contents = require("../data/contents-data.json");

// import the config file
const dotenv = require("dotenv");

// import the database connection
const databaseConnection = require("../configs/configs-database");

// setting up the dotenv file
dotenv.config({ path: "BackOffice/configs/config.env" });

databaseConnection();

const seedContents = async () => {
  try {
    await Content.deleteMany();
    console.log("Contents deleted successfully");

    await Content.insertMany(contents);
    console.log(
      "all the contents from the contents-data.jsom file added successfully :)"
    );
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedContents();
