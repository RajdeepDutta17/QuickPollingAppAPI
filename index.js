const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json());
app.use(cors());

app.use("/", require("./routes/PollRoute"));

mongoose.connection.once("open", () => {
  console.log(`Connected to MongoDB`);
  app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
