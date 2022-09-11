const router = require('express').Router();

const { User } = require('../models');

// GET all users /api/users
router.get('/', (req, res) => {
    User.find({})
    .select('-__v -password')
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET user by ID /api/users/:id
router.get('/:id', ({ params }, res) => {
    User.findOne({ _id: params.id })
    .select('-__v -password')
    .then(dbUserData => {
        if (!dbUserData) {
            return res.status(404).json({ message: 'User not found' });
        };

        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST create new user /api/users
router.post('/', async ({ body }, res) => {
    // body expects name, email, and password
    //e.g. { name: "Jaxon Adams", email: "example@gmail.com", password: "somepasswordhere" }
    try {
        const user = await User.create(body);

        // TODO: sign JWT here & send w/ res

        res.json({
            user,
            // token
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;