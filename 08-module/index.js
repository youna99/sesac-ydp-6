/**
 * js 엔진, 구글 :  v* + c++ = node.js, 브라우저 밖에서 js 사용
 * 모듈에는 사용자가 만든 모듈, 시스템모듈, 빌드인모듈
 */

// const add = (a,b) => {
    // return a + b
// }
// export해서 다른 파일을 불러와서 사용할 수 있게끔
// 모듈단위로 된 것을 불러올 때 require()을 사용 -> commonJS / es6(import)

// console.log(__dirname); // 디렉토리
// console.log(__filename); // 디렉토리와 파일 이름까지

// require ('./add') ./add를 불러와라
// console.log('Form index.js');


// const add = require ('./add');
// console.log(add(1,2));
// console.log('Form index.js');


// scope(범위) 모듈은 각각의 범위를 가지고 있다
// require ('./batman');
// require ('./superman');


// 같은 변수를 썼어도 모듈별로 각각 관리가 된다.

// 모듈의 기초 형태

// ()() 함수의 자동 실행형태
(function(){
    const superHero = "Superman";
    console.log(superHero);
})()

//모듈의 형태
// (function(export, require, module, __filename, __dirname) {
	//코드
//}())
