const isValidUrlFormat = (url) => {
	const urlPattern = /^(https?):\/\/[^\s\/$.?#].[^\s]*$/;

	return urlPattern.test(url);
};

module.exports = isValidUrlFormat;
