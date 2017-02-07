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

controller.getByTitle = (req, res, next) => {
    console.log('The req params is ', req.params);
    Book.findOne({
            title: req.params.title
        })
        .then((book) => {
            res.status(200).json(book);
        }).catch((error) => {
            next(error);
        });
};

controller.updateByTitle = (req, res, next) => {
    Book.findOneAndUpdate({
            title: req.params.title
        }, req.body)
        .then((book) => {
            res.status(201).json(book);
        }).catch((error) => {
            next(error);
        });
};

controller.deleteByTitle = (req, res, next) => {
    Book.remove({
            title: req.params.title
        })
        .then((book) => {
            res.status(204).end();
        }).catch((error) => {
            next(error);
        });
};

module.exports = controller;