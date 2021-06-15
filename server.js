const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

const db = require('./app/config/db.config.js');

let router = require('./app/routers/router.js');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/', router);
app.get('/', (req, res) => {
  res.send('Hey there');
});
// Create a Server
const server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
