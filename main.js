/*
// 1 
class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  static getCircumferenceByRadius(radius) {
    return 2 * Math.PI * radius;
  }

  getCopy() {
    return new Circle(this.x, this.y, this.radius);
  }

  static getCircleByParams(x, y, radius) {
    return new Circle(x, y, radius);
  }

  isPointInside(x, y) {
    const distance = Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
    return distance <= this.radius;
  }

  toString() {
    return `Circle with center (${this.x}, ${this.y}) and radius ${this.radius}`;
  }
}

// Приклад використання
const circle = new Circle(0, 0, 5);
console.log(circle.getCircumference()); // 31.41592653589793
console.log(Circle.getCircumferenceByRadius(5)); // 31.41592653589793
const circleCopy = circle.getCopy();
console.log(circleCopy.toString()); // Circle with center (0, 0) and radius 5
const newCircle = Circle.getCircleByParams(10, 10, 2);
console.log(newCircle.isPointInside(10, 12)); // true
console.log(newCircle.isPointInside(10, 15)); // false
console.log(newCircle.toString()); // Circle with center (10, 10) and radius 2 */
// 2
/*function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = { 
  course: "JS fundamental", 
  duration: 3,
  direction: "web-development" 
};

console.log(propsCount(mentor)); // 3*/
//3

