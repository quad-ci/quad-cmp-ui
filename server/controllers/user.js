'use strict';

const mongoose = require('mongoose');
const { wrap: async } = require('co');
// const User = mongoose.model('User');

exports.find = async(function* (req, res) {
  console.log('calling find()...')
  const users = [
    { name: 'Jim' },
    { name: 'Joe' }
  ];
  // res.status(200).json({ users });
  // const criteria = { _id };
  // try {
  //   req.profile = yield User.load({ criteria });
  //   if (!req.profile) return next(new Error('User not found'));
  // } catch (err) {
  //   return next(err);
  // }

});
