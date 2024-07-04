const express = require('express');
const { login, addUser } = require('../controllers/auth.controller');

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/add-user', addUser);

module.exports = userRouter;