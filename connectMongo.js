const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI,{dbName:"Sample_comm"})
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectDB
