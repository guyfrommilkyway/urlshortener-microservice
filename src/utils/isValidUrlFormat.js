const isValidUrlFormat = (url) => {
	const urlPattern =
		/^(https?:\/\/)([a-zA-Z0-9-]+\.)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

	console.log(urlPattern.test(url));

	return urlPattern.test(url);
};

module.exports = isValidUrlFormat;
