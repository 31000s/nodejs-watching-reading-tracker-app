const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');



exports.indexPage = (req, res) => {

  res.status(200).render('index', {
    page: "index"
  });
};
exports.moviePage = async (req, res) => {
  const Movies = await Movie.find({});
  
  res.status(200).render('movie', {
    Movies,
    page: "movie"
  });
};
exports.seriePage = async (req, res) => {

  const Series = await Serie.find({});
  res.status(200).render('serie', {
    Series,
    page: "serie"
  });
};

exports.bookPage = async (req, res) => {

  const Books = await Book.find({});
  res.status(200).render('book', {
    Books,
    page: "book"
  });
};

exports.addPage = (req, res) => {
  res.status(200).render('add', {
    page: "add"
  });
};
