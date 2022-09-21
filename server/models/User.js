const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 4
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 4,
            match: [/.+@.+\..+/, 'Must be a valid email address.']
        },
        password: {
            type: String,
            required: true,
            minlength: 4
        },
        logEntries: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Log'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        // no need for id value, _id is also returned
        id: false
    }
);

// middleware to hash password
UserSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    };

    next();
});

UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', UserSchema);

module.exports = User;
