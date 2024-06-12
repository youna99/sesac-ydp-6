class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        let result = this.width * this.height;
        return result
    }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());