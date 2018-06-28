
// const path = require('path');

// const pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require('os');

// const totalMem = os.totalmem();
// const freeMem = os.freemem();

// console.log(`total memory ${totalMem}`);
// console.log(`free memory ${freeMem}`);

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', (error, result) => {
//   if (error) console.log(`error ${error}`);
//   else console.log(`result ${result}`);
// });

const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener
emitter.on('messageLogged', (e) => {
  console.log('listener called', e);
  console.log(`listener called ${e.id}`);
  console.log(`listener called ${e.url}`);
});

// needs to be pared with a listener
emitter.emit('messageLogged', { id: 1, url: 'http://' });
