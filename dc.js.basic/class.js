'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1. Class declaration
class Sexer {
    //constructor
    constructor(name,age){
    //fields
    this.name = name;
    this.age = age;
    }
//methods
    speak() {
    console.log(`${this.name}, Welcome!`);
    }
}

const person = new Sexer('hopago', 25);
console.log(person.name);
console.log(person.age);
person.speak();

//2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        if(value < 0) {
            alert('shit age');
        }
        this._age = value;
    }
} // "UNDERSTAND IT"

const user1 = new User('sexer', 'allday', -1);
console.log(user1.age);

//3. Fields (public, private)
// Latest Tec
class Test {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Test();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
// Latest Tec
class Article {
    static publisher = ['hopago', 'sexpago'];
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//static의 의의: object의 input값과 관련 없이 범용적 class에서 쓸 수 있는 것에 이용

//5. Inheritance
//a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
class Triangle extends Shape {
    draw() {
        super.draw(); //기존 shape draw method
        console.log('new draw');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Object); // true
// ctrl + left click === move to declaration

