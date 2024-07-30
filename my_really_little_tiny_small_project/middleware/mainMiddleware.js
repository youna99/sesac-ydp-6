const express = require('express');
const session = require('express-session');
exports.mainMiddleware = (app)=>{

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.set('view engine','ejs');
  app.set('views', 'views');
  app.use('/public',express.static('public'));

  app.use( '/st' , express.static('public/css') ); // 정적 파일을 찾아 올 디렉토리 설정
  app.use( '/sc' , express.static('public/js') ); // 정적 파일을 찾아 올 디렉토리 설정
  app.use( '/im' , express.static('public/source') ); // 정적 파일을 찾아 올 디렉토리 설정  

  app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { 
      httpOnly : true,
      secure: false,
      maxAge: 10 * 60 * 1000 //이거 ms 단위임;; 처음에 1000 지정했는데 1초 , 이젠 10분
    } 
  }));
}