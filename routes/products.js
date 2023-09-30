const express = require("express");
const router = express.Router();

// local imports
const {
  getAllProducts,
  getAllTestProducts,
} = require("../controllers/products");

// define route functions

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllTestProducts);

// export the router
module.exports = router;
