const router = require('express').Router();
const { createEvent } = require('../controllers/eventController');

router.post('/events', createEvent);

module.exports = router;