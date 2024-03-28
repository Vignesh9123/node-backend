const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const bodyparser = require("body-parser")
const Comments = require("./models/commentSchema")
const commentRoute = require("./routes/commentRoute")
app.use(cors())
app.use(bodyparser.json())
require("dotenv").config();
const connectDB = require("./connectMongo");
connectDB();

app.use("/comments",commentRoute)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
