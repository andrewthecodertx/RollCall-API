const Attendance = require("../models/Attendance");

exports.isActive = async (attendanceId, delay) => {
    setTimeout(async () => {
        try {
            await Attendance.findByIdAndUpdate(attendanceId, { isActive: true })
        } catch (error) {
            console.error(`Error setting isActive to true: ${error.message}`);
        }
    }, delay);
}

exports.isNotActive = async (attendanceId, delay) => {
    setTimeout(async () => {
        try {
            await Attendance.findByIdAndUpdate(attendanceId, { isActive: false })
        } catch (error) {
            console.error(`Error setting isActive to false: ${error.message}`);
        }
    }, delay);
}