const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const BookSchema = new Schema({
  name: { type: String },
  author: { type: String },
  publisher: { type: String },
  description: { type: String },
  status: { type: String },
  image: { type: String },
  slug: {
    type: String,
    unique: true,
  },
});

BookSchema.pre('validate', function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
