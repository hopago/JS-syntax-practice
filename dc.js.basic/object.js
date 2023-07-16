'use strict';
//Objects
//one of the JS's data types
//a collection of related data and/or functionality
//Nearly all objects in JS are instances of Object
//object = { key : value };

//1. Literals and Property
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
const object = {name: 'hopago', age:25};
object.sex = 'male';
console.log(object.sex);
delete object.sex;
console.log(object.sex);

//2. Computed properties
// key should be always string
console.log(object.name);
console.log(object['name']);
object['sexEp'] = true;
console.log(object.sexEp);

const sexpago = { name : 'sexpago', exp : 69 };
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(sexpago, 'exp'); // key should be 'string'

//3. Property value shorthand
const person1 = { name: 'sex1', age:'19' };
const person2 = { name: 'sex2', age:'20' };
const person3 = { name: 'sex3', age:'21' };
const person4 = { name: 'sex4', age:'22' };

//4. Constructor function
function makePerson (name, age) {
    return {
        name,
        age,
    };
}

const person5 = makePerson('sex5', 23)

console.log(person5);

//5. in operator: property existence check (key in obj)
console.log('name' in person5);

//6. for..in vs for..of
//for (key in obj)

for (let key in object) { // key 앞에 let, var 등 변수 선언을 해주자!
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for( let i = 0; i < array.length; i++){
    console.log(array[i]);
}
for(var value of array){
    console.log(value);
}

//7. Sex cloning
//Object.assign(test, [obj1, obj2, obj3...])
const user = { name: 'hopago', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (var key in user) {
    user3[key] = user[key]; // user3[key] : new key 값 생성자 = user[key] : user.key 값의 value
}

console.log(user3);

const user5 = {};
Object.assign(user5, object);
console.log(user5);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // fruit 1 - 2 covered
console.log(mixed.color);
console.log(mixed.size);
