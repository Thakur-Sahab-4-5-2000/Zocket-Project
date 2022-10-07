const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  campagin: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["livenow", "paused", "exhausted"],
  },
  dateRange: {
    date1: {
      type: Date,
      default: Date.now,
      required: true,
    },
    date2: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },

  img: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
    enum: ["facebook", "instagram", "google", "youtube"],
  },

  isSelected: {
    type: Boolean,
    default: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("productSchema", productSchema);
