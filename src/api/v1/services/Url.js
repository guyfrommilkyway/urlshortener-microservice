const random = require('randomstring');

const Url = require('../models/Url');

const createUrl = async (original) => {
	try {
		const url = new Url({
			original_url: original,
			short_url: random.generate({ length: 8, charset: 'alphabetic' }),
		});

		await url.save();

		return { original_url: url.original_url, short_url: url.short_url };
	} catch (err) {
		console.log(err);

		return err;
	}
};

const findUrl = async (short) => {
	try {
		const url = await Url.findOne({ short_url: short }).lean();

		return url ? url.original_url : null;
	} catch (err) {
		return err;
	}
};

module.exports = { createUrl, findUrl };
