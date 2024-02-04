const isValidUrlFormat = (url) => {
	const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

	const url = 'http://www.example.com';

	return urlPattern.test(url);
};

module.exports = isValidUrlFormat;
