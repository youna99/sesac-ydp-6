const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8888;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(cookieParser());
const cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 1000,
    signed: false,
};

app.get('/', (req, res) => {
    const popup = req.cookies.popup || '';
    res.render('index', { popup })
});

app.post('/setCookie', (req, res) => {
    res.cookie('popup', 'hide', cookieConfig);
    res.send('쿠키 설정 성공!');
});

app.listen(port, () => {
    console.log(`${port} 실행중` );
});