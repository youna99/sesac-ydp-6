// 변수 or (함수 매개 변수)가 전달될 때,
// 값 또는 참조가 어떻게 전달되는지?

// #1. pass by value(값에 의한 전달)
// - 원시 타입(primitive type)은 값(value)이 복사되어 전달.

let num = 1;
let num2 = num;
console.log(num, num2); // 1 1
console.log(num === num2); //true

num = 5;
console.log(num);