// 경로를 controller와 연결

const express = require('express');
const controller = require('../controller/Cmain'); // controller를 불러옴.
// const { getMain, getComments, getComment}  = require('../controller/Cmain');
const router = express.Router(); // 새로운 라우터 객체 생성 // 여러 라우트를 그룹화

// console.log('--- routes/index.js ---');
// console.log(controller); // { getMain: [Function (anonymous)], getComments: [Function (anonymous)], getComment: [Function (anonymous)]}
// // 객체라 구조분해할당 가능


// 기본 요청 주소: "localhost: PORT"

// GET localhost: PORT/
router.get('/', controller.getMain);
// router.get('/', {getMain});

// GET localhost: PORT/comments
router.get('/comments', controller.getComments);
// router.get('/comments', {getComments});

// GET localhost: PORT/comment
router.get('/comment/:id', controller.getComment);
// router.get('/comment/:id', {getComment});

module.exports = router; // 라우터 모듈을 내보냄