const router = require('express').Router();
const { createEvent, getAllEvents, deleteEvent, getEvent, editEvent, getEventByYear, getUpcomingEvents } = require('../controllers/eventController');
const { createPhoto, getAllPhotos, deletePhoto } = require('../controllers/photoController');
const { createUser, getUser, createCheckoutSession, confirmCheckoutSession, cancelSubscription, getAllUsers, addUserAlphaId } = require('../controllers/userController');
const { generateCustomToken } = require('../controllers/authController');

router.post('/events', createEvent);
router.get('/events', getAllEvents);
router.delete('/events/:id', deleteEvent);
router.get('/events/:id', getEvent);
router.put('/events/:id', editEvent);
router.post('/photos', createPhoto);
router.get('/photos', getAllPhotos);
router.delete('/photos/:id', deletePhoto);
router.get('/events/year/:year', getEventByYear);
router.get('/home', getUpcomingEvents);
router.post('/users', createUser); 
router.get('/users', getAllUsers); 
router.get('/users/:id', getUser);
router.post('/create-checkout-session', createCheckoutSession);
router.post('/confirm-checkout-session', confirmCheckoutSession);
router.delete('/cancel-subscription/:id', cancelSubscription);
router.put('/alpha-id', addUserAlphaId);
router.post('/generateCustomToken', generateCustomToken)


module.exports = router;