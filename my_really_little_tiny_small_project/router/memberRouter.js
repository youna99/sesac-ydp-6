const express = require('express');
const router = express.Router();
const controller = require('../controller/memberController');

//members page 요청
router.get('/', controller.showMember);
// 회원 존재 여부 체크
router.post('/check',controller.checkMember);
// 회원 가입 요청
router.post('/',controller.signupMember);
// 회원 정보 수정 요청
router.patch('/', controller.updateMember);
// 회원 정보 삭제 요청
router.delete('/:id', controller.deleteMember);
// 로그인 요청
router.post('/login', controller.signinMember);
// 회원 정보 열람 요청
router.get('/profile/:id', controller.profile);

// 회원정보 전체 열람, 사용안함
// router.get('/list', controller.showMembers);

module.exports = router;