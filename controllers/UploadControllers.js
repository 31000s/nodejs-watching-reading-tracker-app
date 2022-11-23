const fs = require('fs');
const Movie = require('../models/Movie');
const Serie = require('../models/Series');
const Book = require('../models/Book');

exports.moviesUpload = async (req, res) => {
  const uploadDir = 'public/uploads/movieImage';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath =
    __dirname + '/../public/uploads/movieImage/' + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Movie.create({
      ...req.body,
      image: '/../uploads/movieImage/' + uploadeImage.name,
    });
    res.redirect('/movie');
  });
};

exports.booksUpload = async (req, res) => {
  const uploadDir = 'public/uploads/bookImage';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath = __dirname + '/../public/uploads/bookImage/' + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Book.create({
      ...req.body,
      image: '/../uploads/bookImage/' + uploadeImage.name,
    });
    res.redirect('/book');
  });
};

exports.seriesUpload = async (req, res) => {
  const uploadDir = 'public/uploads/serieImage';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath =
    __dirname + '/../public/uploads/SerieImage/' + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Serie.create({
      ...req.body,
      image: '/../uploads/SerieImage/' + uploadeImage.name,
    });
    res.redirect('/serie');
  });
};
