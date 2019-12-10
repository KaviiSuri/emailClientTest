const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    collegeName: {
        type: String,

    },
    email: {
        type: String,
    }
});

var User = module.exports = mongoose.model("User", UserSchema)