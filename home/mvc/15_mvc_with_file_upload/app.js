// router 불러오는 부분

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', 
    express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

// router/index.js 파일 읽기
const indexRouter = require('./routes/index');
app.use('/', indexRouter);


app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
  