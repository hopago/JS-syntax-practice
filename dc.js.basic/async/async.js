'use strict';

//async & await
//clear style of using promise

//1. async
/*
function fetchUser(){
    // work 10 secs codes
    return 'hopago';
}

const user = fetchUser();
console.log(user);
fetchUser 값 -> user: 10초 후에 전달 -> 페이지 로드 지연
*/

{
function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve('hopago');
    })
}

const user = fetchUser();
user.then(console.log)
}
// same work
{
    async function fetchUser(){
        return 'hopago';
    }

    const user = fetchUser();
}

//2. await
function delays(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delays(3000);
    return 'apple';
}

async function getBanana() {
    await delays(3000);
    return 'banana';
}

function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana().
        then(banana => `${apple}+ ${banana}`);
    });
}

//same work, convenient
{
async function pickFruits2() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
} // getApple() 호출 후 getBanana() 호출, 비효율적
}

pickFruits().then(console.log);
console.log('fast');

{
    async function pickFruits2() {
        const applePromise = getApple();
        const bananaPromise = getBanana();
        const apple = await applePromise;
        const banana = await bananaPromise;
        return `${apple} + ${banana}`;
    } // 병렬적으로 사과, 바나나 값을 가져올 수 있다
}

//3. useful Promise APIS
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log); // 가장 빠르게 반환되는 parameter의 return값을 받아옴

//4. Quiz
// use async
/*
{
class userStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'hopago' && password === 'sex') ||
                    (id === 'alpago' && password === 'sex')
                ) {
                    resolve(id);
                } else {
                    reject(new Error(`not found`))
                }
            }, 2000);
        });
    };
    
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'hopago') {
                    resolve({ name: 'hopago', role: 'admin'} );
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('id : ');
const password = prompt('enter your password');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
}
*/

function lateSequence (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class db {
    async dbUser(id, password) {
    try{
        if( (id === 'hopago' && password === '1234') ||
        (id === 'alpago' && password === '1234') ) {
        await lateSequence (1000);
        return id;}
    }   catch(error) {
        await lateSequence (1000);
        return (`new Error`);
    }
    };

    async catch(id) {
        try {
            if ( id === 'hopago' ) {
                await lateSequence (1000);
                return {name: 'hopago', roles: 'admin'};
            }
        } catch {
            await lateSequence (1000);
            return 'no access'
        }
    }
}

/*
const db = new db();
const id = prompt('id : ');
const password = prompt('pw : '); 
db
.dbUser(id, password)
.then(db.catch)
*/