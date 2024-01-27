const router = require('express').Router();
const { createEvent, getAllEvents, deleteEvent } = require('../controllers/eventController');

router.post('/events', createEvent);
router.get('/events', getAllEvents);
router.delete('/events/:id', deleteEvent);

module.exports = router;