const mongoose = require("mongoose");




// function to connect db
const connectDB = (uri) => {
  console.log("DB Connected !!!");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
