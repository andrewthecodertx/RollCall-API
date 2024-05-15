const express = require("express")
require ("dotenv").config()
const morgan = require("morgan")
const connectToDB = require("./config/connectToDB")

const app = express()
app.use(express.json())
app.use(morgan("dev"))
const port = process.env.PORT || 5000
// connectToDB()

app.listen(port, async () => {
    console.log(`Server listening on port ${port}...`)
    await connectToDB()
})