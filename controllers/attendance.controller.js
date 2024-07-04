const Attendance = require('../models/Attendance');
const generateVerificationCode = require('../config/generateVerificationCode');

exports.startAttendance = async (req, res) => {
    const attendance = await Attendance.create({
        verificationCode: generateVerificationCode()
    });

    return res.status(200).json({
        success: true,
        message: `Created att sesh with id - ${attendance.verificationCode}`,
        attendance: attendance
    });
}