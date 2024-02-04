const router = require('express').Router();
const { createEvent, getAllEvents, deleteEvent, getEvent, editEvent, getEventByYear, getUpcomingEvents } = require('../controllers/eventController');
const { createPhoto, getAllPhotos, deletePhoto } = require('../controllers/photoController');

router.post('/events', createEvent);
router.get('/events', getAllEvents);
router.delete('/events/:id', deleteEvent);
router.get('/events/:id', getEvent);
router.put('/events/:id', editEvent);
router.post('/photos', createPhoto);
router.get('/photos', getAllPhotos);
router.delete('/photos/:id', deletePhoto);
router.get('/events/year/:year', getEventByYear);
router.get('/home', getUpcomingEvents)


module.exports = router;