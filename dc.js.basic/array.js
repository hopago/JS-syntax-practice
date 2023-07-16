'use strict';
// 자료구조, 알고리즘을 공부하자...

// Array>

//1. Declaration
const arr1 =  new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['apple', 'watermelon'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//3. Looping over an array
//a. for
let i = 0;
for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

//c.forEach
fruits.forEach(function(fruits, index, array){
    console.log(fruits, index);
});
//same work
fruits.forEach((fruits, index) => console.log(fruits, index));

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('strawberry','peach');
console.log(fruits);
//pop: remove an item from the end
fruits.pop();
console.log(fruits);
//unshift: add an item to the beginning
fruits.unshift('1','2');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note: shift, unshift are slower than pop, push - why? 
// data의 이동 : pop, push의 경우 새로운 index 값의 추가
// shift, unshift : indexOf[0] to [1], [1] to [2] 로 이동하면서 indexOf[0] 값을 비움

//remove an item by index position
//splice: remove an item by index position
fruits.push('x','y','z');
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);
fruits.splice(1, 1, 'add1', 'add2');
console.log(fruits);

//combine two arrays
const fruits2 = ['anoApple', 'anoBanana'];
const newFruits = fruits.concat(fruits2); // Array.concat(anotherArray);
console.log(newFruits);

//5. Searching
//find the index
console.log(fruits);
console.log(fruits.indexOf('add1'));
console.log(fruits.indexOf('add2'));
console.log(fruits.indexOf('k'));

//includes
console.log(fruits.includes('anoApple'));

//lastIndexOf
console.log(fruits);
fruits.push('2'); // fruits[0]과 같은 'string'
console.log(fruits.indexOf('2')); // just indexOf: 0부터 찾음
console.log(fruits.lastIndexOf('2')); // lastIndexof: 뒤에서 찾음

// map, filter: 고차함수 공부해야 한다...