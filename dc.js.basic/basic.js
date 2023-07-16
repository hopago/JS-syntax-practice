//1. Use strict
//added in ES 5
'use strict';

//2. Variable
//let (added in ES6), (read n write)
//var hoisting (move declaration from bottom to top)
//var - has no block scope
/*
ex => age = 4;
var age;

{
    age = 4;
    var age;
}
var = 전역 변수
*/

//3. const, r(read only)
/*
favor immutable data type always for a few reasons :
- security
- thread safety
- reduce human mistakes
*/

/* 4.Variable types
primitive, single item: number, string, boolean, null, symbol, undefined
object, box container
function, first-class function
*/

function consoleView (input1, input2, input3) {
    console.log(input1, input2, input3);
};
function consoleLogAndType (input1) {
    console.log(`value: ${input1}, type: ${typeof input1}`);
}

const count = 17; // integer
const size= 17.1; // decimal number
consoleView(`value: ${count}, type: ${typeof count}`);
consoleView(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
consoleView(infinity, negativeInfinity, nAn);

// string
const char = 'c';
const sex = 'sex';
const greeting = 'hello ' + sex;
consoleView(`value: ${greeting}, type: ${typeof greeting}`);
const hiSex = `hi ${sex}!`; // template literals (string)
consoleView(`value: ${hiSex}, type: ${typeof hiSex}`);
consoleView('value: ' + hiSex + 'type: ' + typeof hiSex);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false
consoleLogAndType(canRead);
consoleLogAndType(test);

//null
let nothing = null;
consoleLogAndType(nothing);

//undefined
let x = undefined;
consoleLogAndType(x);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
symbol1.description // symbol to string
/* symbol은 고유식별자가 필요할 때 쓰여지는 값, 주어진 string과 상관없이 고유식별자 생성*/

//5. Dynamic typing: dynamically typed language
let text = 'sex';
consoleLogAndType(text);
text = 1;
consoleLogAndType(text);
text = '7' + 5;
consoleLogAndType(text);
text = '8' / '2';
consoleLogAndType(text);

//operators
//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

const NumericOperators = ['+', '-', '/', '*', '%', '**']

//3. Increment and Decrement operators

let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
// --counter, counter-- : same work

//4.Assignment operators
let k = 3;
let y = 6;
k += y; // k = k + y
k -= y;
k *= y;
k /= y;

//5. Comparison operators
// <, <=, >, >=

//6.Logical operators: || (or), &&(and), ! (not)
const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`); // heavy한 condition을 뒤로 배치하는 것이 효율적
console.log(`and: ${value1 && value2 && check()}`); // same...

function check () {
    for ( let m = 0; m < 10, m++;) {
        console.log('m');
    };
    return true;
}

console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, withe type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const sexA = { name: 'sex1'};
const sexB = { name: 'sex2'};
const sexC = sexA;
console.log(sexA == sexB); // F
console.log(sexA === sexB); // F
console.log(sexA === sexC); // T

// equality - quiz
console.log(0 == false); // T
console.log(0 === false); // F
console.log('' == false); // T
console.log('' === false); // F
console.log(null == undefined); // T
console.log(null === undefined); // F

//8. Condition operators: if
//if, else if, else
const name = 'sex';
const name2 = 'sexPeople'
const name3 = 'else'
function sexUser (name) {
if (name === 'sex') {
    console.log(`Welcome, ${name}`);
} else if (name === 'sexPeople') {
    console.log('You are amazing sexPeople');
} else {
    console.log('No more dick!')
}
}
sexUser(name);
sexUser(name2);
sexUser(name3);

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in Typescript
switch ('partyPeople') {
    case 'sex':
        console.log('Sex again!');
        break;
    case 'sexPeople':
    case 'partyPeople': // 케이스 'sexPeople', 'partyPeople'이 동일한 return 값을 준다면 case를 연속해 선언할 수 있다.
        console.log('Good for U!')
        break;
    case 'else':
        console.log('You have to do sex!')
        break;
    default:
        console.log('No more dick!');
        break;
}

//11. Loops
//while loop, while the condition is truthy,
//body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//Q1. 0~10 짝수 출력
for ( let i = 0; i < 10; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}
//Q2. 0~10 8일 때 함수 종료
for ( let i = 0; i < 10; i++) {
    console.log(i);
    if ( i === 8) {
        break;
    }
}

//Function
//-fundamental building block in the program
//-subprogram can be used multiple times
//performs a task or calculates a value

//1. Function declaration
//function name(param1, pram2) {body ... return;}
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS

function printHello() {
    console.log('Sex.');
}
printHello();

function log(message) {
    console.log(message);
}
log('SEX!!');

//Typescript - Playground
/*function log(message: string): number{
    console:log(message);
    return 0;
}*/

//2. Parameters
//primitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const sexEveryDay = { name: 'hopago' };
changeName(sexEveryDay);
console.log(sexEveryDay);

//3.Default parameters ( added in ES6 )
function showMessage(message, from=undefined) {
    console.log(`${message} by ${from}`);
}

showMessage('HI', 'HOPAGO');

//4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}
printAll('hopago','sexpago','sexamerica');

//5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();
/* LOCAL TO GLOBAL (O), GLOBAL To LOCAL (X), function () { function () {} } same work */

//6. Return a value
function sum(a,b) {
    return a+b;
}
const result = sum(1,2);
console.log(`sum: ${result}`);

//7.Early return, early exit

//shit code
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

//good code
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//2. Callback function using unction expression
function randomQuiz (answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    }
    else {
        printNo();
    }
}

//named function
//better debugging in debugger's stack traces
//recursions
const printYes = function () {
    console.log('Sex!');
}
const printNo = function () {
    console.log('Sex...');
}
randomQuiz('love you', printYes, printNo);
randomQuiz('empty', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = function () {
    console.log('sexPrint');
}

const sexPrint = () => console.log('sexSexSexy');
const add = (a, b) => a + b; // const add = function (a,b) { return a + b; }

//IIFE: Immediately invoked Function Expression
(function hello(){console.log('IIFE');})();

//function calculate(command, a, b)
//command: add, subtract, divide, multiply, remainder

function sexCalc (command, a, b) {
    const operator = ['+', '-', '*', '/', '**', '%'];
    if (operator.includes(command)){
        if(command == '+') {
            console.log(a + b);
        }
        else if (command == '-'){
            console.log(a - b);
        }
        else if (command == '*'){
            console.log(a * b);
        }
        else if (command == '/'){
            console.log(a / b);
        }
        else if (command == '**'){
            console.log(a ** b);
        }
        else if (command == '%'){
            console.log(a % b);
        }
    }
    else{alert('Error!')}
}
sexCalc ('sex', 15, 2); // alert
sexCalc ('**', 5, 5); // 5**5

// Class in Typescript
/*class sexSex {
    name-fields: 'hojun'; - property
    age: 23;
    sexSkill(); - method
}*/

