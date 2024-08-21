// only TS type (ts type)

// * 튜플 (Tuple)
// - 튜플은 고정된 개수의 요소를 가짐.
// - 각 요소의 타입이 미리 지정된 배열.
// - 각 요소의 순서가 중요하며 순서에 따라 타입이 다를 수 있음.

// 튜플 타입 선언
let drink: [string, string];

// 튜플 값 할당
drink = ['cola', 'cocaCola'];
console.log(drink);

// 튜플 타입 선언과 할당을 동시에 하는 법
let drink2: [string, string] = ['cola', 'pepci'];
console.log(drink2);

// 튜플의 데이터를 변경할 때에도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근.
// 또한, 배열의 메소드도 사용 가능.

// 인덱스로 접근해 값 변경 가능
drink2[0] = 'zeroCola';
drink2[1] = 'zeroPepci';
console.log(drink2);

drink2.push('good');
console.log(drink2);

/**
 * * 튜플의 숨겨진 한계
 * : 길이와 타입이 정해진 것처럼 보이지만, push 메서드가 동작하므로 그 정의가 깨짐.
 * 튜플이라 고정된 개수가 변하면 안되는데 변해버림.
 *
 * Why?
 * - 이는 TS의 타입 시스템이 배열 메소드와 관련된 동작을 '완전히' 제한하지 않기 때문입니다.
 *
 * 이처럼 타입 시스템의 의도와 어긋나는 동작을 방지하고자 한다면,
 * as const를 사용하거나, readOnly 키워드를 사용하여 튜플을 불변으로 만들 수 있습니다.
 */

// readOnly
// - 요소의 타입 순서와 길이를 "완벽히" 고정.
let drink3: readonly [string, number] = ['cider', 2000];
// drink3.push('hello'); // Error
console.log(drink3);

// * type 별칭
// - type 별칭을 이용해 type 선언 가능!
type campionInfo = [number, string, number];

// 엄격하고 명확히 데이터를 관리해야 하는 작업일 경우 사용하면 이점!
let most1: campionInfo = [1, 'Yumi', 50000];
let most2: campionInfo = [2, 'Timo', 100000];

// ################################################
// * Enum
// - 사용하는 이유 Why?
// 1. 분야별로 종류를 정의하여 명확하게 사용.
// 2. 하드코딩의 실수를 줄이기 위해.

// - 숫자 값 지정 가능. (기본)
// enum Auth {
//     admin = 0,
//     user = 1,
//     guest = 2,
// }

// - #1. enum은 기본으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
    admin,
    user,
    guset,
}
console.log(Auth.admin); // 0
console.log(Auth.user); // 1
console.log(Auth.guset); // 2

// - #2. 정의되지 않은 값은 "이전" 값에 1씩 더해짐.
enum Menu {
    pasta = 4000,
    pizza = 5000,
    chicken, // 5001
}
console.log(Menu.pasta);
console.log(Menu.pizza);
console.log(Menu.chicken);

//  - #3. 문자열 지정 가능
enum Cafe {
    americano = '아메리카노',
    latte = '카페라떼',
}
console.log(Cafe.americano); // 아메리카노
console.log(Cafe.latte); // 카페라떼

// - #3-2 문자열 & 숫자 혼합 지정 가능
enum Cake {
    choco, // 0
    vanilla = 200, //200
    mango, // 201
    kiwi = 'kiwi', // 'kiwi'
}
console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.mango);
console.log(Cake.kiwi);

// ################################################
// * Any
// 1. 명시적 타입 지정
let val: any;
val = true;
val = 'Dog';
console.log(val);

// 2. 암시적 타입 지정
let val2;
val2 = false;
val2 = 'Cat';
console.log(val2);

// 실습
let olimpic_newgame: readonly [object, boolean] = [
    {
        name: '쇼트트랙',
        type: '혼성계주',
    },
    true,
];

// olimpic_newgame[1] = false; // error
console.log(olimpic_newgame);

// ################################################
// * Interface

// #1. 객체 타입 정의
// - interface 키워드 사용
interface Crew {
    name: string;
    readonly age: number;
    exp: boolean;
}

const crew1: Crew = {
    name: 'Damon',
    age: 20,
    exp: true,
};
// - "Crew" 인터페이스는 세 가지 속성을 요구.
// - crew1 객체는 이 구조를 따라야 함.
// - 객체 안에 순서는 상관없음.
console.log(crew1);

// #2. 선택적 속성
// - 모든 속성이 필수는 아님!
// - '?' 붙이기
interface Crew2 {
    name: string;
    age?: number; // age는 선택적 속성
}

const crew2: Crew2 = {
    name: 'Damon',
};
console.log(crew2);
// crew2 객체는 age 속성이 없어도 유효함.

// #3. readOnly 읽기 전용 속성
// - 객체가 초기화 된 후에는 변경할 수 없음.
const crew3: Crew = {
    name: 'john',
    age: 22,
    exp: true,
};
crew3.name = 'Son';
// crew3.age = 30;
console.log(crew3);

// #4. 상속도 가능
enum Score {
    Aplus = 'A+',
    A = 'A',
    B = 'B',
    C = 'C',
}

// #5. 인터페이스 확장
// - 기존 인터페이스의 모든 속성 포함 및 속성 추가
interface Team extends Crew {
    // {name, age, exp}의 속성도 가지게 됨.
    position: string;
    readonly personnel?: number; // 없어도 되는 값 처리
    [grade: number]: Score; // Score를 상속

    // ** 인덱스 시그니처
    // - 객체가 어떤 키로든 접근할 수 있도록 허용하고, "키와 그에 대응하는 값의 타입"을 정의할 수 있는 방법을 제공
    // [grade: number] - 숫자인 키(key)
    // [grade: number]: string - 숫자 키를 가진 객체가 문자열 값을 가질 것임을 명시.
}

const first: Team = {
    name: 'Damon',
    age: 20,
    exp: true,
    position: 'FrontEnd',
    1: Score.Aplus,
};
console.log(first); // { '1': 'A+', name: 'Damon', age: 20, exp: true, position: 'FrontEnd' }

// 값 변경 (점 접근법, 대괄호 법)
first.position = 'Backend';
first['exp'] = false;
console.log(first); // { '1': 'A+', name: 'Damon', age: 20, exp: false, position: 'Backend' }

// #6. 교차 타입: 두 개 이상의 interface를 합치는 것.
interface Toy {
    name: string;
    start(): void; // void: return 안함.
}
interface Car {
    name: string; // 공통된 속성을 가지고 있어도 상관없음.
    color: string;
    price: number;
}

interface ToyCar extends Toy, Car {} // 인터페이스 확장을 사용한 교차 타입.
const toyCar: ToyCar = {
    name: 'tayo',
    start() {
        console.log('출발!!!!'); // 함수도 가능
    },
    color: 'blue',
    price: 5000,
};
console.log(toyCar); // { name: 'tayo', start: [Function: start], color: 'blue', price: 5000 }

// #####################################
// * [번외] type 사용
type Gender = 'F' | 'M';
type Person = {
    name: string;
    age?: number;
    like?: string[];
    gender: Gender; // 위에서 정의한 'Gender' 타입 가짐 . => 'F', 'M' 둘 중 하나여야 함.
};

const IU: Person = {
    name: 'IU',
    age: 30,
    gender: 'F', // Gender 타입에 선언된 값만 넣을 수 있음.
};
console.log(IU); // { name: 'IU', age: 30, gender: 'F' }

// 실습
interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
};

let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
};
