// path 모듈

const path = require('path');

console.log(path.join('a', 'b', 'index.html')); // a/b/index.html
console.log(path.join('/a', 'b', 'index.html')); // /a/b/index.html
console.log(path.join('/a', 'b', '../index.html')); // /a/index.html

console.log(path.join(__dirname, 'data.json')); // /Users/sba/Documents/github/sesac-ydp-6/path_module/data.json

// join과 resolve 차이
console.log(path.join('a', 'b', 'index.html')); // a/b/index.html 상대경로
console.log(path.resolve('a', 'b', 'index.html')); // /Users/sba/Documents/github/sesac-ydp-6/path_module/a/b/index.html 절대경로