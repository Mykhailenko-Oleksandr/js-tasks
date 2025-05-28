// Об'єкти

const { use } = require("react");

// - Створення об'єкта
// - Вкладені властивості
// - Доступ до властивостей через крапку
// - Доступ до вкладених властивостей
// - Доступ до властивостей через []
// - Зміна значення властивостей
// - Додавання власивостей

// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     isFavorite: true
// };


// - Доступ до властивостей через крапку

// console.log(playlist.tracks);


// - Доступ до властивостей через []

// const key = 'rating';
// console.log(playlist[key]);


// - Зміна значення властивостей

// playlist.name = "New playlist";


// - Додавання власивостей

// playlist.lalal = "Super puper";




// - Типи данних за посиланням
// - Масиви і функції - це об'єкти


// const a = {x: 1, y: 2};
// const b = a; // a === b



// - Короткі всластивості
// - Обчислювальні властивості

// const userName = "Alice";
// const age = 25;

// const obj = {
//     userName, //userName: userName,
//     age       //age: age
// }


// function foo(name, age) {
//     return {
//         name,
//         age
//     }
// }


// const inputName = "color";
// const obj = {
//     [inputName]: "red"  // 'color': 'red'
// }





// Перебір об'єкта

// - Цикл for...in
// - Меnод Object.keys()
// - Метод Object.values()


// const feedback = {
//     good: 3,
//     neutral: 5,
//     bad:10
// }
// let total = 0;

// for (const key in feedback) {
//     total += feedback[key]
// }


// const keys = Object.keys(feedback);
// for (const key of keys) {
//     total += feedback[key]
// }


// const values = Object.values(feedback);
// for (const item of values) {
//     total += item;
// }


//////////////////////////////////////////////////////

/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: "Alice",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// const user1 = {
//   name: "Petya",
//   age: 25,
//   hobby: "css",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for(const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }


// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;

//     const keys = Object.keys(obj);
//     for(const key of keys) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// console.log(foo(user));
// foo(user1);











/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */


// const salaries = {
//     Alice: 160,
//     Yura: 130,
//     Petya: 100
// }

// function summa(obj) {
//     let sum = 0;
//     const values = Object.values(obj);

//     for(const value of values) {
//         sum += value;
//     }
//     return sum;
// }

// console.log(summa(salaries))






