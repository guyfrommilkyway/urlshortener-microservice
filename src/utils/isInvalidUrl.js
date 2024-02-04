const dns = require('node:dns');

const isInvalidUrl = (url) => {
	const domain = url.replace(/^https?:\/\//, '');

	dns.lookup(domain, async (err, address) => {
		if (err) return err;

		return address;
	});
};

module.exports = isInvalidUrl;
