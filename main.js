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

/*class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(this.surname + " " + this.name);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    console.log(this.surname + " " + this.name + " " + middleName);
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
    return Math.max(1, Math.min(6, course));
  }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
stud1.showFullName("Petrovych"); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); // Current course: 4
*/
//4
//A
/*class SimpleMarker {
  constructor(color, inkAmount) {
    this.color = color;
    this.inkAmount = inkAmount;
  }

  print(text) {
    let printedText = '';
    for (let i = 0; i < text.length; i++) {
      if (this.inkAmount >= 0.5) {
        printedText += text[i];
        if (text[i] !== ' ') {
          this.inkAmount -= 0.5;
        }
      } else {
        break;
      }
    }
    console.log('%c' + printedText, `color: ${this.color}`);
  }
}
//B
class RefillableMarker extends SimpleMarker {
  constructor(color, inkCapacity) {
    super(color, 100);
    this.inkCapacity = inkCapacity;
  }

  refill() {
    this.inkAmount = this.inkCapacity;
  }
}*/
//5
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._experience = 1.2;
  }

  showSalary() {
    let salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
    return salary;
  }

  showSalaryWithExperience() {
    let salary = this.dayRate * this.workingDays * this._experience;
    console.log(`${this.fullName} salary: ${salary}`);
    return salary;
  }

  get showExp() {
    return this._experience;
  }

  set setExp(value) {
    this._experience = value;
  }
}

let workers = [
  new Worker("John Johnson", 20, 23),
  new Worker("Tom Tomson", 48, 22),
  new Worker("Andy Ander", 29, 23)
];

workers.forEach(worker => {
  console.log(worker.fullName);
  worker.showSalary();
  console.log("New experience: " + worker.showExp);
  worker.showSalaryWithExperience();
});

workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

console.log("Sorted salary:");
workers.forEach(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));
