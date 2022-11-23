const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    subtitle: String,
    description: String,
    serial: String,
    status: String,
    image: String
});
const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;