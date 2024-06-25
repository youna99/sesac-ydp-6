const multer = require('multer');
const path = require('path');

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/'); // 파일을 저장할 경로
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 업로드 크기 제한
});

exports.uploadSingle = uploadDetail.single('userfile');
exports.uploadArray = uploadDetail.array('banana');
exports.uploadFields = uploadDetail.fields([{ name: 'kiwi' }, { name: 'orange' }]);
exports.uploadDynamic = uploadDetail.single('thumbnail');