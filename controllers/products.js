const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const myData = await Product.find({});
  res.status(200).json({ myData });
};

const getAllTestProducts = async (req, res) => {
  const infiniti = await Product.find(req.query);
  console.log("Request Query : ", req.query);
  res.status(200).json({ infiniti });
};

// export the functions
module.exports = {
  getAllProducts,
  getAllTestProducts,
};
