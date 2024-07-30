const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
// env 변수 설정
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({
  path: path.resolve(__dirname, `./.env.${process.env.NODE_ENV}`),
  override: true,
});

const app = express();
const portNo = process.env.PORT;

const { sequelize } = require('./models/index');
const { mainMiddleware } = require('./middleware/mainMiddleware');
const { routerMiddleware } = require('./middleware/routerMiddleware');


mainMiddleware(app);
routerMiddleware(app);

// 404 핸들링
app.use((req, res) => {
  const user = req.session.user;
  res.status(404).render('404', { 
    title: '죄송합니다! 페이지를 찾을 수 없습니다.', 
    message: '죄송합니다! 페이지를 찾을 수 없습니다.', 
    user: user
  });
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 확인!');
    if (!portNo) {
      console.log('.env 설정 확인 필요합니다.');
    }
    app.listen(portNo, () => {
      console.log(`Server running! port ${portNo} at ${new Date().toLocaleString()}`);
    });
  })
  .catch((err) => {
    console.error('마음이 아픔, DB 에서 몬가 에러가 났음', err);
  });