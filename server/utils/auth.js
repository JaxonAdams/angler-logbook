// this utility module handles serverside JWT authorization
const jwt = require('jsonwebtoken');

// pull secret from environment variables and set token expiration
const secret = process.env.JWT_SECRET;
const expiration = '3h';

// export several utility methods
module.exports = {
    // creates a JWT on user creation or sign-in
    signToken: function({ name, email, _id }) {
        const payload = { name, email, _id };

        // return new JWT with user info and set expiration date
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    // checks that request carries a valid JWT (user logged in)
    authMiddleware: function({ req }) {
        // take token from the request body or auth header
        let token = req.body.token || req.headers.Authorization;

        // if token comes from auth header, reformat
        if (req.headers.Authorization) {
            token = token.split(' ').pop().trim();
        };

        if (!token) {
            return req;
        };

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch (err) {
            console.log('Invalid token: ' + err);
        };

        return req;
    }
};
