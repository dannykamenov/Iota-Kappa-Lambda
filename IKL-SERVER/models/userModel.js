const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    sessionId: {
        type: String,
        default: '',
    },
    subscriptionId: {
        type: String,
        default: '',
    },
    subscriptionStatus: {
        type: String,
        default: 'inactive',
    },
    subscriptionDate: {
        type: Date,
        default: null,
    },
    customerId: {
        type: String,
        default: '',
    },
    profilePic: {
        type: String,
        default: '',
    },
    alphaId: {
        type: String,
        default: '',
    },
    initiationDate: {
        type: Date,
        default: null,
    },
});


module.exports = mongoose.model('User', userSchema);