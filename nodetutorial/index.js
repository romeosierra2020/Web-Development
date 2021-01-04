const path = require('path');
const http = require('http');
const fs = require('fs');
const PORT = process.env.port || 5000;

// Create Server

const server = http.createServer((req,res) => {

    let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    let extname = path.extname(filepath);

    let contentType = 'text/html';
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
            default:
                contentType = 'text/html';
                break;
        }
console.log(filepath);
        fs.readFile(filepath, (err, content) => {
            if(err) {
                console.log(err);
                if(err.code == 'ENOENT') {
                    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(content, 'utf8');
                    });
                } else {
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
            } else {
                res.writeHead(200, {'Content-Type': contentType});
                res.end(content, 'utf8');                
            }
        });

 


/*  
// check request and act accordingly

    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) =>{
            if (err) {
                console.log('Error', err);
                throw err;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    } else if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) =>{
            if (err) {
                console.log('Error', err);
                throw err;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    } else if(req.url === '/api/users') {
        const users = [
            {name: 'Fred', age: 20},
            {name: 'Rick', age: 25}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(users));
        }
        */
});

// Start Server

server.listen(PORT, () =>{
    console.log(`Server running on port: ${PORT}`);
});