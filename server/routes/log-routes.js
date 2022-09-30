// this file handles the API routes for fishing log entries
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

// GET log by id /api/logs/:id
router.get('/:id', ({ params }, res) => {
    Log.findOne({ _id: params.id })
        .then(dbLogData => {
            if (!dbLogData) return res.status(404).json({ message: 'Log not found' });
            return res.json(dbLogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET all logs by name /api/logs/:name
router.get('/user/:name', ({ params }, res) => {
    User.findOne({ name: params.name }).select('logEntries').populate({ path: 'logEntries' })
        .then(dbUserData => {
            if (!dbUserData) return res.status(404).json({ message: 'User not found' });

            return res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST new log /api/logs/
router.post('/', ({ body }, res) => {
    // note: body should include userId and name
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

// DELETE remove log /api/logs/:id
router.delete('/:id', ({ params, body }, res) => {
    Log.findOneAndDelete({ _id: params.id })
        .then(dbLogData => {
            if (!dbLogData) return res.status(404).json({ message: 'Log not found' });
            
            res.json({ deleted: true, log: dbLogData });
        })
        .then(() => {
            // pull log id from user's logEntries array
            User.findOneAndUpdate(
                { _id: body.userId },
                { $pull: { logEntries: params.id } },
                { new: true, runValidators: true }
            )
            .then(dbUserData => {
                if (!dbUserData) return res.status(404).json({ message: 'User not found' });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT update log /api/logs/:id
router.put('/:id', ({ params, body }, res) => {
    Log.findOneAndUpdate(
        { _id: params.id },
        body,
        { new: true, runValidators: true }
    )
        .then(dbLogData => {
            if (!dbLogData) return res.status(404).json({ message: 'Log not found' });

            return res.json(dbLogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
