// const {utils: {sayHello}} = require('./utilite.js');

// console.log(sayHello());

// const fs = require('fs').promises;

// fs.readFile('./text.txt', 'utf-8')
//             .then(data => console.log(data));

const _ = require('lodash');

console.log(`${_.random(1, 10, false)}`);
