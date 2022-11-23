const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');

exports.indexPage = async (req, res) => {
    res.render('index');
  }
exports.moviePage = async (req, res) => {
    const Movies = await Movie.find({});
    res.render('movie', {
      Movies,
    });
  }
exports.seriePage= async (req, res) => {
    const Series = await Serie.find({});
    res.render('serie', {
      Series,
    });
  }
  
exports.bookPage = async (req, res) => {
    const Books = await Book.find({});
    res.render('book', {
      Books,
    });
  }
  
exports.addPage = (req, res) => {
    res.render('add');
  }