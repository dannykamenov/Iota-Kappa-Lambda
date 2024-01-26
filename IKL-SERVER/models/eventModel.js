const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Event title is required'],
        trim: true,
        maxlength: [50, 'Event title cannot be more than 50 characters']
    },
    summary: {
        type: String,
        required: [true, 'Event summary is required'],
        trim: true,
        maxlength: [150, 'Event summary cannot be more than 150 characters']
    },
    date: {
        type: Date,
        required: [true, 'Event date is required'],
    },
    time: {
        type: String,
        required: [true, 'Event time is required'],
    },
    description: {
        type: String,
        required: [true, 'Event description is required'],
        trim: true,
        maxlength: [500, 'Event description cannot be more than 500 characters']
    },
    mainImg: {
        type: String,
        required: [true, 'Event main image is required'],
    },
    images: [String],
});


module.exports = mongoose.model('Event', eventSchema);