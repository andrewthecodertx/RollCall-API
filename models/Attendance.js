const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const attendeeSchema = require('./Attendee')

const attendanceSchema = new Schema ({
    attendees: [attendeeSchema],
    timestamp: {
        type: Date,
        default: Date.now
    },
    startTime: {    // 24h format
        type: Date,
        required: true
    },
    // sessionDuration: {
    //     type: Number,   // in hours
    // },
    endTime: {
        type: Date,
        required: true
    },
    centralLatitude: {
        type: String,
        // required: true
    },
    centralLongitude: {
        type: String,
        // required: true
    },
    radius: {
        type: Number,
        default: 100
    },
    verificationCode: {
        type: String,
        unique: true,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Attendance = mongoose.model('attendance', attendanceSchema);
module.exports = Attendance;