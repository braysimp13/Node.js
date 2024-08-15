const logEvents = require('./logEvent');

const EventEmitter = require('events');

const http = require('http');
const p = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
class Emitter extends EventEmitter {};

const PORT = process.env.PORT || 3500;

const server = http.createServer((req,res) =>
{
    console.log(req.url, req.method);

   const extension = path.extname(req.url);

   let contentType;

   switch (extension) {
        default:
            contentType = 'text/html'
   }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const myEmitter = new Emitter();
/*
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted!\n');
}, 2000
)
*/