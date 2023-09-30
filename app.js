require("dotenv").config();

const express = require("express");
const app = express();

// local imports
// importing routes
const product_routes = require("./routes/products");
// connectDB
const connectDB = require("./db/connect");

// define the variable
const PORT = process.env.PORT || 5000;

// define routes
app.get("/", (req, res) => {
  res.send("Hi, I'm live !!!");
});

// define the middleware or app route for api
app.use("/api/products", product_routes);

// define the start function for server
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("Server connected to ", PORT);
    });
  } catch (error) {
    console.log("Error Message is : ", error);
  }
};

// start the server
start();
