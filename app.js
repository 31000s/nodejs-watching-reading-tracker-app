const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');

const Movie = require('./models/Movie');
const Serie = require('./models/Series');
const Book = require('./models/Book');

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const Movies = await Movie.find({});
  const Series = await Serie.find({});
  const Books = await Book.find({});
  res.render('index', {
    Movies,
    Series,
    Books,
  });
});

app.get('/movies', (req, res) => {
  res.render('movies');
});

app.get('/series', (req, res) => {
  res.render('series');
});

app.get('/add', (req, res) => {
  res.render('add');
});

//ADD
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

app.listen(3000, () => {
  console.log('Sunucu Başlatıldı');
});
