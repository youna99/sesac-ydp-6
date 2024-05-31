let arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i + 1;
}


// 1. for문
let sum = 0;
for (let i = 0; i < 100; i++) {
    sum += arr[i]; 
}
console.log(sum);

// 2. for of문
let sum2 = 0;
for (let num of arr) {
    sum2 += num
}
console.log(sum2);

// 3. forEach문
let sum3 = 0;
arr.forEach(function(num) {
    sum3 += num
})
console.log(sum3);

// 내장 메소드
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = fruits1.filter(function(x) {
    return fruits2.includes(x);
})
console.log(same);

let diff = fruits1.filter(function(y) {
    return !fruits2.includes(y)
})
console.log(diff);