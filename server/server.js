const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/', express.static(__dirname + '/../client/HTML'));

app.listen(port, () => console.log(`Listening on port ${port}`));