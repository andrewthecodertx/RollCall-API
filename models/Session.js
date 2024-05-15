const mongoose = require("mongoose")
const Schema = new mongoose.Schema

const sessionSchema = new Schema ({
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    sessionDate: {
        type: Date,
        default: Date.now
    },
    sessionLocation: {
        type: String,
        required: true
    },
    locationLatitude: {
        type: Number,
        required: true
    },
    locationLongitude: {
        type: Number,
        required: true
    },
    locationRadius: {
        type: Number,
        required: true
    }
})

const Session = mongoose.model("Session", sessionSchema)
module.exports = Session