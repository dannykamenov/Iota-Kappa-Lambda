const router = require('express').Router();
const { createEvent, getAllEvents } = require('../controllers/eventController');

router.post('/events', createEvent);
router.get('/events', getAllEvents);

module.exports = router;