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

app.use("/comments",commentRoute)

mongoose.connect(process.env.MONGODB_URI,{dbName:"Sample_comm"}).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Running")
    })
})
