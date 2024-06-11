/**
 * url 모듈은 웹주소를 읽어온다. 읽어온 내용을 구문분석하여 주소의 각 부분으로 나누고 객체로 변환한다.
 */

// let addr = 'http://localhost:8000/example.htm?year=2024&month=feb';
// let addr = 'http://localhost:8000/demo.htm?id=2024&pw=feb';
// let q = url.parse(addr, true);
// // console.log(q);
// console.log(q.pathname);// 경로와 파일이름/example.htm
// console.log(q.search); // ?year=2024&month=feb
// let qdate = q.query; 
// console.log(qdate); //{ year: '2024', month: 'feb'}
// console.log(qdate.month); // 기존쿼리에서 month에 해당하는것만 출력  // feb


const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
    let q = url.parse(req.url, true)
    let filename = "." + q.pathname;
    
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end('404 Not found')
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            return res.end();
        }
    })
}).listen(8000, () => {
    console.log('8000 서버 실행');
})