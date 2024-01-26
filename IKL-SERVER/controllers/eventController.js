const mongoose = require('mongoose');
const Event = require('../models/eventModel');

async function createEvent(req, res) {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                event: newEvent
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
}

module.exports = {
    createEvent
};