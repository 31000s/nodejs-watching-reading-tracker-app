const fs = require('fs');

const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');
const slugify = require('slugify')

exports.serieDelete = async (req, res) => {
  const serie = await Serie.findOne({slug: req.params.slug});
  let deletedImage = __dirname + '/../public/uploads' + serie.image;
  fs.unlinkSync(deletedImage);
  await Serie.findByIdAndRemove({slug: req.params.slug});
  res.redirect('/serie');
};
exports.movieDelete = async (req, res) => {
  const movie = await Movie.findOne({slug: req.params.slug});
  let deletedImage = __dirname + '/../public/uploads' + movie.image;
  fs.unlinkSync(deletedImage);
  await Movie.findByIdAndRemove({slug: req.params.slug});
  res.redirect('/movie');
};
exports.bookDelete = async (req, res) => {
  const book = await Book.findOne({slug: req.params.slug});
  let deletedImage = __dirname + '/../public/uploads' + book.image;
  fs.unlinkSync(deletedImage);
  await Book.findByIdAndRemove({slug: req.params.slug});
  res.redirect('/book');
};
exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({slug: req.params.slug});
  let deletedImage = __dirname + '/../public/uploads' + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndRemove({slug: req.params.slug});
  res.redirect('/');
};
