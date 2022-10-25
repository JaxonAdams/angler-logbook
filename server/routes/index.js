// this file bundles routes together and exports them to be used in server file
const router = require('express').Router();

// import routes from other files in this folder
const userRoutes = require('./user-routes');
const logRoutes = require('./log-routes');
const imageRoutes = require('./image-routes');

// use routes with the specified url
router.use('/api/users', userRoutes);
router.use('/api/logs', logRoutes);
router.use('/api/images');

module.exports = router;
