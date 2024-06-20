const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 8888;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/uploaded', express.static(__dirname + '/uploaded'));

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploaded/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024}
});

app.post('/register', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    
    res.render('upload', 
        {
            src: req.file.path,
            userid: req.body.userid,
            userpw: req.body.userpw,
            username: req.body.username,
            userage: req.body.userage
        });
})

app.get('/', (req, res) => {
    res.render('index', {title: '회원가입하기'});
})

app.listen(PORT, () => {
    console.log(`${PORT}포트 실행중`);
})