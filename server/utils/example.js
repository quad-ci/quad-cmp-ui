'use strict';

module.exports = {
  test
};

function test(res, status) {
  if (status) return res.status(status).json(obj);
  res.json(obj);
}
