// 구조분해 할당

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ['a','b','c'];

// const [one, two, three, four, five] = arr1; // 순서에 맞춰서 들어간다.
// console.log(one, two, three, four, five); // 1 2 3 4 5


// const [x, y, z, alpha] = arr2;
// console.log(x, y, z, alpha); // a b c undefined

// 변수값의 교환
// 2개의 변수값을 교환할때는 제 3의 변수를 사용했어야했다.
// 하지만 지금은 새로운 문법이 생겼다.
// let num1 = 1;
// let num2 = 2;
// console.log('Before:', num1, num2);

// [num2, num1] = [num1, num2];
// console.log('After:', num1, num2);




// const lists = ['apple', 'grape'];
// [f1, f2, f3='orange'] = lists; // 혹시 값이 없으면 default 값을 지정
// console.log(f1,f2,f3); // apple grape orange

// --------------------------------------

// // 객체 object : key와 value로 이루어진것. {}
// const obj = {
//     title : '엘리먼트',
//     content : 'fun',
//     num : 5
// }

// // .표기법
// console.log(obj.title);
// console.log(obj.content);
// console.log(obj.num);
// console.log(obj['title']);
// console.log(obj['content']);
// console.log(obj['num']);

// // 객체 구조 분해, 디폴트값을 줄 수 있음.
// const {num, title, content, star = 1000} = obj;
// console.log(num, title, content, star); // 5 엘리먼트 fun 1000

// const {a1, b1, c1} = obj; // key의 이름을 사용해야함.
// console.log(a1, b1, c1); //undefined undefined undefined

// // undefined: 변수는 할당되었지만 (=초기화) 값이 할당되지않음.


const lectureInfo = {
    name : 'Coding on',
    part: 'web',
    leader: 'Kim',
}
console.log(lectureInfo); //{  name: 'Coding on', part: 'web', leader: 'Kim' }


function getInfo(lecture) {
    const {name, part, leader} = lecture;
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader}입니다.`
    return output;
}
const result = getInfo(lectureInfo);
console.log(result);