// && ||

const x = 5;
const result = x || 100;
console.log(result); // 5

const y = 7;
const result1 = x < y && 'yy가 큼'
console.log(result1); // yy가 큼
// 둘 다 true면 오른쪽값이 나옴.

// falsy(무조건 거짓): undefined, null, 0, false, '', NaN
// 나머지는 다 참(true)
 let userColor = 'red';
 let defaultColor = 'blue';
 let currentColor = userColor || defaultColor;
 // 사용자가 값을 지정하면 그 값을 쓰고 지정하지않으면 디폴트값을 씀.
 console.log(currentColor); // red