const express = require('express');
const router = express.Router();
const controller = require('../controller/mainController');

// 메인 페이지 요청
router.get('/', controller.showMain);
// 로그아웃 요청
router.get('/logout', controller.logout);


module.exports = router;