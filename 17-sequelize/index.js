// 진입점 파일
const express =require('express')
const app= express();
const PORT= 8000;
const router= require('./routes/index')
const playerRouter= require('./routes/player')
const {sequelize}= require('./models')
app.set('view engine','ejs')
app.set('views', './views')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/',router)
app.use('/players',playerRouter)
sequelize
//force: true; 강제화 함: 서버실행 때마다 테이블을 재생성
//force: flas; 서버 실행 시 테이블이 없으면 생성
.sync({force: false})
.then(()=>{
    app.listen(PORT,()=>{
        console.log('Database connection succeeded');
        console.log(`Server is runnint! prot number is ${PORT}`);
    });
})
.catch((err) => {
    console.error(err);
});