// Функція зворотнього виклику(callback)

// - Функція як значення
// - Колбек-функції
// - Інлайн-колбеки

// function fnA(num) {
//     console.log('fnA', num * 2);
// }

// function foo(a, b, callback) {
//     console.log(callback);
//     callback(2);
//     return a + b;
// }

// console.log(foo(1, 2, fnA));

// function calc1(a, b) {
// console.log(hello);
// console.log(lalalal);
//     const result = a + b;
//     console.log(result);
// }

// function calc2(a, b) {
//   console.log(hello);
//   console.log(lalalal);
//   const result = a - b;
//   console.log(result);
// }

// V //
// V //
// V //

// function calc1(a, b, callback) {
//     console.log(hello);
//     console.log(lalalal);
//         const result = callback(a, b);
//         console.log(result);
// }

// calc1(10, 2, function (x, y) {
//     return x + y;
// })

// calc1(5, 3, function (x, y) {
//     return x - y;
// })

// function each(array, callback) {
//     const newArr = [];
//     for (const num of array) {
//         newArr.push(callback(num))
//     }
//     return newArr;
// }
// console.log(each([64, 49, 36, 25, 16],
//     function (value) {
//         return value * 2;
//     }));

//////////////////////////////////////

// Стрілочні функції

// - Оголошення
// - Явне і неявне перетворення
// - Псевдомасив arguments (...args)
// - Інлайн стрілочні функції

// function add(a, b) {
//     return a + b;
// }

//           // V //
//           // V //

// const addArrow1 = (a, b) => {
//     return a + b;
// }

//           // V //
//           // V //

// const addArrow2 = (a, b) => a + b;

////////////////////////////////////

//  Метод forEach(callback)

// - Поелементно перебирає масив
// - Нічого не повертає
// - Замінює класичний for, якшо не потрібно переривати цикл

// const numbers = [5, 10, 15, 20];

// // numbers.forEach(function (number, index, arr) {
// //     console.log(number, index, arr);
// // })

// let sum = 0;

// numbers.forEach(num => sum += num);

/////////////////////////////////////////////

// Array.prototype.map()

// - Поелементно перебирає масив
// - Не змінює оригынальний масив
// - Повертає новий масив такої ж довжини

// names.map((item, index, arr) => {})

// const getModels = (cars) => {
//     const arr = [];
//     cars.forEach(item => {
//         arr.push(item.model);
//     })
//     return arr;
// }

// V //
// V //

// const getModels = (cars) => {
//     return cars.map(item => item.model);
// }

//////////////////////////////

// Метод flatMap

// розгортає масиви

// const tags = tweets.flatMap(item => item.tags);

// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = (cars) => {
//     const arr = [];
//     cars.forEach(item => arr.push(item.model))
//     return arr;
// }

// console.log(getModels(allCars));

// const getModels = (cars) => {
//     return cars.map((item) => item.model);
// }

// console.log(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(item => {
//         return {
//             ...item,
//             price: item.price * (1 - discount)
//         }
//     })
// }

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

/*
 * Збільшуємо кількість годин гравця за id
 */
// const playerId = "player-3";

// const update = (arr, id) => {
//     return arr.map((item) => {
//         if(item.id === id) {
//             return {
//                 ...item,
//                 timePlayed: item.timePlayed + 100
//             }
//         }

//         return item;
//     })
// }

// console.table(update(players, playerId));
