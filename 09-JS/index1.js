// spread 연산자 ...
const a = [1, 2, 3];
const b = [4, 5];

// 배열 두 개를 합침.
const spread = [...a, ...b];
console.log(spread); // [ 1, 2, 3, 4, 5 ]

const c = [...'hello'];
console.log(c); // [ 'h', 'e', 'l', 'l', 'o' ]

// 기존방식
const d = 'hello'.split('');
console.log(d); // [ 'h', 'e', 'l', 'l', 'o' ]

// spread 연산자를 object
const chip = {
    base: 'chip',
    company: 'lotte',
};

const potaoChip = {
    ...chip,
    flavor: 'potato',
}
console.log(chip); // { base: 'chip', company: 'lotte' }
console.log(potaoChip); // { base: 'chip', company: 'lotte', flavor: 'potato' }

// ------------------------------
// rest 파라미터
// 함수에서 사용시
const values = [10, 20, 30, 40, 50, 60];
function get(a, b, ...rest) { // 순서대로 읽고 나머지는 다 rest에 넣어줘.
    console.log(a, b); // 10 20
    console.log(rest); // [ 30, 40, 50, 60 ]
}
get(...values);

// ------------------
const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
};
const {flavor, ...rest} = icecream; // rest는 그냥 변수일뿐임.
console.log(flavor); // choco
console.log(rest); // { company: 'lotte', price: 1000 }

// 배열
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1, two1); // 1 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8 ]