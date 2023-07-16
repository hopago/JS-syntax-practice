'use strict';

//JSON
//JS Obj Notation

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol("id"), // not import in JSON
    jump: (name) => {
        console.log(`${name} can jump!`);
    } // not import in JSON
};

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {console.log(`key: ${key}, value: ${value}`);
return key === 'name' ? 'hopago' : value;}) // key === 'name'일 경우, ? 'hoapgo' = value 값을 hopago로 설정, : value = mean if key !== name value 값을 그대로 사용
console.log(json);

//2. JSON to Obj
//parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
const rabbitName = ['sex1', 'sex2', 'sex3']
rabbit.jump(rabbitName[0]);

//obj.jump(); // rabbit.jump는 method이므로 json으로 변형될 때 포함되지 않는다, 따라서 obj에 jump method는 존재하지 않는다
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); obj.birthDate의 database는 string이므로 getDate는 non define

//Reviver (callback function)
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
})

console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate());