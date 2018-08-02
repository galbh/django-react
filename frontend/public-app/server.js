const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');
const internalApi = require('./server/routes/internal');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('', api);
app.use('/internal', internalApi);

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/private_path.html`));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

/* eslint-disable */
server.listen(port, () => console.log(`API running on localhost:${port}`));
/* eslint-disable */
