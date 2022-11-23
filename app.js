const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const fs = require('fs');
const methodOvveride = require('method-override');

const fileUpload = require('express-fileupload');

const Movie = require('./models/Movie');
const Serie = require('./models/Series');
const Book = require('./models/Book');

mongoose.connect(
  ''
);

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOvveride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/movie', async (req, res) => {
  const Movies = await Movie.find({});
  res.render('movie', {
    Movies,
  });
});

app.get('/serie', async (req, res) => {
  const Series = await Serie.find({});
  res.render('serie', {
    Series,
  });
});

app.get('/book', async (req, res) => {
  const Books = await Book.find({});
  res.render('book', {
    Books,
  });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/series', async (req, res) => {
  const uploadDir = 'public/uploads/serieImage';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath =
    __dirname + '/public/uploads/SerieImage/' + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Serie.create({
      ...req.body,
      image: '/uploads/SerieImage/' + uploadeImage.name,
    });
    res.redirect('/serie');
  });
});
app.delete('/serie/:id', async (req, res) => {
  const serie = await Serie.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/public' + serie.image;
  fs.unlinkSync(deletedImage);
  await Serie.findByIdAndRemove(req.params.id);
  res.redirect('/serie');
});

app.delete('/movie/:id', async (req, res) => {
    const movie = await Movie.findOne({ _id: req.params.id });
    let deletedImage = __dirname + '/public' + movie.image;
    fs.unlinkSync(deletedImage);
    await Movie.findByIdAndRemove(req.params.id);
    res.redirect('/movie');
  });

  app.delete('/book/:id', async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id });
    let deletedImage = __dirname + '/public' + book.image;
    fs.unlinkSync(deletedImage);
    await Book.findByIdAndRemove(req.params.id);
    res.redirect('/book');
  });

app.post('/movies', async (req, res) => {
  const uploadDir = 'public/uploads/movieImage';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath =
    __dirname + '/public/uploads/movieImage/' + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Movie.create({
      ...req.body,
      image: '/uploads/movieImage/' + uploadeImage.name,
    });
    res.redirect('/movie');
  });
});

app.post('/books', async (req, res) => {
  const uploadDir = 'public/uploads/bookImage';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath = __dirname + '/public/uploads/bookImage/' + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Book.create({
      ...req.body,
      image: '/uploads/bookImage/' + uploadeImage.name,
    });
    res.redirect('/book');
  });
});

//Page

app.get('/movie/:id', async (req, res) => {
  const moviePage = await Movie.findById(req.params.id);
  res.render('moviePage', {
    moviePage,
  });
});

app.get('/serie/:id', async (req, res) => {
  const seriePage = await Serie.findById(req.params.id);
  res.render('seriePage', {
    seriePage,
  });
});

app.get('/book/:id', async (req, res) => {
  const bookPage = await Book.findById(req.params.id);
  res.render('bookPage', {
    bookPage,
  });
});

//Add
app.post('/movies', async (req, res) => {
  await Movie.create(req.body);
  res.redirect('/');
});

app.post('/series', async (req, res) => {
  await Serie.create(req.body);
  res.redirect('/');
});

app.post('/books', async (req, res) => {
  await Book.create(req.body);
  res.redirect('/');
});

//EDİT
app.get('/movie/edit/:id', async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  res.render('movieEdit', {
    movie,
  });
});

app.put('/movie/:id', async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  movie.title = req.body.title;
  movie.subitle = req.body.subtitle;
  movie.description = req.body.description;
  movie.serial = req.body.serial;
  movie.status = req.body.status;
  movie.save();
  res.redirect(`/movie/${req.params.id}`);
});

app.get('/serie/edit/:id', async (req, res) => {
  const serie = await Serie.findOne({ _id: req.params.id });
  res.render('serieEdit', {
    serie,
  });
});

app.put('/serie/:id', async (req, res) => {
  const serie = await Serie.findOne({ _id: req.params.id });
  serie.title = req.body.title;
  serie.subitle = req.body.subtitle;
  serie.other = req.body.other;
  serie.serial = req.body.serial;
  serie.status = req.body.status;
  serie.save();
  res.redirect(`/serie/${req.params.id}`);
});

app.get('/book/edit/:id', async (req, res) => {
  const book = await Book.findOne({ _id: req.params.id });
  res.render('bookEdit', {
    book,
  });
});

app.put('/book/:id', async (req, res) => {
  const book = await Book.findOne({ _id: req.params.id });
  book.name = req.body.name;
  book.author = req.body.author;
  book.description = req.body.description;
  book.publisher = req.body.publisher;
  book.status = req.body.status;
  book.save();
  res.redirect(`/book/${req.params.id}`);
});

app.listen(3000, () => {
  console.log('Sunucu Başlatıldı');
});
