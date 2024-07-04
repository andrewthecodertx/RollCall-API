const express = require('express');
require ('dotenv').config();
const morgan = require('morgan');
const dbConnect = require('./config/dbConnect');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.route');
const attendanceRouter = require('./routes/attendance.route');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
const port = process.env.PORT || 3000;
// connectToDB()

app.use('/api/attendance', attendanceRouter);
app.use('/api/auth', userRouter);

app.get('/api', async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'main'
    });
});

app.listen(port, async () => {
    console.log(`Server listening on port ${port}...`);
    await dbConnect();
});