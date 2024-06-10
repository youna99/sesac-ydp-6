// 디렉토리 읽기
// const { log } = require('console');
const { log } = require('console');
const fs = require('fs');
// fs.readdir('./', function(err, files) {
//     if(err){
//         console.log("에러", err);
//     } else {
//         console.log("결과는", files);
//     }
// })


// 파일 생성 -> 내용이 있는 파일
// fs.writeFile('mynewfile1.txt', 'Hello world', function(err) {
//     if(err) throw err;
//     console.log('파일이 생성됨.');
// })

// open(), w를 이용해서 파일 생성. 내용이 없는 빈 파일
// fs.open('mynewfile2.txt','w', function(err, file) {
//     if(err) throw err;
//     console.log('파일이 생성됨.');
// })

// 파일 생성 appendFile() 추가하는 명령어로 기존 파일이 있다는 것을 전제
fs.appendFile('mynewfile1.txt', 'Kim', function(err) {
    if(err) throw err;
    console.log('파일이 생성됨.');
})