const router = require('express').Router();

const { User } = require('../models');
const { signToken } = require('../utils/auth');

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

// POST login user /api/users/login
router.post('/login', async ({ body }, res) => {
    // body expects email and password
    // e.g. { email: "example@gmail.com", password: "somepasswordhere" }
    try {
        const user = await User.findOne({ email: body.email }).select('-__v');

        if (!user) return res.status(404).json({ message: 'User not found' });

        const correctPassword = await user.isCorrectPassword(body.password);

        if (!correctPassword) return res.status(401).json({ message: 'Incorrect password' });

        const token = signToken(user);

        res.json({ user, token });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// POST create new user /api/users
router.post('/', async ({ body }, res) => {
    // body expects name, email, and password
    // e.g. { name: "Jaxon Adams", email: "example@gmail.com", password: "somepasswordhere" }
    try {
        const user = await User.create(body);

        // create JWT
        const token = signToken(user);

        res.json({
            user,
            token
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// DELETE remove user /api/users/:id
router.delete('/:id', ({ params }, res) => {
    User.findOneAndDelete({ _id: params.id })
    .then(dbUserData => {
        if (!dbUserData) {
            return res.status(500).json({ message: 'User not found' });
        };

        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT update user info /api/users/:id
router.put('/:id', ({ params, body }, res) => {
    User.findOneAndUpdate(
        { _id: params.id },
        body,
        { new: true, runValidators: true }
    )
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

module.exports = router;