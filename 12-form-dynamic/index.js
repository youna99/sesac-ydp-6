const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('dynamic', { title: '동적 폼을 배워보자!' })
})

// ajax
app.get('/ajax', (req, res) => {
    // GET 방식이므로 브라우저에서 URL 쿼리까지 직접 입력해서도 값을 확인 가능
    // ex. http://localhost:8080/ajax?name=션&gender=남자
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// axios
app.get('/axios', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/axios', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// fetch
app.get('/fetch', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/fetch', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})