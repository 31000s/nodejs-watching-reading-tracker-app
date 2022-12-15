const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');
const slugify = require('slugify')

//PAGE

exports.moviePage = async (req, res) => {
  const moviePage = await Movie.findOne({slug: req.params.slug});
  res.render('Pages/moviePage', {
    moviePage,
    page: ""
  });
};

exports.seriePage = async (req, res) => {
  const seriePage = await Serie.findOne({slug: req.params.slug});
  res.render('Pages/seriePage', {
    seriePage,
    page: ""
  });
};
exports.bookPage = async (req, res) => {
  const bookPage = await Book.findOne({slug: req.params.slug});
  res.render('Pages/bookPage', {
    bookPage,
    page: ""
  });
};
