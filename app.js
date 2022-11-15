const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/books', (req, res) => {
    res.render('books');
});

app.get('/movies', (req, res) => {
    res.render('movies');
});

app.get('/series', (req, res) => {
    res.render('series');
});

app.listen(3000, () =>{
    console.log("Sunucu Başlatıldı");
});
