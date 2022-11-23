const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');

exports.booksAdd = async (req, res) => {
  await Book.create(req.body);
  res.redirect('/');
};

exports.seriesAdd = async (req, res) => {
  await Serie.create(req.body);
  res.redirect('/');
};

exports.moviesAdd = async (req, res) => {
  await Movie.create(req.body);
  res.redirect('/');
};
