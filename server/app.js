const express = require('express');
const morgan  = require('morgan');
const path    = require('path');

const app = express();
const env = process.env.NODE_ENV || 'development';
const middleware = require('./middlewares/example.middleware');

// Don't log during tests
// Logging middleware
if (env !== 'test') {
  const logFormat = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms';
  app.use(morgan(logFormat));
}

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router renders the route in the client
app.get('*', middleware.test, (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
