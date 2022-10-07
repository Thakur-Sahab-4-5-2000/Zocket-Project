const campSchema = require("../models/campModel");

const getProducts = async (req, res) => {
  try {
    const prod = await campSchema.find();
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProd = await campSchema.create(req.body);
    const prod = await newProd.save();
    res.status(201).json({ prod });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
};
