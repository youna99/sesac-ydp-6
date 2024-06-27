// TODO: 라우트 설정

const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// (1) GET / => localhost:PORT/user
router.get('/', controller.main);

// (2) GET /signup => localhost:PORT/user/signup
router.get('/signup', controller.getSignup);

// (3) POST /signup => localhost:PORT/user/signup
router.post('/signup', controller.postSignup);

// (4) GET /signin => localhost:PORT/user/signin
router.get('/signin', controller.getSignin);

// (5) POST /signin => localhost:PORT/user/signin
router.post('/signin', controller.postSignin);

// (6) POST /profile => localhost:PORT/user/profile
router.post('/profile', controller.postProfile);

// (7) PATCH /user/profile/edit => localhost:PORT/user/profile/edit
router.patch('/profile/edit', controller.patchProfile);

// (8) DELETE /user/profile/delete => localhost:PORT/user/profile/delete
router.delete('/profile/delete', controller.deleteProfile);

module.exports = router;