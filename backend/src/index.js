const express = require("express");
const connectDB = require("../mongodb");
const app = express();
const productrouter = require("../routers/productRouter");
const camprouter = require("../routers/campRouter");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

connectDB();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use("/prod", productrouter);
app.use("/camp", camprouter);

app.listen(process.env.PORT || port, () => {
  console.log("Server is running on port", port);
});
