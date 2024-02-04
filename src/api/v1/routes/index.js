const express = require('express');

const { createUrl, findUrl } = require('../services/Url');
const isInvalidUrl = require('../../../utils/isInvalidUrl');
const isValidUrlFormat = require('../../../utils/isValidUrlFormat');

const router = new express.Router();

router.post('/api/shorturl', async (req, res) => {
	try {
		const { url } = req.body;

		if (isInvalidUrl(url) || !isValidUrlFormat(url)) throw new Error();

		const { original_url, short_url } = await createUrl(url);

		res.json({ original_url, short_url });
	} catch (err) {
		console.log(err);

		res.json({ error: 'invalid url' });
	}
});

router.get('/api/shorturl/:url?', async (req, res) => {
	try {
		const { url } = req.params;

		if (!url || !isValidUrlFormat(url)) throw new Error();

		const originalUrl = await findUrl(url);

		if (!originalUrl) throw new Error();

		res.redirect(originalUrl);
	} catch (err) {
		console.log(err);

		res.json({ error: 'invalid url' });
	}
});

module.exports = router;
