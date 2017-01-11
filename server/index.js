'use strict';

require('dotenv').config();

const app      = require('./app');
const fs       = require('fs');
const join     = require('path').join;
const mongoose = require('mongoose');
const config   = require('../config');

const port   = process.env.PORT || 9000;
const models = join(__dirname, 'models');

// Bootstrap models
fs.readdirSync(models)
  .filter(file => file.search(/^[^\.].*\.js$/) !== -1)
  .forEach(file => require(join(models, file)));

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function connect() {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect(config.db, options).connection;
}

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log(`App listening on port ${port}`);
}
