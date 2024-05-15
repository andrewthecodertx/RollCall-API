const mongoose = require("mongoose")
const Schema = new mongoose.Schema

const attendanceSchema = new Schema ({
    attendanceId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    attendanceTime: {
        type: Date,
        default: Date.now
    },
    verificationCode: {
        type: String,
        unique: true,
        required: true
    },
    deviceToken
})

const Attendance = mongoose.model("Attendance", attendanceSchema)
module.exports = Attendance