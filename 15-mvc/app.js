// router 불러오는 부분
// -> 특정 시작 url의 역할 구분

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// routes/index.js를 읽음
// 즉 ./routes/index.js파일에서 Router객체를 가져옴
const indexRouter = require('./routes/index'); // index는 생략 가능
app.use('/', indexRouter); // 기본 요청 주소: "localhost: PORT"
// 즉 기본 요청 주소로 들어오는 모든 요청은 indexRouter처리

const userRouter = require('./routes/user'); // 이 파일로부터 가져온 정보
app.use('/user', userRouter); // 기본 요청 주소 "localhost: PORT/user"

// 404
// 맨 마지막 라우트(주소)로 선언: 그렇지 않으면 나머지 라우팅이 전부 무시됨!!
// * : get에 대한 모든 요청인데 위에 주소를 제외하고..!
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://locallhost:${PORT}`);
});