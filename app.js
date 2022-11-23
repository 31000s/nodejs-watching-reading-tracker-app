const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOvveride = require('method-override');
const fileUpload = require('express-fileupload');

const Movie = require('./models/Movie');
const Serie = require('./models/Series');
const Book = require('./models/Book');

const PagesControllers = require('./controllers/PagesControllers');
const PagesIdControllers = require('./controllers/PagesIdControllers');
const AddControllers = require('./controllers/AddControllers');
const EditControllers = require('./controllers/EditControllers');
const UploadControllers = require('./controllers/UploadControllers');
const DeleteControllers = require('./controllers/DeleteControllers');

const ayarlar = require('./token.json');

mongoose.connect(`${ayarlar.mongodbURL}`); //MONGODB VERİTABANI BAĞLANTISI
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

//Pages
app.get('/', PagesControllers.indexPage);
app.get('/movie', PagesControllers.moviePage);
app.get('/serie', PagesControllers.seriePage);
app.get('/book', PagesControllers.bookPage);
app.get('/add', PagesControllers.addPage);

//Page:id
app.get('/movie/:id', PagesIdControllers.moviePage);
app.get('/serie/:id', PagesIdControllers.seriePage);
app.get('/book/:id', PagesIdControllers.bookPage);
//Delete
app.delete('/serie/:id', DeleteControllers.serieDelete);
app.delete('/movie/:id', DeleteControllers.movieDelete);
app.delete('/book/:id', DeleteControllers.bookDelete);
//Upload
app.post('/series', UploadControllers.seriesUpload);
app.post('/movies', UploadControllers.moviesUpload);
app.post('/books', UploadControllers.booksUpload);
//Add
app.post('/movies', AddControllers.moviesAdd);
app.post('/series', AddControllers.seriesAdd);
app.post('/books', AddControllers.booksAdd);
//Edit
app.get('/movie/edit/:id', EditControllers.movieEdit);
app.put('/movie/:id', EditControllers.moviePage);

app.get('/serie/edit/:id', EditControllers.serieEdit);
app.put('/serie/:id', EditControllers.seriePage);

app.get('/book/edit/:id', EditControllers.bookEdit);
app.put('/book/:id', EditControllers.bookPage);

app.listen(3000, () => {
  console.log('Sunucu Başlatıldı');
});
