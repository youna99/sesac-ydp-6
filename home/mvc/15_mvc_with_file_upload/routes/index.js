// 경로를 controller와 연결

const express = require('express');
const controller = require('../controller/Cfile');
const router = express.Router();
const uploadMiddlewares = require('../middlewares/upload-middleware');

router.get('/', controller.getmain);

router.post("/upload", uploadMiddlewares.uploadSingle, controller.postUploaded);

// multer객체.array(): 여러 파일을 하나의 인풋에 업로드
router.post('/upload/array', uploadMiddlewares.uploadArray, controller.postUploadArray);

// multer객체.fields(): 여러 파일을 각각의 인풋에 업로드
router.post('/upload/fields', uploadMiddlewares.uploadFields, controller.postUploadFields);

// 동적 폼 업로드
router.post('/dynamicFile', uploadMiddlewares.uploadDynamic, controller.postDynamicFile);

module.exports = router;