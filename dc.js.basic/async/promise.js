'use strict';

//Promise is a JavaScript object for asynchronous operation.
//state: pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('input');
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    // work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        reject(new Error('shit network'))
    }, 2000);
});


//2. Consumers: then, catch, finally
promise.then((value) => {
    console.log(value);
}); //promise.then() - resolve의 callback
promise2.catch(error => {
    console.log(error);
}) //promise2.catch() - reject의 callback
.finally(() => {
    console.log('finally')
}); // resolve, reject 여부와 관계없이 마지막에 실행

//3. Promise chaining
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num - 1)
        }, 1000);
    });
})
.then(num => console.log(num));

//4. Error Handling

/*
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000)
    });
console.log(getHen());
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 달걀`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 치킨`), 1000);
    });

getHen()
.then(hen => getEgg(hen)) // === .then(getEgg)
.then(egg => cook(egg)) // === .then(cook)
.then(meal => console.log(meal)); // .then(console.log);
*/

//Error handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000)
    });
console.log(getHen());
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 치킨`), 1000);
    });

getHen()
    .then(getEgg)
    .catch(error => {
        return 'error solve';
    }) // error for func
    .then(cook)
    .then(console.log)
    .catch(console.log);