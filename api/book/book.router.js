const router = require('express').Router();
const controller = require('./book.controller');

router.route('/')
    .get(controller.getBooks)
    .post(controller.createBook);

router.route('/:title')
    .get(controller.getByTitle)
    .put(controller.updateByTitle)
    .delete(controller.deleteByTitle);
    

module.exports = router;
