const mongoose = require("mongoose");
const config = require("./config");

const DB_CONNECT_URL = config.db.url;

mongoose
  .connect(DB_CONNECT_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
