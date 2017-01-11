'use strict';

const mongoose = require('mongoose');
const { wrap: async } = require('co');
// const User = mongoose.model('User');

exports.find = async(function* (req, res) {
  const users = [
    { name: 'Jim' },
    { name: 'Joe' }
  ];

  res.status(200).json({ users });
});
