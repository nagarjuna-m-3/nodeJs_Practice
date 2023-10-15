const path=require('path');
const os=require('os');
const fs=require('fs');
const http=require('http');

// EventEmitter is a class hence capital syntax
const EventEmitter = require('events')
const emitter=new EventEmitter();

console.log(path.parse('./new.js'))
console.log(`free mem: ${os.freemem}`)
console.log(`Total mem: ${os.totalmem}`)

fs.readdir('./',(err,res)=>{
    if(err) console.error(err);
    else console.log(res)
})


// register a listener
emitter.on('test',()=>{
    console.log('emitter called');
})

// emit a event
emitter.emit('test')

const server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.write('hello world');
    res.end()
   }
})

server.listen(3000);
console.log('listening on port 3000')