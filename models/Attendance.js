const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema ({
    attendanceId: {
        type: String,
        // required: true
    },
    attendees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    attendanceTime: {
        type: Date,
        default: Date.now
    },
    verificationCode: {
        type: String,
        unique: true,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Attendance = mongoose.model('attendance', attendanceSchema);
module.exports = Attendance;