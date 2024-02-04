const dns = require('node:dns');

const isInvalidUrl = (url) => {
	const domain = url.replace(/^https?:\/\//, '');

	dns.lookup(domain, async (err) => err);
};

module.exports = isInvalidUrl;
