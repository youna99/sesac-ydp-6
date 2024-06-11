const http = require('http');
const url = require('url');
const fs = require('fs');

//127.0.0.1:3000포트로 접속해서 winter.html, summer.html을 브라우저로
//req 요청, res 응답
http.createServer(function(req, res) {
    // req에 사용자가 원하는 파일을 넣는다.
    let q = url.parse(req.url, true);
    // 파일이름 가져오기
    let filename = '.' + q.pathname;
    // 파일 읽어오기
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end('File not found');
        }
        //응답 파일 해석 방법
        res.writeHead(200, {'Content-Type' : 'text/html'});
        // 읽기
        res.write(data);
        // 끝내기
        return res.end();
    })
}).listen(3000, () => {
    console.log('3000포트에서 서버 실행중');
})