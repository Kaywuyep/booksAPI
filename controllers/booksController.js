const Book = require("../models/books_models");
//const { query } = require('express')

const getBooks = async (req, res) => {
    try{
        const books = await Book.find()
        //res.send("Get list of all books")


        res.status(201).json(books)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
};
const getBooksById = async (req, res) => {
    try {
        const id = req.params.id
        const bookExist = await Book.findOne({_id: id});
        if (!bookExist) {
            return res.status(400).json({ message: "Book does not Exist!!"})
        }
        const bookId = await Book.findById(id);
        res.status(200).json(bookId);
    } catch(error) {
        res.status(500).json({message: error.message});   
    }
};

const createBooks = async (req, res) => {
    try {
        const book = new Book(req.body);
        const { author} = book;

        const bookExist = await Book.findOne({ author });

        if (bookExist) {
            return res.status(400).json({ message: "Book exist!" });
        }

        // save the new book object to database
        await book.save();

        res.status(201).json({ message: `${book} successfully added`})
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
};
const updateBooks = async (req,res) => {
    try {
        const id = req.params.id;

        const bookExist = await Book.findOne({ _id: id });

        if (!bookExist) {
            return res.status(404).json({ message: "Book not found!"})
        }
        const updateBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateBook) {
            return res.status(404).json({ error: "Book not found!"})
        }
        res.status(201).json({ message: `${Book} updated successfully!` })
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
};
const deleteBooks = async (req, res) => {
    try {
        const id = req.params.id;

        const bookExist = await Book.findOne({ _id: id });

        if (!bookExist) {
            return res.status(404).json({ message: "Book not found!"})
        }
        const deleteBook = await Book.findByIdAndDelete(id);

        if (!deleteBook) {
            return res.status(404).json({ error: "Book not found!"})
        }
        res.status(200).json({ message: "Book successfully deleted!"});
    } catch(error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {
    getBooks,
    getBooksById,
    createBooks,
    updateBooks,
    deleteBooks,
}