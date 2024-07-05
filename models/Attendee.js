const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendeeSchema =  new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    checkIn: {
        type: Date,
    },
    checkOut: {
        type: Date,
    }
}, { _id: false });

module.exports = attendeeSchema;