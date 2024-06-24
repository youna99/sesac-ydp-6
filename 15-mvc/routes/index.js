const express = require('express');
const controller = require('../controller/Cmain');
// const { getMain, getComments, getComment}  = require('../controller/Cmain');
const router = express.Router();

console.log('--- routes/index.js ---');
console.log(controller); // { getMain: [Function (anonymous)], getComments: [Function (anonymous)], getComment: [Function (anonymous)]}
// 객체라 구조분해할당 가능


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

module.exports = router;