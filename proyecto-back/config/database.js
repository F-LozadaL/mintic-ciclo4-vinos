const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "vino-ecomm";

exports.mongoConnect = () => {
  const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    "error",
    console.error.bind(console, "Mongodb connection error")
  );
};
