const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const config = require('../webpack.config');

const app = express();
const compiler = webpack(config);

const PORT = process.env.PORT || 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log, // eslint-disable-line
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

/* BODY-PARSING MIDDLEWARE */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* SERVER LISTENS */
app.listen(PORT, () => {
  console.log('SERVER LISTENING ON PORT: ', PORT); // eslint-disable-line
});

/* STATIC PATHS */
app.use(express.static(path.join(__dirname, '..', 'client/src')));
app.use(express.static(path.join(__dirname, '..', 'public')));

/* REQUIRE API INDEX */
app.use('/api', require('./api'));

app.get(/^\/(?!api\/)(?!assets\/)(?!.*\.json$).*/, (req, res) => {
  res.sendFile(path.join(compiler.outputPath, 'index.html'));
});

/* ERROR HANDLING MIDDLEWARE */
app.use('/', (err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).send(err.message || 'INTERNAL SERVER ERROR');
});
