const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');

exports.indexPage = (req, res) => {
  res.status(200).render('index');
  }
exports.moviePage = async (req, res) => {
    const Movies = await Movie.find({});
    res.status(200).render('movie', {
      Movies,
    });
  }
exports.seriePage= async (req, res) => {
    const Series = await Serie.find({});
    res.status(200).render('serie', {
      Series,
    });
  }
  
exports.bookPage = async (req, res) => {
    const Books = await Book.find({});
    res.status(200).render('book', {
      Books,
    });
  }
  
exports.addPage = (req, res) => {
    res.status(200).render('add');
  }