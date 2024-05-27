const express = require("express");
const router = express.Router();
const Book = require("../models/books_models");
const {
    getBooks,
    getBooksById,
    updateBooks,
    createBooks,
    deleteBooks,
} = require("../controllers/booksController");

/**
 * @swagger
 *  /books:
 *   get:
 *      summary: returns a list of all books
 *      description: Returns a comprehensive list of all books in the database
 *      responses:
 *          201:
 *              description: Successful
 *              content:
 *                  application/json:
 *                       schema:
 *                           type: string
 *                           example: "book1, book2"
 *          400:
 *              description: failed
 */

router.get("/", getBooks)

/**
 * @swagger
 * /books/{bookId}:
 *   get:
 *     summary: Returns a book by ID
 *     description: Returns a specific book by its ID
 *     parameters:
 *       - in: path
 *         name: bookId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the book to get
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 description:
 *                   type: string
 *       400:
 *         description: Error! Book not found
 */
router.get("/:id", getBooksById);

/**
 * @swagger
 * /books/:
 *   post:
 *     summary: create a book
 *     description: create a new book and add to database
 *     parameters:
 *       - in: path
 *         name: newBook
 *         schema:
 *           type: object
 *           properties:
 *              Title:
 *                  type: string
 *              Author:
 *                  type: string
 *              Description:
 *                  type: string
 *         required: true
 *         description: create a new book to post
 *     responses:
 *       201:
 *         description: New book successfully added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 description:
 *                   type: string
 *       400:
 *         description: Error! could not add new book
 */
router.post("/create", createBooks);

/**
 * @swagger
 * /books/{bookId}:
 *   put:
 *     summary: update a book
 *     description: find and update book in database
 *     parameters:
 *       - in: path
 *         name: updateBookById
 *         schema:
 *           type: object
 *           properties:
 *              Title:
 *                  type: string
 *              Author:
 *                  type: string
 *              Description:
 *                  type: string
 *         required: true
 *         description: update already existing book
 *     responses:
 *       201:
 *         description: Book successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal error
 */
router.put("/update/:id", updateBooks);

/**
 * @swagger
 * /books/{bookId}:
 *   delete:
 *     summary: deletes a book
 *     description: deletes a book from database
 *     parameters:
 *       - in: path
 *         name: deleteBook
 *         schema:
 *           type: object
 *           properties:
 *              Title:
 *                  type: string
 *              Author:
 *                  type: string
 *              Description:
 *                  type: string
 *         required: true
 *         description: delete a book
 *     responses:
 *       200:
 *         description: Book successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: book not found
 *       500:
 *         description: Internal error
 */
router.delete("/delete/:id", deleteBooks);

module.exports = router;