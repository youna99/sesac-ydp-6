const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {title:'폼 실습'})
});

// app.get('/getForm', (req, res) => {
//     console.log(req.query);
//     res.render('getform', {title: 'GET 요청 결과', userInfo: req.query})
// });

app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('postform', {title: 'POST 요청 결과', userInfo: req.body})
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})