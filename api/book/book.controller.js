let Book = require('./book.model');
let controller = {};

controller.getBooks = (req, res, next) => {
    Book.find()
        .then((books) => {
            res.status(200).json(books);
        }).catch((error) => {
            next(error);
        });
};

controller.createBook = (req, res, next) => {
    Book.create({
            title: req.body.title,
            author: req.body.author,
            pages: req.body.pages
        })
        .then((book) => {
            res.status(201).json(book);
        }).catch((error) => {
            next(error);
        });
};

module.exports = controller;