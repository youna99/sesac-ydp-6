const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// 기본 요청 경로: locallhost:PORT

router.get('/', controller.index);

module.exports = router;