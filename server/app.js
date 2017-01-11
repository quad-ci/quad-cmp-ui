const express    = require('express');
const middleware = require('./middlewares/example.middleware');
const morgan     = require('morgan');
const path       = require('path');
const user       = require('./controllers/user')

const app = express();
const env = process.env.NODE_ENV || 'development';

// Don't log during tests
// Logging middleware
if (env !== 'test') {
  const logFormat = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms';
  app.use(morgan(logFormat));
}

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// API Routes
app.get('/v1/api/user', middleware.test, user.find);

// Always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
