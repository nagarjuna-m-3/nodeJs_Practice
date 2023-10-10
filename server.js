const http = require('http');
const fs = require('fs');
const HOST_NAME = process.env.HOST_NAME || 'localhost';
const PORT = process.env.PORT || 3000;

// const server=http.createServer((req,res)=>{
//     res.statusCode=200
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World')
// })

// server.listen(PORT,HOST_NAME,()=>{
//     console.log(`server running at http://${HOST_NAME}:${PORT}`)
// })

// console.log(__dirname);
// console.log(__filename);

// const server=http.createServer((req,res)=>{
//     res.statusCode=200
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hi Heloo</h1>')
// })

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    let path = ''
    switch (req.url) {
        case '/':
            path = './sample.html'
            res.statusCode = 200
            break;
        case '/about':
            path = './about.html'
            res.statusCode = 200
            break;
        default:
            res.setHeader('Location', '/');
            res.statusCode = 301
    }
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err)
            res.end()
        }
        else {
            res.end(data)
        }
    })
})

server.listen(PORT, HOST_NAME, () => {
    console.log(`server running at http://${HOST_NAME}:${PORT}`)
})