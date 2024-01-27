const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    photoName: {
        type: String,
        trim: true,
    },
    photoUrl: {
        type: String,
        trim: true,
    },
});


module.exports = mongoose.model('Photo', photoSchema);