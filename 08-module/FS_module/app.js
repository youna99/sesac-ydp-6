const fs = require('fs');
// console.log(fs);

// // 형식 fs.mkdir(path, module, callback)

// const path = require('path');
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) {
//         return console.error(err);
//     }
//     console.log('디렉토리 생성 완료');
// })


// const path = require('path');
//  fs.rmdir(path.join(__dirname, 'test'), (err) => {
//      if(err) {
//          return console.error(err);
//      }
//      console.log('디렉토리 삭제 완료');
// })

const path = require('path');
fs.mkdir(path.join(__dirname, 'demon'), (err) => {
    if(err) {
        return console.error(err);
    }
    console.log("폴더 생성 완료");
})