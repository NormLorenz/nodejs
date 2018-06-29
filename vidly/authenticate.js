const log = require('debug')('app:log');

function authenticate(request, response, next) {
  log('authenticating...');
  next();
}

module.exports = authenticate;
