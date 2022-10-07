const express = require("express");
const {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const router = express.Router();

router.post("/create", createProduct);
router.get("/get", getProducts);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);

module.exports = router;
