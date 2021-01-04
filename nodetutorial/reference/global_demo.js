console.log(__dirname);

// C:\Users\richard\Desktop\Web Development\nodetutorial

console.log(__filename);

// C:\Users\richard\Desktop\Web Development\nodetutorial\global_demo.js

console.log(exports);

// {}

let a = 'Hello World';
module.exports = a;

console.log(module);

/*  
Module {
  id: '.',
  path: 'C:\\Users\\richard\\Desktop\\Web Development\\nodetutorial',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\richard\\Desktop\\Web Development\\nodetutorial\\global_demo.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\richard\\Desktop\\Web Development\\nodetutorial\\node_modules',
    'C:\\Users\\richard\\Desktop\\Web Development\\node_modules',
    'C:\\Users\\richard\\Desktop\\node_modules',
    'C:\\Users\\richard\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
*/

console.log(module.path);

// C:\Users\richard\Desktop\Web Development\nodetutorial

console.log(module.exports);


// With additional export code at line 13
