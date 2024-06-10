// 함수 선언
/* const add = (a, b) => {
    return a + b
};*/

const add = (a, b) => a + b // 위에 코드 생략 버전
// add함수를 다른 js파일에서 불러와 사용할 수 있도록 내보내기
module.exports = add;