const http = require('http');
// console.log(http); 노드가 기본적으로 가지고 있는 모듈이기에 따로 설치 필요 없음.
// http모듈이 가지고 있는 서버 만드는 기능을 사용해보자.

const server = http.createServer();
// http에 createServer함수를 이용해서 서버 만들 수 있다.

server.listen(8000, function(){
    console.log('8000포트에서 서버 실행 중');
}) // http에 listen함수를 이용해서 8000포트를 만들었다.
// 신호가 들어왔다는 감지를 하는 역할