const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });


const connectDB = () => {
  try {
    mongoose.connect(
      // "ShubhamKumar:Shubham@cluster0.oxt5fpw.mongodb.net/?retryWrites=true&w=majority",
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
      }
    );
    console.log("Mongodb connected successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
