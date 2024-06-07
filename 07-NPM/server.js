/*const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html')
    fs.readFile('index.html', (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(date);
        }
    })
});
server.listen(8000, () => {
    console.log('8000서버 실행');
})*/


const http =require('http')
const fs = require('fs')
const server =http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    fs.readFile('./views/index.html',(err, data)=>{  // 이메서드를 이용해서 index.html 파일 가져와
        if (err){
            console.log(err);
            res.end();
        }else{
            res.end(data)
        }
    })
});
server.listen(8000,()=>{
console.log('8000서버 실행')
})

