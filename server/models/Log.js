const { Schema, model } = require('mongoose');

const LogSchema = new Schema(
    {
        // required fields
        // fish caught
        fish: {
            type: String,
            required: true
        },
        // date caught -- format 'YYYY-MM-DD'
        date: {
            type: Date,
            required: true
        },
        // location (river, lake, etc)
        location: {
            type: String,
            required: true
        },
        // lure used
        lure: {
            type: String,
            required: true
        },
        // angler's name
        name: {
            type: String,
            required: true
        },

        // optional fields
        // air temperature in F
        airTemp: String,
        // water temperature in F
        waterTemp: String,
        // fish weight
        weight: String,
        // fish length
        length: String,
        // any other info, 250 char limit
        other: {
            type: String,
            maxlength: 250
        }
    },
    {
        id: false
    }
);

const Log = model('Log', LogSchema);

module.exports = Log;
