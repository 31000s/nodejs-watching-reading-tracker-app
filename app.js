const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const methodOvveride = require('method-override');
const fileUpload = require('express-fileupload');

const Movie = require('./models/Movie');
const Serie = require('./models/Series');
const Book = require('./models/Book');

const pageRoutes = require('./routes/pageRoute');
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
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: `${ayarlar.mongodbURL}` }),
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});

app.use('/', pageRoutes);

app.listen(8000, () => {
  console.log('Sunucu Başlatıldı');
});
