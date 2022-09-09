// import necessary modules
const express = require('express');
const path = require('path');

// set up dotenv for local development
require('dotenv').config();

const db = require('./config/connection');
// routes should be imported here as well

// set up express instance
const app = express();
const PORT = process.env.PORT || 3001;

// express middleware to parse data, use routes, etc
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(routes);

// if in production, provide static assets in build folder
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
};

// start server
db.once('open', () => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});