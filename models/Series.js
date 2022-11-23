const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeriesSchema = new Schema({
    title: String,
    subtitle: String,
    serial: String,
    status: String,
    other: String,
    image: String
});

const Series = mongoose.model('Series', SeriesSchema);

module.exports = Series;