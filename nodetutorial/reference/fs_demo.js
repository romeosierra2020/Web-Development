const fs = require('fs');
const path = require('path');


// Create folder called test in current directory asynchronusley

fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if(err) throw err;
    console.log('Folder Created');
});

// Create and write to file

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', (err) => {
    if(err) throw err;
    console.log('Written');
});

// Overwrite text file

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), ' I love JS', (err) => {
    if(err) throw err;
    console.log('Written');
    //code inserted from below:
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love JS', (err) => {
        if(err) throw err;
        console.log('Written');
    });
});

// Append text file (inserted as into callback as async)
/*
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love JS', (err) => {
    if(err) throw err;
    console.log('Written');
});*/

// Read File

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});

// Rename file

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello1.txt'), (err) => {
    if(err) throw err;
    console.log('Renamed');
});