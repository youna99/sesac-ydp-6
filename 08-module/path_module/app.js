// /**
//  * path.join() : 여러인자를 넣으면 하나의 경로로 합쳐진다.
//  * path.resolve() : path.join() 비슷하지만 약간의 차이
//  * path.parse(): 파일 경로를 root, dir, base, est, name 으로 구분
//  * path.format(): path.parse()한 객체를 파일 경로로 합친다.
//  */

// const path = require('path');
// //console.log(abc);

// console.log(__dirname); // /Users/sba/Documents/github/sesac-ydp-6/path_module
// console.log(path.basename(__dirname)); // 현재 디텍토리의 파일 이름 // path_module
// console.log(__filename); // /Users/sba/Documents/github/sesac-ydp-6/path_module/app.js
// console.log(path.basename(__filename)); // app.js
// console.log(path.join('a', 'b', 'index.html')); //a/b/index.html

// // let pathname = path.parse('./home/user/dir/file.txt') // 구문 분석(해석)
// // console.log(pathname);
// // {
// //   root: '',
// //   dir: './home/user/dir',
// //   base: 'file.txt',
// //   ext: '.txt',
// //   name: 'file'
// // }

// let pathname = path.parse('./home/user/dir/file.txt');
// console.log(pathname);
// console.log(path.extname('./home/user/dir/file.txt')); // 확장자 이름
// console.log(path.basenamename('./home/user/dir/file.txt')); // 파일 이름


const path= require('path');
//console.log(abc);
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
// console.log(__dirname);
// console.log(__filename);
 console.log(path.join('a','b','index.html'));
 console.log("----------------------------");
 let pathname= path.parse('./home/user/dir/file.txt')
 console.log(pathname);
 //parse: 구문 분석(분해) 역할
 console.log("----------------------------");
console.log( path.extname('./home/user/dir/file.txt')); // 확장자 이름
console.log( path.basename('./home/user/dir/file.txt')); // 파일 이름