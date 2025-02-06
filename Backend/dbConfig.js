const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://RiyaSahu:Riya%40123@cluster0.ohieplv.mongodb.net/notesApp")
        console.log("Connected to MongoDB")
    } catch(err) {
        console.log(err)
    }
}

module.exports = {connectDB}