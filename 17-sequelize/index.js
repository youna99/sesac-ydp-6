const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const { sequelize } = require('./models/index');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', router);

sequelize
    // force: true; 서버 실행때마다 테이블을 재생성
    // force: false; 서버 실행시 테이블이 없으면 생성
    .sync({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connection succeeded!')
            console.log(`Server is running! Port number is ${PORT} ...`);
        });
    })
    .catch((err) => {
        console.error(err);
    });