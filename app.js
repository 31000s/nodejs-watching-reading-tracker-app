const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOvveride = require('method-override')

const Movie = require('./models/Movie')
const Serie = require('./models/Series')
const Book = require('./models/Book')

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOvveride('_method'));

app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/movie', async (req, res) => {
    const Movies = await Movie.find({})
    res.render('movie', {
        Movies
    });
});

app.get('/serie', async (req, res) => {
    const Series = await Serie.find({})
    res.render('serie', {
        Series
    });
  });

app.get('/book', async (req, res) => {
    const Books = await Book.find({})
    res.render('book', {
        Books
    });
  });

app.get('/add', (req,res) => {
    res.render('add');
});

//Page

app.get('/movie/:id', async (req,res) => {
    const moviePage = await Movie.findById(req.params.id)
    res.render('moviePage', {
        moviePage
    })
})

app.get('/serie/:id', async (req,res) => {
    const seriePage = await Serie.findById(req.params.id)
    res.render('seriePage', {
        seriePage
    });
});


app.get('/book/:id', async (req,res) => {
    const bookPage = await Book.findById(req.params.id)
    res.render('bookPage', {
        bookPage
    });
});

//Add
app.post('/movies', async (req,res) =>{
    await Movie.create(req.body);
    res.redirect('/')
});

app.post('/series', async (req,res) =>{
    await Serie.create(req.body);
    res.redirect('/')
});

app.post('/books', async (req,res) =>{
    await Book.create(req.body);
    res.redirect('/')
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
