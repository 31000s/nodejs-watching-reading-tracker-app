const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    publisher: String,
    description: String,
    status: String,
    img: String,
});
const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
