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
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */


const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");


startBtn.addEventListener("click", handleStart);

function handleStart() {
    result.textContent = "";
    startBtn.disabled = true;

    const promises = [...container.children].map(() => {
        return new Promise((resolve, reject) => {
            const random = Math.random();

            if (random > 0.5) {
                resolve('🤑');
            } else {
                reject('👿');
            }
        })
    })

    Promise.allSettled(promises)
        .then(items => {
            const isWinner =
                items.every((item) => item.status === "fulfilled") ||
                items.every((item) => item.status === "rejected");

            items.forEach((item, i) => {
                container.children[i].textContent = "";

                setTimeout(() => {
                    container.children[i].textContent = item.value || item.reason;

                    if (i === items.length - 1) {
                        result.textContent = isWinner ? "Winner" : "Loser";
                        startBtn.disabled = false;
                    }
                }, 1000 * (i + 1))
            })
        })
}



