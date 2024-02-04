const express = require('express');
const isUrl = require('is-url');

const { createUrl, findUrl } = require('../services/Url');
const isInvalidUrl = require('../../../utils/isInvalidUrl');

const router = new express.Router();

router.post('/api/shorturl', async (req, res) => {
	try {
		const { url } = req.body;

		if (isInvalidUrl(url) || !isUrl(url)) throw new Error();

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

		if (!url) throw new Error();

		const originalUrl = await findUrl(url);

		if (!originalUrl) throw new Error();

		res.redirect(originalUrl);
	} catch (err) {
		console.log(err);

		res.json({ error: 'invalid url' });
	}
});

module.exports = router;
