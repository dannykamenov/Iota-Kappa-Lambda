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

async function getAllEvents(req, res) {
    try {
        const events = await Event.find();
        res.status(200).json({
            status: 'success',
            results: events.length,
            data: {
                events
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
    createEvent,
    getAllEvents
};