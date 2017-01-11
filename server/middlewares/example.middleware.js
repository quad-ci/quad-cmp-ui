'use strict';

exports.test = (req, res, next) => {
  if (1 + 1 === 2) {
    next();
  } else {
    res.status(500).json({ error: 'Math stopped working' });
  }
};
