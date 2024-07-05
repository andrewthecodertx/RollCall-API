const Attendance = require('../models/Attendance');
const { generateVerificationCode } = require('../config/generateVerificationCode');
const { isActive, isNotActive } = require('../config/isActive');
const { convertTime } = require('../config/convertTimeFromString');

exports.startAttendance = async (req, res) => {
    const { startTime, sessionDuration, radius } = req.body;

    const sstartTime = new Date(startTime);
    const eendTime = new Date(endTime)

    const attendance = await Attendance.create({
        startTime: sstartTime,
        endTime: eendTime,
        radius: radius,
        verificationCode: generateVerificationCode(),
    });

    isActive(attendance._id, sstartTime + (20 * 1000));
    isNotActive(attendance._id, convertedTime + (sessionDuration * 60 * 60 * 1000));
    isActive(attendance._id, sstartTime + (20 * 1000));
    isNotActive(attendance._id, convertedTime + (sessionDuration * 60 * 60 * 1000));

    return res.status(200).json({
        success: true,
        message: `Created attendance session with id - ${attendance._id}`,
        attendance: attendance
    });
}