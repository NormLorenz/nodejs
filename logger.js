// there are web site that provide logging as a service in the cloud - https://papertrailapp.com/account
console.log(__filename);
console.log(__dirname);

const EventEmitter = require('events');

// const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // send an http request
    console.log(message);

    // raise an event
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}

module.exports = Logger;
