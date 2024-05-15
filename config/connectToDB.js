const mongoose = require("mongoose")
require ("dotenv").config()

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("✅ Connected to database")
    } catch (error) {
        console.log(`⛔ Error connecting to database:\n${error}`)
        process.exit(1)
    }
}

module.exports = connectToDB