const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
	original_url: { type: String, required: true },
	short_url: { type: String, required: true },
});

const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;
