'use strict';

//JS is synchronous(동기적).
//Execute the code block in order after hoisting.
//hoisting: var, function declaration

console.log('동기'); // 동기
// setTimeout(() => console.log('2'), 1000); 비동기, callback

//Synchronous callback
function printImmediately(alert){
    alert();
}
printImmediately(() => console.log('hello')); // callback + 동기

//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 1000); // callback + 비동기

//Callback sequence example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'hopago' && password === 'sex') ||
                (id === 'coder' && password === 'sexer')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'hopago') {
                onSuccess({name: 'hoapgo', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password')
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
        user,
        (userWithRole) => {
            alert(`Hello, ${userWithRole.name}, you have a ${userWithRole.role} role!`);
        },
        error => {
            console.log(error);
        }
        );
    },
    error => {console.log(error)}
);

// callback chain problem: 1.가독성이 떨어진다 2.에러 발생 혹은 디버깅 시 문제점을 파악하기 어렵다 3.유지, 보수가 어렵다