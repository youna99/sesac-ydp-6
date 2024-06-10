// 파일 읽기

// const fs = require('fs');
// fs.readFile('./input.txt', 'utf-8', function(err, data) {
//     console.log(data);
// })
// // fs.readFile('./input.txt', function(err, data) {
// //     console.log(data);
// // })
// console.log('파일 읽기 완료');
// 비동기 입출력하러가는 사이에 '파일 읽기 완료' 를 먼저 실행함.
// 결과
//파일 읽기 완료
//111
//222
//333


const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf-8'); // 동기
console.log(data);
console.log('파일 읽기 완료');
// fs.readFile('./input.txt', function(err, data) {
//     console.log(data);
// })
