const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify')

const SeriesSchema = new Schema({
    title: { type: String },
    subtitle: { type: String },
    serial: { type: String },
    status: { type: String },
    other: { type: String },
    image: { type: String },
	dateCreated: {
		type: Date,
		default: Date.now,
	  },
	slug: {
		type: String,
		unique: true
	}
});


SeriesSchema.pre('validate', function(next){
	this.slug= slugify(this.title, {
		lower: true,
		strict: true
	})
	next();
});

const Series = mongoose.model('Series', SeriesSchema);

module.exports = Series;