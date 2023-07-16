'use strict';

/* class UserStorage {
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
); */

 //My code

    const lgUser = () =>
    new Promise((resolve, reject) => {
    const id = prompt('ID : ');
    const pw = prompt('PW : ');
    setTimeout(
    () => { if (
        (id === 'hopago' && pw === '1234') ||
        (id === 'alpago' && pw === '1234')
    ) {
        resolve(id);
    } else { reject(new Error(alert('undefined user!')))}
    }, 1000)});

    const getRole = userData => new Promise((resolve, reject) => {
    if (`${userData}` === 'hopago') {
        setTimeout(() => resolve(
        console.log(
        {name:`${userData}`, role:'Admin'})
        ), 1000);
    }
    else (reject(new Error(`To ${userData}: Hopago is No.1`)))
    });

    lgUser()
    .then(getRole);

//Dream Code
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