/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */


// const promise = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if (random > 0.5) {
//             resolve('ok');
//         } else {
//             reject('Oooops');
//         }
//     }, 2000)
// });

// promise
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })





/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */


// const promise = new Promise((resolve, reject) => {
//     resolve(5);
// })

// promise
//     .then(res => {
//         return res * 2;
//     })
//     .then(data => {
//         return data * 5;
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log('finally');
//     })






/**
 * Промисіфікація
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */


// const makeOrder = (dish, onSuccess, onError) => {
//     const random = Math.random()

//     setTimeout(() => {
//         if (random > 0.5) {
//             onSuccess(`Messege ${dish}` )
//         } else {
//             onError('Error')
//         }
//     }, 1000)
// }

// makeOrder(
//     'Text',
//     (str) => {
//         console.log('onSaccess', srt);
//     }
// ),
// (error) => {
//     console.log('onError',error);
//     }


// V //
// V //

// const makeOrder = (dish) => {
//     return new Promise((resolve, reject) => {
//         const random = Math.random()

//         setTimeout(() => {
//             if (random > 0.5) {
//                 resolve(`Messege ${dish}`)
//             } else {
//                 reject('Error')
//             }
//         }, 1000)
//     })
// }

// makeOrder()
//     .then(data => console.log(data))
//     .catch((error) => console.log(error))





/**
 *  Промисіфікація "синхронних" функцій
 * - Promis.resolve()
 * - Promis.reject()
 */




// const makeOrder = (dish) => {
//     const random = Math.random()
//     if (random > 0.5) {
//         return Promise.resolve(`Messege ${dish}`);
//     } else {
//         return Promise.reject('Error')
//     }
// }

// makeOrder()
//     .then(data => console.log(data))
//     .catch((error) => console.log(error))






/**
 *  Promise.all
 *  Prmise.race
 */



// const startTime = Date.now();

// const res1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const currentTime = Date.now()
//             const deltaTime = currentTime - startTime

//             resolve({ title: 'first', time: deltaTime })
//         }, 3000)
//     })
// }

// const res2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const currentTime = Date.now()
//             const deltaTime = currentTime - startTime

//             resolve({ title: 'second', time: deltaTime })
//         }, 1000)
//     })
// }

// const res3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const currentTime = Date.now()
//             const deltaTime = currentTime - startTime

//             resolve({ title: 'third', time: deltaTime })
//         }, 5000)
//     })
// }

// Promise.all([res1(), res2(), res3()]) // чекає всі проміси
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })


// Promise.race([res1(), res2(), res3()]) // найшвидший завершений проміс
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })




/**
 * 
 */


