const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');
const slugify = require('slugify');

exports.movieEdit = async (req, res) => {
  const movie = await Movie.findOne({ slug: req.params.slug });
  res.render('editPages/movieEdit', {
    movie,
  });
};
exports.moviePage = async (req, res) => {
  const movie = await Movie.findOne({ slug: req.params.slug });
  movie.title = req.body.title;
  movie.subtitle = req.body.subtitle;
  movie.description = req.body.description;
  movie.serial = req.body.serial;
  movie.status = req.body.status;
  movie.save();
  res.redirect(`/movie/${req.params.slug}`);
};

exports.serieEdit = async (req, res) => {
  const serie = await Serie.findOne({ slug: req.params.slug });
  res.render('editPages/serieEdit', {
    serie,
  });
};
exports.seriePage = async (req, res) => {
  const serie = await Serie.findOne({ slug: req.params.slug });
  serie.title = req.body.title;
  serie.subtitle = req.body.subtitle;
  serie.other = req.body.other;
  serie.serial = req.body.serial;
  serie.status = req.body.status;
  serie.save();
  res.redirect(`/serie/${req.params.slug}`);
};
exports.bookEdit = async (req, res) => {
  const book = await Book.findOne({ slug: req.params.slug });
  res.render('editPages/bookEdit', {
    book,
  });
};
exports.bookPage = async (req, res) => {
  const book = await Book.findOne({ slug: req.params.slug });
  book.name = req.body.name;
  book.author = req.body.author;
  book.description = req.body.description;
  book.publisher = req.body.publisher;
  book.status = req.body.status;
  book.save();
  res.redirect(`/book/${req.params.slug}`);
};
