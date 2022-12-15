const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');


exports.booksAdd = async (req, res) => {
  await Book.create(red.body);
  res.redirect('/');
};

exports.seriesAdd = async (req, res) => {
  await Serie.create(red.body);
  res.redirect('/');
};

exports.moviesAdd = async (req, res) => {
  await Movie.create(red.body);
  res.redirect('/');
};
