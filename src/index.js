// packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// db
require('./db/mongoose');

// routes
const routes = require('./api/v1/routes');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/views/index.html');
});

app.use(routes);

app.listen(process.env.PORT, function () {
	console.log(`Application is running on port ${process.env.PORT}`);
});
