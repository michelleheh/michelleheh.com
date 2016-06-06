const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const handlers = require('./handlers');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', express.static(__dirname + '/../client/HTML'));
app.post('/contact', handlers.contact);

app.listen(port, () => console.log(`Listening on port ${port}`));