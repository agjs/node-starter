const router = require('express').Router();
const controller = require('./main.controller');

router.route('/')
      .get(controller.getRoot);

module.exports = router;