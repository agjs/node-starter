const mongoose = require('mongoose');
const schema = mongoose.Schema;

let bookSchema = new schema({
    title: String,
    author: String,
    pages: Number
});

module.exports = mongoose.model('Book', bookSchema);