const fs = require('fs');

const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');

exports.serieDelete = async (req, res) => {
  const serie = await Serie.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/../public/uploads' + serie.image;
  fs.unlinkSync(deletedImage);
  await Serie.findByIdAndRemove(req.params.id);
  res.redirect('/serie');
};
exports.movieDelete = async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/../public/uploads' + movie.image;
  fs.unlinkSync(deletedImage);
  await Movie.findByIdAndRemove(req.params.id);
  res.redirect('/movie');
};
exports.bookDelete = async (req, res) => {
  const book = await Book.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/../public/uploads' + book.image;
  fs.unlinkSync(deletedImage);
  await Book.findByIdAndRemove(req.params.id);
  res.redirect('/book');
};
exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/../public/uploads' + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
