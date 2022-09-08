// import mongoose module
const mongoose = require('mongoose');

// use mongoose to connect to mongodb, using connection uri in production or local instance
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/angler-logbook', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// export db connection
module.exports = mongoose.connection;