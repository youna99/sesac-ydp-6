class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        let result = this.width * this.height;
        return result;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getDiag() {
        return Math.sqrt(this.width**2 + this.height**2);
    }
};

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
};

class Circle extends Shape {
    constructor(width) {
        super(width);
        this.radius = width;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
};

const rec = new Rectangle(4, 5);
const tri = new Triangle(3, 7);
const cir = new Circle(6);

console.log(rec.getArea());
console.log(tri.getArea());
console.log(cir.getArea());