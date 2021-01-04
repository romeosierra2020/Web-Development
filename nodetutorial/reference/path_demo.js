const path = require('path');

console.log(path.win32.basename(__filename));

// path_demo.js

console.log(path.win32.basename(__filename, '.js'));
// path_demo

console.log(path.dirname(__filename));
// C:\Users\richard\Desktop\Web Development\nodetutorial

console.log(path.extname(__filename));

// .js

console.log(path.sep);

// \

console.log(path.join(__dirname, 'path_demo.js'));

// C:\Users\richard\Desktop\Web Development\nodetutorial\path_demo.js