const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');

//PAGE

exports.moviePage = async (req, res) => {
  const moviePage = await Movie.findById(req.params.id);
  res.render('Pages/moviePage', {
    moviePage,
  });
};

exports.seriePage = async (req, res) => {
  const seriePage = await Serie.findById(req.params.id);
  res.render('Pages/seriePage', {
    seriePage,
  });
};
exports.bookPage = async (req, res) => {
  const bookPage = await Book.findById(req.params.id);
  res.render('Pages/bookPage', {
    bookPage,
  });
};
