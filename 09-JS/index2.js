// 클래스

class House {
    constructor (year, name, window) {
        this.year =  year;
        this.name = name;
        this.window = window;
    }
    getAge() {
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요!`);
    }
    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
    }
}

const house1 = new House(1990, '롯데', 1);
// 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야한다.
console.log(house1); // House { year: 1990, name: '롯데', window: 1 }
console.log(typeof house1); // object
console.log(house1.year); // 1990
house1.getAge(); // 롯데는 건축한지 34년 되었어요!
house1.getWindow(); // 롯데의 창문은 1개 입니다!



// 클래스 상속
class Apartment extends  House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트의 
            총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
    }
    // 자식에 부모와 같은 이름의 메서드가 있으면 덮어쓰기 된다. (= 오버라이드)
    getWindow() {
        return `${this.name} 아파트의 ${this.window}개의 창문은
            ${this.windowMaker} 회사에서 생산되었습니다.`
    }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'kcc'); // 인스턴스 생성
console.log(apt1); 
// Apartment {
//     year: 2022,
//     name: '래미안',
//     window: 3,
//     floor: 20,
//     windowMaker: 'kcc'
//   }
console.log(apt1.getAptInfo()); // 2022년에 지어진 래미안 아파트의 총 층수는 20 이며, 창문의 개수는 3이다.
console.log(apt1.getWindow()); // 래미안 아파트의 3개의 창문은 kcc 회사에서 생산되었습니다.