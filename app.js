const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
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

<<<<<<< HEAD
app.listen(3000, () => {
    console.log('Sunucu Başlatıldı');
=======
app.listen(process.env.PORT ||3000, () =>{
    console.log("Port Başlatıldı");
>>>>>>> 3b20682d2768ddbd04802383f9258917d42a81a6
});
