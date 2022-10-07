const productSchema = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const newProd = await productSchema.create(req.body);
    const prod = await newProd.save();
    res.status(201).json({ prod });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const prod = await productSchema.find();
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductByName = async (req, res) => {
  try {
    const { campagin } = req.params;
    const product = await productSchema.find({ campagin });
    if (product) {
      return res.status(200).json(product);
    }
    res.status(404).json("Product not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await productSchema.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Product deleted");
    }
    throw new Error("Product not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    let product = await productSchema.findById(req.params.id);
    if (!product) {
      return res.status(400).json("Product not found", 404);
    }
    product = await productSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      product,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getProductByName,
};
