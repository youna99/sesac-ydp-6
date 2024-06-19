const express = require('express');
const app = express();
const PORT = 8888;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('result', {title: '영화 API 가져와서 실행하기'})
})

app.listen(PORT, () => {
    console.log(`${PORT}포트 실행`);
})