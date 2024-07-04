const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    firstNames: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        uppercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['lecturer', 'student'],
        default: 'student'
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User;