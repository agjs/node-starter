const router = require('express').Router();
const controller = require('./book.controller');

router.route('/')
    .get(controller.getBooks)
    .post(controller.createBook);


module.exports = router;
