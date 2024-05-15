const mongoose = require("mongoose")
const Schema = new mongoose.Schema

const userSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    first_names: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    // userId: {
    //     type: String,
    //     unique: true,
    //     required: true,
    // },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "lecturer", "student"],
        default: "student"
    }
})

const User = mongoose.model("user", userSchema)
module.exports = User