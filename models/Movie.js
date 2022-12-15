const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const MovieSchema = new Schema({
  title: { type: String},
  subtitle: { type: String},
  description: { type: String },
  serial: { type: String  },
  status: { type: String },
  image: { type: String },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});

MovieSchema.pre('validate', function (next) {
  this.slug = slugify(this.title, {
    lower: true,
    strict: true,
  });
  next();
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
