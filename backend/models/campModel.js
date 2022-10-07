const mongoose = require("mongoose");

const campSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    img: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("campSchema", campSchema);
