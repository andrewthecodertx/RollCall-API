const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require ('dotenv').config();

exports.addUser = async (req, res) => {
    const { userId, firstNames, lastName, password, role } = req.body;

    if (!userId || !firstNames || !lastName || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please fill all fields'
        });
    }

    const existingUser = await User.findOne({ userId });

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: 'User already exists'
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        userId,
        firstNames,
        lastName,
        password: hashedPassword,
        role
    });

    const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3h' });
    user.token = token;

    res.status(200).cookie('access_token', token, {
        httpOnly: true
    }).json({
        success: true,
        message: 'welcome nigga'
    })
}

exports.login = async (req, res) => {
    const { userId, password } = req.body;

    if (!userId || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please fill all fields'
        });
    }

    const user = await User.findOne({ userId: userId });

    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'Account not found'
        });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(400).json({
            success: false,
            message: 'Wrong password'
        });
    }

    const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3h'});
    user.token = token;

    res.status(200).cookie('access_token', token, {
        httpOnly: true
    }).json({
        success: true,
        message: 'welcome nigga'
    })
}