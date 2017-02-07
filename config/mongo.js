const mongoose = require('mongoose');
const config = require('./index');

module.exports = () => {

    mongoose.connect(config.MONGODB.URL);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to mongoDB');
    });

}