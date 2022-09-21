// this file bundles routes together and exports them to be used in server file
const router = require('express').Router();

// import routes from other files in this folder
const userRoutes = require('./user-routes');
const logRoutes = require('./log-routes');

// use routes with the specified url
router.use('/users', userRoutes);
router.use('/logs', logRoutes);

module.exports = router;
