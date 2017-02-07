let controller = {};

controller.getRoot = function (req, res, next) {
    res.status(200).json({
        message: 'Welcome to Express API!'
    });
};

module.exports = controller;