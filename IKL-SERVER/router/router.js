const router = require('express').Router();
const { createEvent, getAllEvents, deleteEvent, getEvent, editEvent } = require('../controllers/eventController');

router.post('/events', createEvent);
router.get('/events', getAllEvents);
router.delete('/events/:id', deleteEvent);
router.get('/events/:id', getEvent);
router.put('/events/:id', editEvent);

module.exports = router;