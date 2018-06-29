const log = require('debug')('app:log');

function logger(request, response, next) {
  log('logging...');
  next();
}

module.exports = logger;
