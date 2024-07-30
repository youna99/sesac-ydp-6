const express = require('express');
const router = express.Router();
const controller = require('../controller/boardController');
// 게시판 페이지 요청
router.get('/', controller.showBoards);
// 게시판 상세 페이지 요청
router.get('/:id', controller.showBoard);
// 게시글 등록 요청
router.post('/', controller.postBoard);
// 게시글 수정 요청
router.patch('/', controller.updateBoard);
// 게시글 삭제 요청
router.delete('/:id', controller.deleteBoard);

module.exports = router;