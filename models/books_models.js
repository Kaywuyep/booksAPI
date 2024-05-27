const mongoose = require("mongoose");


const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    author: {
        type: String,
        minlength: 4,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    }
}, {timestamps : true});

const Book = mongoose.model("Books", booksSchema);
module.exports = Book;