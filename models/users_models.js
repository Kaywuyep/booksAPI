const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true
        // required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
}, {timestamps : true});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;