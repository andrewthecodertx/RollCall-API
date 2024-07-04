const express = require('express');
const { startAttendance } = require('../controllers/attendance.controller');

const attendanceRouter = express.Router();

attendanceRouter.post('/create', startAttendance);

module.exports = attendanceRouter;