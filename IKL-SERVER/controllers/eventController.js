const mongoose = require("mongoose");
const Event = require("../models/eventModel");

async function createEvent(req, res) {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        event: newEvent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

async function getAllEvents(req, res) {
  try {
    const events = await Event.find();
    res.status(200).json({
      status: "success",
      results: events.length,
      data: {
        events,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

async function deleteEvent(req, res) {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

async function getEvent(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        event,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

async function editEvent(req, res) {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        event,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

async function getEventByYear(req, res) {
  try {
    const year = req.params.year;
    const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${year}-12-31T23:59:59.999Z`);

    const events = await Event.find({
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    events.sort((a, b) => {
      return a.date - b.date;
    });

    res.status(200).json({
      status: "success",
      data: {
        events,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

module.exports = {
  createEvent,
  getAllEvents,
  deleteEvent,
  getEvent,
  editEvent,
  getEventByYear,
};
