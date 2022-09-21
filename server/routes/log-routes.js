const router = require('express').Router();

const { Log, User } = require('../models');

// GET all logs /api/logs/
router.get('/', (req, res) => {
    Log.find({})
        .then(dbLogData => res.json(dbLogData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST new log /api/logs/
router.post('/', ({ body }, res) => {
    // note: body should include userId
    Log.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { logEntries: _id } },
                { runValidators: true, new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) return res.status(404).json({ message: 'User not found' });

            return res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
